import React from "react";
import { Fade } from "react-awesome-reveal";
import { Scene } from "react-scrollmagic";

import { ShopCard } from "./ShopCard";

import { ReactComponent as ArrowRight } from "assets/icons/arrow-right.svg";
import ShopPreviewBg from "assets/images/shop-preview-mini-bg.png";
import ShopCard1 from "assets/images/shop-preview-1.png";
import ShopCard2 from "assets/images/shop-preview-2.png";
import ShopCard3 from "assets/images/shop-preview-3.png";
import ShopCard4 from "assets/images/shop-preview-4.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from "hooks";

const cards = [
  {
    id: "0",
    name: "iPhone 14 Pro Max - 256GB",
    price: "3 500 ",
    img: ShopCard1,
    category: "",
    desc: "",
  },
  {
    id: "1",
    name: "Watch Series 7 - 45 мм",
    price: "980",
    img: ShopCard2,
    category: "",
    desc: "",
  },
  {
    id: "2",
    name: "AirPods Max",
    price: "1 030 ",
    img: ShopCard3,
    category: "",
    desc: "",
  },
  {
    id: "3",
    name: "Наушники\n Apple AirPods Pro",
    price: "450",
    img: ShopCard4,
    category: "",
    desc: "",
  },
];

export const ShopPreviewMini: React.FC = () => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <section
      id="bubbles-6"
      className="relative bg-cover bg-top bg-no-repeat py-12 md:py-36"
      style={{ backgroundImage: `url(${ShopPreviewBg})` }}
    >
      <Scene duration={1500} triggerElement="#bubbles-6" triggerHook="onEnter">
        {(progress: number) => (
          <>
            <div
              className="absolute -left-9 h-40 w-40 rounded-full bg-gradient-to-r from-transparent to-white"
              style={{
                top: 220 + progress * -300,
              }}
            />
            <div
              className="absolute right-[10vw] h-5 w-5 rounded-full bg-[#5956E9] md:right-[30vw]"
              style={{
                top: (matches ? 100 : 40) + progress * -100,
              }}
            />
          </>
        )}
      </Scene>

      <div className="base-container flex flex-col items-center">
        <Fade direction="up" duration={500} triggerOnce>
          <h2 className="heading-2 mb-20 max-w-3xl text-center">
            Заливай трафик, получай баллы, обменивай их на призы
            <span className="ml-[1px] inline-block h-[7px] w-[7px] rounded-full bg-primary-100" />
          </h2>
        </Fade>

        <div className="mb-14 grid grid-cols-2 gap-5 md:grid-cols-4 lg:gap-[30px]">
          <Fade cascade direction="up" duration={400} damping={0.2} triggerOnce>
            {cards.map((data, i) => (
              <ShopCard key={i} data={data} />
            ))}
          </Fade>
        </div>

        <Link
          to="/points-store/"
          className="btn-primary flex items-center gap-[10px] px-[34px] py-[17px]"
        >
          В магазин
          <ArrowRight width="20px" height="20px" />
        </Link>
      </div>
    </section>
  );
};
