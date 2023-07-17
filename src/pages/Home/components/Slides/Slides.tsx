import React from "react";
import { Pagination, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Scene } from "react-scrollmagic";

import { useMediaQuery } from "hooks";
import SliderImage1 from "assets/images/screen-3-slider-1.png";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

export const Slides: React.FC = () => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <section id="bubbles-1" className="relative mb-16 md:mb-24 lg:mb-28">
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
        <div className="max-w-2xl">
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
          direction={matches ? "vertical" : "horizontal"}
          autoHeight={matches}
          mousewheel={matches}
          slidesPerView={1}
          pagination={{ clickable: true }}
          height={matches ? 400 : undefined}
          modules={[Mousewheel, Pagination]}
          className="slides"
        >
          {new Array(4).fill(0).map((_, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center gap-8 md:justify-between md:pl-24 lg:gap-28">
                <div className="w-full text-center md:text-left">
                  <Fade
                    cascade
                    direction="up"
                    duration={500}
                    damping={0.3}
                    triggerOnce
                  >
                    <h3 className="mb-2 text-[90px] text-text-400 sm:text-[115px] lg:mb-6 lg:text-[130px]">
                      <span className="text-primary-100">$</span>20m+
                    </h3>
                    <p className="sub-heading-3 md:max-w-xs">
                      Выплатили нашим клиентам за время существования нашей
                      компании.
                    </p>
                  </Fade>
                </div>
                <div className="hidden md:block">
                  <Zoom triggerOnce>
                    <img
                      src={SliderImage1}
                      className="relative h-full w-full object-cover"
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
