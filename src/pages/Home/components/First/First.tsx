import React from "react";
import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";
import { Scene } from "react-scrollmagic";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ReactComponent as Shild } from "assets/icons/shild.svg";
import MainImagePart1 from "assets/images/main-image-part-1.png";
import MainImagePart2 from "assets/images/main-image-part-2.png";
import MainImagePart3 from "assets/images/main-image-part-3.png";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

export const First: React.FC = () => {
  return (
    <section
      id="#bubbles-5"
      className="base-container mb-28 flex justify-between gap-24 lg:mb-32"
    >
      <Scene duration={1500} triggerElement="#bubbles-5" triggerHook="onEnter">
        {(progress: number) => (
          <div
            className="absolute left-[50vw] h-12 w-12 rounded-full bg-white"
            style={{
              top: 150 + progress * -300,
            }}
          />
        )}
      </Scene>

      <Swiper
        slidesPerView={1}
        followFinger={false}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="FirstSlider"
        spaceBetween={200}
        speed={0}
        autoHeight
      >
        {new Array(3).fill(0).map((_, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-stretch md:justify-between md:gap-3">
              <div className="text-center md:text-left">
                <Fade
                  cascade
                  direction="up"
                  duration={300}
                  damping={0.1}
                  delay={200}
                >
                  <div className="mb-4 inline-flex items-center gap-2 rounded-[35px] border border-[#EFEFEF] bg-text-100 pb-[9px] pl-[14px] pr-[23px] pt-[10px] backdrop-blur-sm">
                    <Shild className="drop-shadow-[0px_2px_7px_rgba(255,143,0,0.50)]" />
                    <span className="text-sm font-semibold text-text-300 lg:text-base">
                      Надежный партнер
                    </span>
                  </div>
                  <h1 className="heading-1 mb-5 md:max-w-[730px] 3xl:max-w-[1024px]">
                    Монетизируйте трафик по лучшим условиям
                  </h1>
                  <p className="sub-heading-1 mb-10 max-w-[618px]">
                    Персональные офферы, собственные инструменты, инсайд
                    информация и связки для топов.
                  </p>
                  <Link
                    to="/unauthorized/registration"
                    className="btn-primary py-4"
                  >
                    Регистрация
                  </Link>
                </Fade>
              </div>
              <Zoom
                duration={300}
                className="w-full max-w-[360px] lg:max-w-[420px] 3xl:max-w-[600px]"
                delay={200}
              >
                <div className="relative aspect-square min-h-[380px]">
                  <div className="absolute left-1/2 top-1/2 aspect-square w-10/12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary-300 to-primary-400" />
                  <img
                    className="absolute bottom-0 left-0 w-5/12 animate-secondary-img object-cover"
                    src={MainImagePart1}
                  />
                  <img
                    className="absolute right-0 top-0 w-5/12 animate-secondary-img object-cover"
                    src={MainImagePart3}
                  />
                  <img
                    className="absolute w-9/12 animate-primary-img object-cover"
                    src={MainImagePart2}
                  />
                </div>
              </Zoom>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
