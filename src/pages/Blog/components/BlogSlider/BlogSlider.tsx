import React, { useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Bg from "assets/images/Blog.jpg";

import "swiper/css";

const slidesCount = 4;

export const BlogSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleAutoplayTimeLeft = (s: any, _: number, progress: number) => {
    setActiveIndex(s.activeIndex);
    setProgress((1 - progress) * 100);
  };

  return (
    <section className="base-container mb-16 md:-mt-16 md:mb-24 lg:mb-28">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        onAutoplayTimeLeft={handleAutoplayTimeLeft}
        className="BlogSlider"
      >
        {new Array(slidesCount).fill(0).map((_, i) => (
          <SwiperSlide key={i}>
            <div
              className="rounded-xl bg-gradient-to-b from-white to-[rgba(209,_209,_209,_0.00)] bg-cover bg-center bg-no-repeat px-5 pb-7 pt-[160px] shadow-[0px_-253px_117px_0px_rgba(96,_96,_96,_0.96)_inset] md:px-14 md:pb-12"
              style={{
                backgroundImage: `url(${Bg})`,
              }}
            >
              <div className="max-w-[742px]">
                <div className="mb-2 flex flex-wrap gap-2">
                  <div className="rounded bg-[#3452FF] bg-opacity-[0.14] px-[10px] py-[5px] text-sm font-bold text-[#3452FF] 3xl:text-xl">
                    Gambling
                  </div>
                  <div className="rounded bg-[#3452FF] bg-opacity-[0.14] px-[10px] py-[5px] text-sm font-bold text-[#3452FF] 3xl:text-xl">
                    Схемы
                  </div>
                </div>
                <h1 className="heading-1 mb-1 text-white">
                  Кейс на Индию с ROI ~400%
                </h1>
                <p className="sub-heading-1 mb-6 text-white">
                  Все меньше и меньше приложений живут в текущих реалиях на
                  рынке Facebook. Удержать ROI с каждым днем все труднее...
                </p>
                <button className="btn-primary">Читать больше</button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Progress bar */}
        <span
          slot="container-start"
          className="absolute left-0 top-4 z-20 flex w-full gap-[6px] px-[6px] md:bottom-7 md:left-auto md:right-8 md:top-auto md:max-w-[120px]"
        >
          {new Array(slidesCount).fill(0).map((_, i) => (
            <span
              key={i}
              className="relative h-1 flex-1 rounded-[5px] bg-white"
            >
              <span
                className="absolute bottom-0 left-0 top-0 rounded-[5px] bg-[#3452FF]"
                style={{
                  width: activeIndex === i ? progress + "%" : 0,
                }}
              />
            </span>
          ))}
        </span>
      </Swiper>
    </section>
  );
};
