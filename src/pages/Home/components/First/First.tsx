import React from "react";
import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";
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
    <section className="base-container mb-28 flex justify-between gap-24 lg:mb-32">
      <Swiper
        slidesPerView={1}
        followFinger={false}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="FirstSlider"
        spaceBetween={200}
        speed={0}
      >
        <SwiperSlide>
          <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-stretch md:justify-between md:gap-3">
            <div className="text-center md:max-w-xl md:text-left">
              <Fade
                cascade
                direction="up"
                duration={300}
                damping={0.1}
                delay={200}
              >
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
                <Link to="/unauthorized/registration" className="btn-primary">
                  Регистрация
                </Link>
              </Fade>
            </div>
            <Zoom
              duration={300}
              className="w-full max-w-[360px] lg:max-w-[420px]"
              delay={200}
            >
              <div className="relative min-h-[380px]">
                <div className="translate- absolute left-1/2 top-1/2 aspect-square w-10/12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary-300 to-primary-400" />
                <img
                  className="absolute bottom-0 left-0 animate-secondary-img object-cover"
                  src={MainImagePart1}
                />
                <img
                  className="absolute right-0 top-0 animate-secondary-img object-cover"
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
        <SwiperSlide>
          <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-stretch md:justify-between md:gap-3">
            <div className="text-center md:max-w-xl md:text-left">
              <Fade
                cascade
                direction="up"
                duration={300}
                damping={0.1}
                delay={200}
              >
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
                <Link to="/unauthorized/registration" className="btn-primary">
                  Регистрация
                </Link>
              </Fade>
            </div>
            <Zoom
              duration={300}
              className="w-full max-w-[360px] lg:max-w-[420px]"
              delay={200}
            >
              <div className="relative min-h-[380px]">
                <div className="translate- absolute left-1/2 top-1/2 aspect-square w-10/12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary-300 to-primary-400" />
                <img
                  className="absolute bottom-0 left-0 animate-secondary-img object-cover"
                  src={MainImagePart1}
                />
                <img
                  className="absolute right-0 top-0 animate-secondary-img object-cover"
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
        <SwiperSlide>
          <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-stretch md:justify-between md:gap-3">
            <div className="text-center md:max-w-xl md:text-left">
              <Fade
                cascade
                direction="up"
                duration={300}
                damping={0.1}
                delay={200}
              >
                <h1 className="heading-1 mb-5">
                  Монетизируйте трафик по лучшим условиям
                </h1>
                <p className="sub-heading-1 mb-10">
                  Персональные офферы, собственные инструменты, инсайд
                  информация и связки для топов.
                </p>
                <Link to="/unauthorized/registration" className="btn-primary">
                  Регистрация
                </Link>
              </Fade>
            </div>
            <Zoom
              duration={300}
              className="w-full max-w-[360px] lg:max-w-[420px]"
              delay={200}
            >
              <div className="relative min-h-[380px]">
                <div className="translate- absolute left-1/2 top-1/2 aspect-square w-10/12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary-300 to-primary-400" />
                <img
                  className="absolute bottom-0 left-0 animate-secondary-img object-cover"
                  src={MainImagePart1}
                />
                <img
                  className="absolute right-0 top-0 animate-secondary-img object-cover"
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
      </Swiper>
    </section>
  );
};
