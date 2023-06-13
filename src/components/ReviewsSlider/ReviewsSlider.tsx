import React, { useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ReactComponent as ArrowLeft } from "assets/icons/slider-arrow-left.svg";

import "swiper/css";
import "./style.css";

interface ReviewsSliderProps {
  items: {
    avatar: string;
    title: string;
    date: string;
    text: string;
  }[];
}

export const ReviewsSlider: React.FC<ReviewsSliderProps> = ({ items }) => {
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex items-center">
      <div className="flex flex-col gap-[40px]">
        <button className="swiper-nav-btn" ref={prevBtnRef}>
          <ArrowLeft />
        </button>
        <button className="swiper-nav-btn" ref={nextBtnRef}>
          <ArrowLeft className="rotate-180" />
        </button>
      </div>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        className="reviews-swiper"
        modules={[Navigation]}
        navigation={{
          nextEl: nextBtnRef.current,
          prevEl: prevBtnRef.current,
        }}
      >
        {items.map(({ avatar, date, title, text }) => (
          <SwiperSlide className="w-full max-w-lg">
            <div className="mt-3 rounded-2xl bg-text-100 px-[22px] pb-5 shadow-100">
              <div className="flex -translate-y-3 items-center gap-4">
                <img src={avatar} />
                <div>
                  <p className="text-[13px] font-semibold leading-[10px] text-text-200">
                    {date}
                  </p>
                  <h6 className="text-[15px] font-bold text-text-400">
                    {title}
                  </h6>
                </div>
              </div>
              <p className="text-[14px] text-text-300">{text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
