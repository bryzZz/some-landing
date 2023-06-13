import React from "react";

import { ReactComponent as ArrowRight } from "assets/icons/arrow-right.svg";
import ShopShowcaseBg from "assets/images/shop-showcase-bg.png";
import ShopShowcaseFg from "assets/images/shop-showcase-fg.png";
import ShopCard1 from "assets/images/shop-showcase-1.png";
import ShopCard2 from "assets/images/shop-showcase-2.png";
import ShopCard3 from "assets/images/shop-showcase-3.png";
import ShopCard4 from "assets/images/shop-showcase-4.png";
import ShopCard5 from "assets/images/shop-showcase-5.png";
import ShopCard6 from "assets/images/shop-showcase-6.png";
import ShopCard7 from "assets/images/shop-showcase-7.png";
import ShopCard8 from "assets/images/shop-showcase-8.png";
import ShopCard9 from "assets/images/shop-showcase-9.png";
import { twMerge } from "tailwind-merge";

const shopCards = [
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

export const Five: React.FC = () => {
  return (
    <section
      className="relative z-20 bg-auto bg-top bg-no-repeat pb-[860px] pt-28"
      style={{ backgroundImage: `url(${ShopShowcaseBg})` }}
    >
      <div className="base-container">
        <div>
          <h2 className="heading-2 mb-5 max-w-[580px]">
            Получай баллы за апрувнутые лиды и обменивай их на призы
          </h2>
          <p className="mb-10 max-w-[500px] text-[18px] text-text-300">
            Какой-то текст в одну строку какой-то текст в одну строку какой-то
            текст в одну строку.
          </p>
          <button className="flex items-center gap-2 rounded bg-gradient-to-r from-[#F7971D] via-[#F7AD1D] to-[#F7971D] px-6 py-4 font-extrabold text-text-100">
            В магазин
            <ArrowRight width="20px" height="20px" />
          </button>
        </div>
      </div>

      <div className="absolute left-0 top-72 z-30 grid rotate-[-30deg] grid-cols-[repeat(6,324px)] gap-20">
        {shopCards.map(({ img, supTitle, title }, i) => (
          <div
            className={twMerge(
              "flex flex-col items-center rounded-3xl bg-text-100 py-12 text-center shadow-[0_0_24px_3px_rgba(61,61,61,0.04)]",
              i === 0 && "col-start-2"
            )}
          >
            <div className="mb-7 h-[324px]">
              <img className="h-full w-full object-cover" src={img} />
            </div>
            <h5 className="mb-3 font-black uppercase text-[#B5B5B5]">
              {supTitle}
            </h5>
            <h4 className="whitespace-pre-line text-[19px] font-bold text-text-400">
              {title}
            </h4>
          </div>
        ))}
      </div>

      <img
        src={ShopShowcaseFg}
        className="absolute bottom-0 left-0 z-40 w-full object-cover"
      />
    </section>
  );
};
