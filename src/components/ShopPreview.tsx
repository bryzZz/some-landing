import React from "react";

import { ReactComponent as ArrowRight } from "assets/icons/arrow-right.svg";
import ShopPreviewBg from "assets/images/shop-preview-bg.png";
import ShopPreviewFg from "assets/images/shop-preview-fg.png";
import ShopCard1 from "assets/images/shop-preview-1.png";
import ShopCard2 from "assets/images/shop-preview-2.png";
import ShopCard3 from "assets/images/shop-preview-3.png";
import ShopCard4 from "assets/images/shop-preview-4.png";
import ShopCard5 from "assets/images/shop-preview-5.png";
import ShopCard6 from "assets/images/shop-preview-6.png";
import ShopCard7 from "assets/images/shop-preview-7.png";
import ShopCard8 from "assets/images/shop-preview-8.png";
import ShopCard9 from "assets/images/shop-preview-9.png";
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
  {
    title: "MacBook Pro 13 Touch Bar - 256 GB",
    supTitle: "2 350 БАЛЛОВ",
    img: ShopCard5,
  },
  {
    title: "Dyson Pure Hot + Cool HP05",
    supTitle: "2 170 БАЛЛОВ",
    img: ShopCard6,
  },
  {
    title: "JBL PartyBox 1000",
    supTitle: "2 270 БАЛЛОВ",
    img: ShopCard7,
  },
  {
    title: "Samsung QE55Q77AAUXCE 75",
    supTitle: "3 950 БАЛЛОВ",
    img: ShopCard8,
  },
  {
    title: "PlayStation 5",
    supTitle: "1 500 БАЛЛОВ",
    img: ShopCard9,
  },
  {
    title: "Microsoft Xbox Series X",
    supTitle: "1 000 БАЛЛОВ",
    img: ShopCard9,
  },
];

export const ShopPreview: React.FC = () => {
  return (
    <section
      className="relative z-20 bg-auto bg-top bg-no-repeat pb-[860px] pt-28"
      style={{ backgroundImage: `url(${ShopPreviewBg})` }}
    >
      <div className="base-container">
        <div>
          <h2 className="heading-2 mb-5 max-w-[580px]">
            Получай баллы за апрувнутые лиды и обменивай их на призы
            <span className="ml-[1px] inline-block h-[7px] w-[7px] rounded-full bg-primary-100" />
          </h2>
          <p className="sub-heading-2 mb-10 max-w-[500px]">
            Какой-то текст в одну строку какой-то текст в одну строку какой-то
            текст в одну строку.
          </p>
          <button className="btn-primary flex items-center gap-2">
            В магазин
            <ArrowRight width="20px" height="20px" />
          </button>
        </div>
      </div>

      <div className="absolute -left-16 top-60 z-30 grid rotate-[-30deg] grid-cols-[repeat(6,232px)] gap-10 lg:-left-24 lg:top-32 lg:grid-cols-[repeat(6,324px)] lg:gap-20 xl:-left-14 xl:top-72">
        {cards.map((data, i) => (
          <ShopCard
            key={i}
            data={data}
            className={i === 0 ? "col-start-2" : ""}
          />
        ))}
      </div>

      <img
        src={ShopPreviewFg}
        className="absolute bottom-0 left-0 z-40 w-full object-cover"
      />
    </section>
  );
};
