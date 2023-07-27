import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Img7 from "assets/images/BlogPost-img-7.png";

import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

export const BlogPostSlider: React.FC = () => {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={20}
      className="BlogPostSlider"
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {new Array(8).fill(0).map((_, i) => (
        <SwiperSlide key={i} className="max-h-[506px] max-w-[234px]">
          <a className="outline-none" data-fancybox="gallery" href={Img7}>
            <img className="BlogPost__img" src={Img7} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
