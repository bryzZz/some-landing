import React, { useState } from "react";

import {
  PointsStoreModal,
  FilterSelect,
  FilterSearch,
  ShopCard,
} from "components";

import ShopCard1 from "assets/images/shop-preview-1.png";
import CardImage1 from "assets/images/points-store-card-1.png";
import CardImage2 from "assets/images/points-store-card-2.png";
import CardImage3 from "assets/images/points-store-card-3.png";
import { ReactComponent as UpDownArrows } from "assets/icons/up-down-arrows.svg";

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

export const PointsStore: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  const [isOpen, setIsOpen] = useState(false);

  const handleProductClick = (id: string) => () => {
    setSelectedProductId(id);
    setIsOpen(true);
  };

  const selectedProduct = products.find(({ id }) => id === selectedProductId);

  return (
    <section className="base-container mb-24 lg:mb-36">
      <h1 className="heading-1 mb-28 text-center lg:mb-40">Магазин баллов</h1>

      <div className="mb-20 grid grid-cols-1 justify-between gap-2 md:grid-cols-3 lg:mb-24">
        {infoCards.map(({ image, supTitle, title, subTitle }, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl bg-text-100 pb-6 pt-6 shadow-100 md:pb-9 md:pt-52"
          >
            <img
              className="absolute right-0 z-10 w-full max-w-[200px] object-contain md:-right-20 md:top-0 md:max-w-xs"
              src={image}
            />
            <div className="relative z-20 px-4 md:px-9">
              <p className="sub-heading-3 mb-[10px] font-semibold">
                {supTitle}
              </p>
              <h3 className="heading-3 mb-[10px] pr-[150px]">{title}</h3>
              <p className="sub-heading-3 font-semibold">{subTitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-3">
        <FilterSelect
          options={[{ value: "1", label: "1" }]}
          placeholder="Категория"
        />
        <FilterSelect
          options={[{ value: "1", label: "1" }]}
          placeholder="По возрастанию цены"
          Icon={UpDownArrows}
        />
        <FilterSelect
          options={[{ value: "1", label: "1" }]}
          placeholder="Цена, Балл"
          className="-order-2 md:order-none md:mr-auto"
        />
        <FilterSearch
          className="order-first w-full md:order-last md:w-auto"
          placeholder="Поиск"
        />
      </div>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:gap-[30px]">
        {products.map(({ id, ...data }) => (
          <ShopCard
            key={id}
            data={data}
            details
            onDetailsClick={handleProductClick(id)}
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
