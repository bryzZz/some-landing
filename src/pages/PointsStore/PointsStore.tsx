import React, { useState } from "react";

import { PointsStoreModal, FilterSelect, FilterSearch } from "components";

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
    <section className="base-container mb-36">
      <h1 className="heading-1 mb-40 text-center">Магазин баллов</h1>

      <div className="mb-24 grid grid-cols-3 grid-rows-1 justify-between gap-2">
        {infoCards.map(({ image, supTitle, title, subTitle }, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl bg-text-100 pb-9 shadow-100"
          >
            <img
              className="max-h-80 translate-x-28 object-contain"
              src={image}
            />
            <div className="px-9">
              <p className="sub-heading-3 mb-[10px] font-semibold">
                {supTitle}
              </p>
              <h3 className="heading-3 mb-[10px]">{title}</h3>
              <p className="sub-heading-3 font-semibold">{subTitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8 flex items-center gap-3">
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
          className="mr-auto"
        />
        <FilterSearch placeholder="Поиск" />
      </div>

      <div className="grid grid-cols-4 gap-[30px]">
        {products.map(({ id, img, supTitle, title }) => (
          <div
            key={id}
            className="flex flex-col items-center rounded-3xl bg-text-100 p-5 text-center shadow-100"
          >
            <div className="mb-7 h-[324px]">
              <img className="h-full w-full object-cover" src={img} />
            </div>
            <h5 className="mb-3 font-black uppercase text-[#B5B5B5]">
              {supTitle}
            </h5>
            <h4 className="heading-4 mb-5 whitespace-pre-line">{title}</h4>

            <button
              className="rounded-[4px] bg-[#F3F3F3] px-[26px] py-[14px] text-[14px] font-bold leading-4 text-text-400"
              onClick={handleProductClick(id)}
            >
              Подробнее
            </button>
          </div>
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
