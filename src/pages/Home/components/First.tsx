import React from "react";

import { ReactComponent as Shild } from "assets/icons/shild.svg";
import MainImage from "assets/images/main-image.png";

export const First: React.FC = () => {
  return (
    <section className="base-container mb-32 flex justify-between gap-24">
      <div className="w-full max-w-xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-[35px] border border-[#EFEFEF] bg-text-100 px-5 pb-[2px] pt-1 font-semibold text-text-300 backdrop-blur-sm">
          <Shild />
          Надежный партнер
        </div>
        <h1 className="heading-1 mb-5">
          Монетизируйте трафик по лучшим условиям
        </h1>
        <p className="sub-heading-1 mb-10">
          Персональные офферы, собственные инструменты, инсайд информация и
          связки для топов.
        </p>
        <button className="btn-primary">Регистрация</button>
      </div>
      <div className="w-full max-w-[408px]">
        <img src={MainImage} className="w-full" />
      </div>
    </section>
  );
};
