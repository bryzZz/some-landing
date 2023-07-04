import React from "react";

import { ReactComponent as ArrowRight } from "assets/icons/arrow-right.svg";
import ShopPreviewBg from "assets/images/shop-preview-bg.png";
import ShopCard1 from "assets/images/shop-preview-1.png";
import ShopCard2 from "assets/images/shop-preview-2.png";
import ShopCard3 from "assets/images/shop-preview-3.png";
import ShopCard4 from "assets/images/shop-preview-4.png";
import { ShopCard } from "./ShopCard";

const cards = [
  {
    title: "iPhone 14 Pro Max - 256GB",
    supTitle: "3 500 БАЛЛОВ",
    img: ShopCard1,
  },
  {
    title: "Watch Series 7 - 45 мм",
    supTitle: "980 БАЛЛОВ",
    img: ShopCard2,
  },
  {
    title: "AirPods Max",
    supTitle: "1 030 БАЛЛОВ",
    img: ShopCard3,
  },
  {
    title: "Наушники\n Apple AirPods Pro",
    supTitle: "450 БАЛЛОВ",
    img: ShopCard4,
  },
];

export const ShopPreviewMini: React.FC = () => {
  return (
    <section
      className="bg-auto bg-top bg-no-repeat pb-36 pt-36"
      style={{ backgroundImage: `url(${ShopPreviewBg})` }}
    >
      <div className="base-container flex flex-col items-center">
        <h2 className="heading-2 mb-20 max-w-3xl text-center">
          Заливай трафик, получай баллы, обменивай их на призы
        </h2>

        <div className="mb-14 flex gap-5 lg:gap-[30px]">
          {cards.map((data, i) => (
            <ShopCard key={i} data={data} />
          ))}
        </div>

        <button className="btn-primary flex items-center gap-2">
          В магазин
          <ArrowRight width="20px" height="20px" />
        </button>
      </div>
    </section>
  );
};
