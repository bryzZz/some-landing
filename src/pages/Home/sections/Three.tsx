import React from "react";
import { Pagination, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import SliderImage1 from "assets/images/screen-3-slider-1.png";

import "swiper/css";
import "swiper/css/pagination";

export const Three: React.FC = () => {
  return (
    <section className="small-container mb-28">
      <div className="max-w-2xl">
        <h2 className="heading-2 mb-5">
          Индивидуальность & инновационность, уверенность
        </h2>
        <p className="text-[18px] text-text-300">
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
      >
        {new Array(4).fill(0).map(() => (
          <SwiperSlide>
            <div className="flex gap-28 pl-24">
              <div>
                <h3 className="mb-6 text-[130px] text-text-400">
                  <span className="text-[#F7971D]">$</span>20m+
                </h3>
                <p className="max-w-xs text-text-300">
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
