import React, { useState } from "react";

import {
  PointsStoreModal,
  FilterSearch,
  ShopCard,
  CategoryFilter,
  SortFilter,
  PriceFilter,
} from "components";

import ShopCard1 from "assets/images/shop-preview-1.png";
import CardImage1 from "assets/images/points-store-card-1.png";
import CardImage2 from "assets/images/points-store-card-2.png";
import CardImage3 from "assets/images/points-store-card-3.png";
import { Fade } from "react-awesome-reveal";

const infoCards = [
  {
    image: CardImage1,
    supTitle: "01.",
    title: "Получай баллы за депозиты",
    subTitle: "Заливай трафик, накапливай баллы и обменивай их на призы.",
  },
  {
    image: CardImage2,
    supTitle: "02.",
    title: "Обновляем каждый месяц",
    subTitle: "Не нашел интересующий приз? Отпиши менеджеру и он его добавит.",
  },
  {
    image: CardImage3,
    supTitle: "03.",
    title: "Как принять участие?",
    subTitle:
      "Подключай оффер и запускай трафик - баллы засчитываются автоматически!",
  },
];

const products = new Array(12).fill(0).map((_, i) => ({
  id: String(i),
  title: "iPhone 14 Pro Max - 256GB",
  supTitle: "3 500 БАЛЛОВ",
  img: ShopCard1,
  category: "Кресла",
  description:
    "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum vitae mauris mattis vulputate lacinia nec neque. Aenean quis consectetur nisi, ac interdum elit. Aliquam sit amet luctus elit, id tempus purus.",
}));

const allCategories = [
  "Все категории",
  "Техника",
  "Apple",
  "Кресла",
  "Инстурменты",
];

const sortVariants = ["По убыванию цены", "По новинкам"];

export const PointsStore: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [categories, setCategories] = useState(() =>
    allCategories.map((label) => ({ label, checked: false }))
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(sortVariants[0]);

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

  return (
    <section className="base-container mb-24 lg:mb-36">
      <Fade duration={500} direction="up" triggerOnce>
        <h1 className="heading-1 mb-28 text-center lg:mb-40">Магазин баллов</h1>
      </Fade>

      <div className="mb-20 grid grid-cols-1 justify-between gap-2 md:grid-cols-3 lg:mb-24">
        <Fade cascade direction="up" duration={500} damping={0.3} triggerOnce>
          {infoCards.map(({ image, supTitle, title, subTitle }, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl bg-text-100 pb-6 pt-6 shadow-100 md:pb-9 md:pt-[clamp(12rem,12vw,20rem)] 3xl:pb-14"
            >
              <img
                className="absolute right-0 z-10 w-full max-w-[200px] object-contain md:-right-20 md:top-0 md:max-w-[clamp(20rem,18vw,35rem)]"
                src={image}
              />
              <div className="relative z-20 pl-4 md:pl-9">
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

      <Fade duration={500} direction="up" triggerOnce>
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <CategoryFilter
            categories={categories}
            onCategoryClick={handleCategoryClick}
            newCategoryCount={2}
          />
          <SortFilter
            options={sortVariants}
            selectedOption={selectedSort}
            onChange={handleSortChange}
          />
          <PriceFilter
            className="-order-2 md:order-none md:mr-auto"
            min={100}
            max={500}
          />
          <FilterSearch
            className="order-first w-full rounded-lg border-none shadow-[0px_2px_10px_0px_rgba(0,0,0,0.08)] sm:w-auto md:order-last md:w-auto"
            inputClassName="text-sm"
            placeholder="Поиск"
          />
        </div>
      </Fade>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:gap-[30px]">
        {products.map(({ id, ...data }) => (
          <ShopCard
            key={id}
            data={data}
            details
            onDetailsClick={handleProductClick(id)}
            className="!aspect-[unset] !px-5 !pb-[30px] !pt-[25px]"
          />
        ))}
      </div>

      <PointsStoreModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        product={selectedProduct}
      />
    </section>
  );
};
