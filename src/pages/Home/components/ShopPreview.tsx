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
  {
    id: "4",
    name: "MacBook Pro 13 Touch Bar - 256 GB",
    price: "2 350 ",
    img: ShopCard5,
    category: "",
    desc: "",
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
            Получайте баллы и обменивайте их на подарки
            <span className="ml-[1px] inline-block h-[7px] w-[7px] rounded-full bg-primary-100" />
          </h2>
          <p className="sub-heading-2 mb-10 max-w-[500px]">
            Чем больше принятых лидов, тем больше баллов вы накапливаете.
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
              className="flex items-stretch gap-10"
              style={{
                paddingLeft: `${getPadLeft(progress)}rem`,
              }}
            >
              {cards.map((data, i) => (
                <ShopCard
                  className="min-w-[clamp(200px,25vw,300px)]"
                  key={i}
                  data={data}
                />
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
