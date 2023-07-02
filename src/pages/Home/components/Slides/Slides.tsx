import React from "react";
import { Pagination, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import SliderImage1 from "assets/images/screen-3-slider-1.png";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

export const Slides: React.FC = () => {
  return (
    <section className="small-container mb-24 lg:mb-28">
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
        direction="vertical"
        autoHeight={true}
        mousewheel={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        height={400}
        modules={[Mousewheel, Pagination]}
        className="slides"
      >
        {new Array(4).fill(0).map((_, i) => (
          <SwiperSlide key={i}>
            <div className="flex gap-24 pl-24 lg:gap-28">
              <div>
                <h3 className="mb-2 text-[115px] text-text-400 lg:mb-6 lg:text-[130px]">
                  <span className="text-primary-100">$</span>20m+
                </h3>
                <p className="sub-heading-3 max-w-xs">
                  Выплатили нашим клиентам за время существования нашей
                  компании.
                </p>
              </div>
              <div>
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
