import React, { useEffect, useMemo, useState } from "react";
import { Fade } from "react-awesome-reveal";
import useSWR from "swr";
import uniq from "lodash.uniq";

import {
  PointsStoreModal,
  FilterSearch,
  ShopCard,
  CategoryFilter,
  SortFilter,
  PriceFilter,
} from "components";

import CardImage1 from "assets/images/points-store-card-1.png";
import CardImage2 from "assets/images/points-store-card-2.png";
import CardImage3 from "assets/images/points-store-card-3.png";
import { PointsStoreResponse, Product } from "types";
import { useMediaQuery } from "hooks";
import { useTranslation } from "react-i18next";

type Category = { label: string; checked: boolean };

export const PointsStore: React.FC = () => {
  const { t } = useTranslation();

  const matches = useMediaQuery("(min-width: 768px)");

  const { data, isLoading } = useSWR<PointsStoreResponse>(
    "https://leads-bonus.ru/api.shop"
  );

  const sortVariants = t("pointsStore:sortVariants", {
    returnObjects: true,
  }) as string[];
  const products: Product[] = (() => {
    const productsFromApi = data?.items ?? [];
    const productsText = t("pointsStore:items", {
      returnObjects: true,
    }) as Record<string, any>;

    for (const product of productsFromApi) {
      if (Object.hasOwnProperty.call(productsText, product.id)) {
        product.name = productsText[product.id].name;
        product.desc = productsText[product.id].desc;
        product.category = productsText[product.id].category;
      }
    }

    return productsFromApi;
  })();

  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [categories, setCategories] = useState<Category[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(sortVariants[0]);

  const [range, setRange] = useState({ min: 0, max: 0 });
  const [boundsRange, setBoundsRange] = useState({ min: 0, max: 0 });

  const [search, setSearch] = useState("");

  const handleCategoryClick = (label: string) => {
    setCategories((p) =>
      p.map((opt) => {
        if (opt.label !== label) return opt;

        return {
          label: opt.label,
          checked: !opt.checked,
        };
      })
    );
  };

  const handleProductClick = (id: string) => () => {
    setSelectedProductId(id);
    setIsOpen(true);
  };

  const handleSortChange = (label: string) => {
    setSelectedSort(label);
  };

  const selectedProduct = products.find(({ id }) => id === selectedProductId);

  const filteredProducts = useMemo(() => {
    const selectedCategories = categories
      .map(({ label, checked }) => (checked ? label : undefined))
      .filter(Boolean);

    return products
      .filter((product) => {
        if (selectedCategories.includes(t("pointsStore:allCategories"))) {
          return true;
        }

        return selectedCategories.includes(product.category);
      })
      .filter((product) => {
        return (
          Number(product.price) > range.min && Number(product.price) < range.max
        );
      })
      .filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => {
        if (selectedSort === sortVariants[0])
          return Number(a.price) - Number(b.price);

        return Number(b.price) - Number(a.price);
      });
  }, [
    categories,
    products,
    range.max,
    range.min,
    search,
    selectedSort,
    sortVariants,
    t,
  ]);

  const infoCardsText = t("pointsStore:infoCards", {
    returnObjects: true,
  }) as any[];
  const infoCards = [
    {
      image: CardImage1,
      ...infoCardsText[0],
    },
    {
      image: CardImage2,
      ...infoCardsText[1],
    },
    {
      image: CardImage3,
      ...infoCardsText[2],
    },
  ];

  useEffect(() => {
    if (products.length === 0) return;

    if (boundsRange.max === 0) {
      const prices = products.map(({ price }) => Number(price));

      const max = Math.max(...prices);
      const min = Math.min(...prices);

      setBoundsRange({ max, min });
      setRange({ max, min });
    }

    // if (categories.length === 0) {
    const newCategories = uniq(products.map(({ category }) => category));

    setCategories([
      { label: t("pointsStore:allCategories"), checked: true },
      ...newCategories.map((label) => ({ label, checked: false })),
    ]);
    // }
    const sortVariants = t("pointsStore:sortVariants", {
      returnObjects: true,
    }) as string[];
    setSelectedSort(sortVariants[0]);
  }, [categories.length, products, boundsRange.max, t]);

  return (
    <section className="base-container mb-24 lg:mb-36">
      <Fade duration={500} direction="up" triggerOnce>
        <h1 className="heading-1 mb-28 text-center lg:mb-40">
          {t("pointsStore:title")}
        </h1>
      </Fade>

      <div className="mb-20 grid grid-cols-1 justify-between gap-2 md:grid-cols-3 lg:mb-24">
        <Fade cascade direction="up" duration={500} damping={0.3} triggerOnce>
          {infoCards.map(({ image, supTitle, title, subTitle }, i) => (
            <div
              key={i}
              className="relative h-full overflow-hidden rounded-2xl bg-text-100 pb-6 pt-6 shadow-100 md:pb-9 md:pt-[clamp(12rem,12vw,20rem)] 3xl:pb-12"
            >
              <img
                className="absolute -right-20 -top-10 z-10 w-full max-w-[260px] object-contain md:top-0 md:max-w-[clamp(20rem,18vw,35rem)]"
                src={image}
              />
              <div className="relative z-20 pl-4 pr-28 md:pl-9 md:pr-0">
                <p className="sub-heading-3 mb-[10px] font-semibold">
                  {supTitle}
                </p>
                <h3 className="heading-3 mb-[10px] md:pr-20">{title}</h3>
                <p className="sub-heading-3 font-semibold md:pr-8">
                  {subTitle}
                </p>
              </div>
            </div>
          ))}
        </Fade>
      </div>

      {!isLoading && (
        <>
          <Fade duration={500} direction="up" triggerOnce>
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <CategoryFilter
                categories={categories}
                onCategoryClick={handleCategoryClick}
                position={matches ? "bottom left" : "bottom center"}
                // newCategoryCount={2}
              />
              <SortFilter
                options={sortVariants}
                selectedOption={selectedSort}
                onChange={handleSortChange}
              />
              <PriceFilter
                className="-order-2 md:order-none md:mr-auto"
                boundsRange={boundsRange}
                onChange={setRange}
              />
              <FilterSearch
                className="order-first w-full rounded-lg border-none shadow-[0px_2px_10px_0px_rgba(0,0,0,0.08)] sm:w-auto md:order-last md:w-auto"
                inputClassName="text-sm"
                placeholder={t("pointsStore:search")}
                value={search}
                onChange={setSearch}
              />
            </div>
          </Fade>

          {filteredProducts.length === 0 ? (
            <p className="sab-heading-3 text-center">
              {t("pointsStore:nothingFound")}
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:gap-[30px]">
              {filteredProducts.map((data) => (
                <ShopCard
                  key={data.id}
                  data={data}
                  details
                  onDetailsClick={handleProductClick(data.id)}
                  className="!aspect-[unset] !px-5 !pb-[30px] !pt-[25px]"
                />
              ))}
            </div>
          )}

          <PointsStoreModal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            product={selectedProduct}
          />
        </>
      )}
    </section>
  );
};
