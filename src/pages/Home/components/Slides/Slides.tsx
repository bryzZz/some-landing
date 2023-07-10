import React from "react";
import { Pagination, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import SliderImage1 from "assets/images/screen-3-slider-1.png";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { useMediaQuery } from "hooks";

export const Slides: React.FC = () => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <section className="small-container mb-16 md:mb-24 lg:mb-28">
      <div className="max-w-2xl">
        <h2 className="heading-2 mb-5">
          Индивидуальность & инновационность, уверенность
          <span className="ml-[1px] inline-block h-[7px] w-[7px] rounded-full bg-primary-100" />
        </h2>
        <p className="sub-heading-2">
          Какой-то текст в одну строку какой-то текст в одну.
        </p>
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
        // observer
        // observeParents
      >
        {new Array(4).fill(0).map((_, i) => (
          <SwiperSlide key={i}>
            <div className="flex justify-center gap-8 md:justify-between md:pl-24 lg:gap-28">
              <div className="w-full text-center md:text-left">
                <h3 className="mb-2 text-[90px] text-text-400 sm:text-[115px] lg:mb-6 lg:text-[130px]">
                  <span className="text-primary-100">$</span>20m+
                </h3>
                <p className="sub-heading-3 md:max-w-xs">
                  Выплатили нашим клиентам за время существования нашей
                  компании.
                </p>
              </div>
              <div className="hidden md:block">
                <img
                  src={SliderImage1}
                  className="relative h-full w-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
