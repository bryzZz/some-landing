/* eslint-disable no-useless-escape */
import React, { useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ReactComponent as ArrowLeft } from "assets/icons/slider-arrow-left.svg";
import { ReactComponent as Star } from "assets/icons/star.svg";

import "swiper/css";
import "./style.css";
import { twMerge } from "tailwind-merge";

interface ReviewsSliderProps {
  items: {
    avatar: string;
    avatarBg?: boolean;
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

  const getSiteName = (link: string) => {
    return link.match(
      /^(https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/
    )?.[2];
  };

  return (
    <div className="flex gap-10 lg:gap-20 xl:gap-[114px]">
      <div className="hidden pt-10 md:block 3xl:pt-14">
        <button className="swiper-nav-btn mb-10 block" ref={prevRef}>
          <ArrowLeft />
        </button>
        <button className="swiper-nav-btn block" ref={nextRef}>
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
        {items.map(
          (
            { avatar, avatarBg = false, date, title, text, source, rating },
            i
          ) => (
            <SwiperSlide
              className="h-[unset] w-full max-w-[306px] select-none md:max-w-sm lg:max-w-md xl:max-w-lg"
              key={i}
            >
              <div className="mt-3 flex h-[calc(100%-20px)] w-full flex-col rounded-2xl bg-text-100 px-[22px] pb-5 shadow-100">
                <div className="flex items-center gap-4">
                  <div
                    className={twMerge(
                      "h-[70px] w-[70px] -translate-y-3 rounded-md 3xl:h-[95px] 3xl:w-[95px]",
                      avatarBg && "bg-[#e5e5e5] p-2"
                    )}
                  >
                    <img className="h-full w-full" src={avatar} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-[13px] 3xl:text-lg">
                      <p className="font-semibold text-text-200">{date}</p>
                      {rating && (
                        <p className="flex items-center gap-[2px] font-bold">
                          <Star />
                          <span className="text-[#309E3A]">{rating}</span>
                          <span className="text-[10px] text-[#C8C8C8] 3xl:text-sm">
                            /10
                          </span>
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
                  <p className="mt-auto text-right text-[13px] font-semibold text-[#C0C0C0] 3xl:text-base">
                    Отзыв с сайта:{" "}
                    <a
                      href={source}
                      className="transition-colors hover:text-[#3452FF]"
                    >
                      {getSiteName(source)}
                    </a>
                  </p>
                )}
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};
