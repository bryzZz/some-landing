import React from "react";
import { Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ReactComponent as Shild } from "assets/icons/shild.svg";
import MainImage from "assets/images/main-image.png";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

export const First: React.FC = () => {
  return (
    <section className="base-container mb-28 flex justify-between gap-24 lg:mb-32">
      <Swiper
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        modules={[Pagination, Scrollbar]}
        className="FirstSlider"
      >
        {new Array(3).fill(0).map((_, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between md:gap-3">
              <div className="w-full text-center md:max-w-xl md:text-left">
                <div className="mb-4 inline-flex items-center gap-2 rounded-[35px] border border-[#EFEFEF] bg-text-100 px-5 pb-[2px] pt-1 backdrop-blur-sm">
                  <Shild />
                  <span className="text-[14px] font-semibold text-text-300 lg:text-base">
                    Надежный партнер
                  </span>
                </div>
                <h1 className="heading-1 mb-5">
                  Монетизируйте трафик по лучшим условиям
                </h1>
                <p className="sub-heading-1 mb-10">
                  Персональные офферы, собственные инструменты, инсайд
                  информация и связки для топов.
                </p>
                <button className="btn-primary">Регистрация</button>
              </div>
              <div className="w-full max-w-[319px] lg:max-w-[408px]">
                <img src={MainImage} className="w-full" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
