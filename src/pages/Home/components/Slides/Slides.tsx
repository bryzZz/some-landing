import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Scene } from "react-scrollmagic";

import { useMediaQuery } from "hooks";

import SlidesBg from "assets/images/slides-bg.png";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Chart } from "components";

const data = [
  {
    date: new Date(2020, 5, 17),
    value: 1,
  },
  {
    date: new Date(2020, 6, 17),
    value: 2,
  },
  {
    date: new Date(2020, 7, 17),
    value: 1,
  },
  {
    date: new Date(2020, 8, 17),
    value: 4,
  },
  {
    date: new Date(2020, 9, 17),
    value: 3,
  },
  {
    date: new Date(2020, 10, 17),
    value: 5,
  },
  {
    date: new Date(2021, 1, 17),
    value: 7,
  },
  {
    date: new Date(2021, 5, 17),
    value: 6,
  },
  {
    date: new Date(2022, 2, 17),
    value: 10,
  },
  {
    date: new Date(2022, 7, 17),
    value: 15,
  },
];

export const Slides: React.FC = () => {
  const matches = useMediaQuery("(min-width: 768px)");

  const height = 315;
  const width = 341;
  const margin = {
    bottom: 120,
    top: 72,
    left: 50,
    right: 50,
  };

  return (
    <section
      id="bubbles-1"
      className="relative mb-16 bg-auto bg-bottom bg-no-repeat md:mb-24 lg:mb-28"
      style={{ backgroundImage: `url(${SlidesBg})` }}
    >
      <Scene duration={1500} triggerElement="#bubbles-1" triggerHook="onEnter">
        {(progress: number) => (
          <>
            <div
              className="absolute left-[10vw] h-16 w-16 rounded-full bg-[#FFDC60]"
              style={{
                top: 200 + progress * -200,
              }}
            />
            <div
              className="absolute left-[5vw] h-12 w-12 rounded-full bg-[#FAB8C4]"
              style={{
                top: 500 + progress * -400,
              }}
            />
            <div
              className="absolute right-[5vw] h-11 w-11 rounded-full bg-[#F7971D]"
              style={{
                top: 600 + progress * -400,
              }}
            />
          </>
        )}
      </Scene>

      <div className="small-container">
        <div className="max-w-2xl 3xl:max-w-[850px]">
          <Fade cascade direction="up" duration={500} damping={0.3} triggerOnce>
            <h2 className="heading-2 mb-5">
              Индивидуальность & инновационность, уверенность
              <span className="ml-[1px] inline-block h-[7px] w-[7px] rounded-full bg-primary-100" />
            </h2>
            <p className="sub-heading-2">
              Какой-то текст в одну строку какой-то текст в одну.
            </p>
          </Fade>
        </div>

        <Swiper
          autoplay={{
            delay: 3000,
          }}
          direction={matches ? "vertical" : "horizontal"}
          autoHeight={matches}
          slidesPerView={1}
          pagination={{ clickable: true }}
          height={matches ? 500 : undefined}
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          className="slides"
          breakpoints={{
            2560: {
              height: 600,
            },
          }}
        >
          {new Array(4).fill(0).map((_, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center gap-8 md:justify-between md:pl-24 lg:gap-28">
                <div className="w-full flex-1 text-center md:text-left">
                  <Fade
                    cascade
                    direction="up"
                    duration={500}
                    damping={0.3}
                    triggerOnce
                  >
                    <h3 className="mb-2 pt-[20%] text-[90px] leading-none text-text-400 sm:text-[115px] lg:mb-6 lg:text-[130px] 3xl:text-[170px]">
                      <span className="text-primary-100">$</span>20m+
                    </h3>
                    <p className="sub-heading-3 md:max-w-xs">
                      Выплатили нашим клиентам за время существования нашей
                      компании.
                    </p>
                  </Fade>
                </div>
                <div className="hidden flex-1 md:block">
                  <Zoom triggerOnce>
                    <Chart
                      data={data}
                      width={width}
                      height={height}
                      margin={margin}
                    />
                  </Zoom>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
