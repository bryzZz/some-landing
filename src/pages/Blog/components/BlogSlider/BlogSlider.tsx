import React, { useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

// import Bg from "assets/images/Blog.jpg";
import Bg from "assets/images/blogs/0/1.jpg";
import Bg2 from "assets/images/blogs/2/1.jpg";
import Bg3 from "assets/images/blogs/5/5.png";

import "swiper/css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "hooks";

const slidesCount = 3;

export const BlogSlider: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const matches = useMediaQuery("(min-width: 768px)");

  const handleAutoplayTimeLeft = (s: any, _: number, progress: number) => {
    setActiveIndex(s.activeIndex);
    setProgress((1 - progress) * 100);
  };

  const handlePaginationClick = (i: number) => {
    if (!swiper) return;

    setActiveIndex(i);
    setProgress(0);
    swiper.activeIndex = i;
    swiper.progress = 0;
    swiper.slideTo(i);
  };

  return (
    <section className="base-container mb-16 md:-mt-16 md:mb-24 lg:mb-28">
      <Swiper
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        onAutoplayTimeLeft={handleAutoplayTimeLeft}
        className="BlogSlider"
        onSwiper={setSwiper}
      >
        {/* {new Array(slidesCount).fill(0).map((_, i) => ( */}
        <SwiperSlide>
          <div
            className="overflow-hidden rounded-xl bg-gradient-to-b from-white to-[rgba(209,_209,_209,_0.00)] bg-cover bg-center bg-no-repeat md:shadow-[0px_-253px_117px_0px_rgba(96,_96,_96,_0.96)_inset]"
            style={{
              backgroundImage: matches ? `url(${Bg})` : "none",
            }}
          >
            <img src={Bg} className="mb-5 w-full rounded-xl md:hidden" />
            <div className="max-w-[742px] pb-7 md:px-14 md:pb-12 md:pt-[289px] md:text-white">
              <div className="mb-2 flex flex-wrap gap-2">
                <div className="tag">Gambling</div>
                <div className="tag">Схемы</div>
              </div>
              <h1 className="heading-1 mb-1 line-clamp-2 text-current">
                Актуальные подходы и связки при работе с Инфлюенс трафиком
              </h1>
              <p className="sub-heading-1 mb-6 text-current">
                Все меньше и меньше приложений живут в текущих реалиях на рынке
                Facebook. Удержать ROI с каждым днем все труднее...
              </p>
              <Link to="/blog/0" className="btn-primary">
                Читать больше
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="overflow-hidden rounded-xl bg-gradient-to-b from-white to-[rgba(209,_209,_209,_0.00)] bg-cover bg-center bg-no-repeat md:shadow-[0px_-253px_117px_0px_rgba(96,_96,_96,_0.96)_inset]"
            style={{
              backgroundImage: matches ? `url(${Bg2})` : "none",
            }}
          >
            <img src={Bg2} className="mb-5 w-full rounded-xl md:hidden" />
            <div className="max-w-[742px] pb-7 md:px-14 md:pb-12 md:pt-[289px] md:text-white">
              <div className="mb-2 flex flex-wrap gap-2">
                <div className="tag">Gambling</div>
                <div className="tag">Схемы</div>
              </div>
              <h1 className="heading-1 mb-1 line-clamp-2 text-current">
                🔥 Инфлюенс трафик на Грецию: как мы получали трафик из Facebook
              </h1>
              <p className="sub-heading-1 mb-6 text-current">
                Одна из самых креативных задумок в гемблинге - инфлюенс трафик,
                так идеально подошедший под азартные игры...
              </p>
              <Link to="/blog/1" className="btn-primary">
                Читать больше
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="overflow-hidden rounded-xl bg-gradient-to-b from-white to-[rgba(209,_209,_209,_0.00)] bg-cover bg-center bg-no-repeat md:shadow-[0px_-253px_117px_0px_rgba(96,_96,_96,_0.96)_inset]"
            style={{
              backgroundImage: matches ? `url(${Bg3})` : "none",
            }}
          >
            <img src={Bg3} className="mb-5 w-full rounded-xl md:hidden" />
            <div className="max-w-[742px] pb-7 md:px-14 md:pb-12 md:pt-[289px] md:text-white">
              <div className="mb-2 flex flex-wrap gap-2">
                <div className="tag">Gambling</div>
                <div className="tag">Схемы</div>
              </div>
              <h1 className="heading-1 mb-1 line-clamp-2 text-current">
                Интеграция Keitaro x Leadshub
              </h1>
              <p className="sub-heading-1 mb-6 text-current">
                Для успешной интеграции Keitaro с Leadshub необходимо следовать
                четким шагам. Первым этапом является регистрация...
              </p>
              <Link to="/blog/5" className="btn-primary">
                Читать больше
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Progress bar */}
        <span
          slot="container-start"
          className="absolute left-0 top-4 z-20 hidden w-full gap-[6px] px-[6px] md:bottom-7 md:left-auto md:right-8 md:top-auto md:flex md:max-w-[120px]"
        >
          {new Array(slidesCount).fill(0).map((_, i) => (
            <span
              key={i}
              className="relative h-1 flex-1 cursor-pointer rounded-[5px] bg-white"
              onClick={() => handlePaginationClick(i)}
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
