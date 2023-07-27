import React, { useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ReactComponent as ArrowLeft } from "assets/icons/slider-arrow-left.svg";
import { ReactComponent as Star } from "assets/icons/star.svg";

import "swiper/css";
import "./style.css";

interface ReviewsSliderProps {
  items: {
    avatar: string;
    title: string;
    date: string;
    text: string;
    source?: string;
    rating?: number;
  }[];
}

export const ReviewsSlider: React.FC<ReviewsSliderProps> = ({ items }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex items-center gap-10 lg:gap-20 xl:gap-[114px]">
      <div className="hidden flex-col gap-[40px] md:flex">
        <button className="swiper-nav-btn" ref={prevRef}>
          <ArrowLeft />
        </button>
        <button className="swiper-nav-btn" ref={nextRef}>
          <ArrowLeft className="rotate-180" />
        </button>
      </div>

      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        className="reviews-swiper"
        modules={[Navigation]}
        onInit={(swiper) => {
          (swiper.params.navigation as any).prevEl = prevRef.current;
          (swiper.params.navigation as any).nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          768: {
            spaceBetween: 30,
          },
        }}
      >
        {items.map(({ avatar, date, title, text, source, rating }, i) => (
          <SwiperSlide
            className="w-full max-w-[306px] select-none md:max-w-sm lg:max-w-md xl:max-w-lg"
            key={i}
          >
            <div className="mt-3 rounded-2xl bg-text-100 px-[22px] pb-5 shadow-100">
              <div className="flex items-center gap-4">
                <img
                  className="aspect-square w-[70px] -translate-y-3 3xl:w-[95px]"
                  src={avatar}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-semibold leading-[10px] text-text-200 3xl:text-lg">
                      {date}
                    </p>
                    {rating && (
                      <p className="flex items-center gap-[2px] text-[10px] font-bold text-[#C8C8C8] 3xl:text-sm">
                        <Star />
                        <span className="text-[13px] text-[#309E3A] 3xl:text-base">
                          {rating}
                        </span>
                        /10
                      </p>
                    )}
                  </div>
                  <h6 className="text-[15px] font-bold text-text-400 3xl:text-xl">
                    {title}
                  </h6>
                </div>
              </div>
              <p className="mb-3 text-sm text-text-300 3xl:text-lg">{text}</p>
              {source && (
                <p className="text-right text-[13px] font-semibold text-[#C0C0C0] 3xl:text-base">
                  Отзыв с сайта:{" "}
                  <a
                    href={source}
                    className="transition-colors hover:text-[#3452FF]"
                  >
                    {source}
                  </a>
                </p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
