import React from "react";
import { Scene } from "react-scrollmagic";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

import { ShopCard } from "components";

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
import { useMediaQuery } from "hooks";

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
  const matches = useMediaQuery("(min-width: 768px)");

  const getPadLeft = (progress: number) => {
    let result = progress * 10;

    if (matches) {
      result += 15;
    } else {
      result -= 15;
    }

    return result;
  };

  return (
    <section
      id="bubbles-3"
      className="relative z-20 bg-cover bg-top bg-no-repeat pt-28"
      style={{ backgroundImage: `url(${ShopPreviewBg})` }}
    >
      <Scene duration={1500} triggerElement="#bubbles-3" triggerHook="onEnter">
        {(progress: number) => (
          <>
            <div
              className="absolute left-[10vw] h-20 w-20 rounded-full bg-white"
              style={{
                top: 700 + progress * -200,
              }}
            />
            <div
              className="absolute right-[30vw] h-5 w-5 rounded-full bg-[#5956E9]"
              style={{
                top: 100 + progress * -100,
              }}
            />
            <div
              className="absolute right-[40vw] h-2 w-2 rounded-full bg-[#5956E9] opacity-50"
              style={{
                top: 200 + progress * -100,
              }}
            />
          </>
        )}
      </Scene>

      <div className="base-container">
        <Fade cascade direction="up" duration={500} damping={0.3} triggerOnce>
          <h2 className="heading-2 mb-5 max-w-[580px]">
            Получай баллы за апрувнутые лиды и обменивай их на призы
            <span className="ml-[1px] inline-block h-[7px] w-[7px] rounded-full bg-primary-100" />
          </h2>
          <p className="sub-heading-2 mb-10 max-w-[500px]">
            Какой-то текст в одну строку какой-то текст в одну строку какой-то
            текст в одну строку.
          </p>
          <Link
            to="points-store/"
            className="btn-primary inline-flex items-center gap-[10px] px-[34px] py-[17px]"
          >
            В магазин
            <ArrowRight width="20px" height="20px" />
          </Link>
        </Fade>
      </div>

      <div id="shop-preview" className="-rotate-[30deg] pt-12 md:pt-0">
        <Scene
          duration={4000}
          triggerElement="#shop-preview"
          triggerHook="onEnter"
        >
          {(progress: number) => (
            <div
              className="grid auto-cols-[clamp(200px,16vw,400px)] grid-flow-col gap-10"
              style={{
                paddingLeft: `${getPadLeft(progress)}rem`,
              }}
            >
              {cards.slice(0, cards.length / 2).map((data, i) => (
                <ShopCard key={i} data={data} />
              ))}
            </div>
          )}
        </Scene>
      </div>

      <img
        src={ShopPreviewFg}
        className="absolute bottom-0 left-0 z-40 w-full object-contain"
      />
    </section>
  );
};
