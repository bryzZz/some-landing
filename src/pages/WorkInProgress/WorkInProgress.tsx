import React from "react";

import { useMediaQuery } from "hooks";

import Image from "assets/images/work-in-progress.png";
import FirstBgXl from "assets/images/first-top-bg-xl.jpg";
import FirstBg3Xl from "assets/images/first-top-bg-3xl.jpg";
import { useTranslation } from "react-i18next";

export const WorkInProgress: React.FC = () => {
  const { t } = useTranslation();

  const matches = useMediaQuery("(min-width: 1921px)");

  const getBg = () => {
    return matches ? FirstBg3Xl : FirstBgXl;
  };

  return (
    <div
      className="h-screen bg-auto bg-left-top bg-no-repeat"
      style={{
        backgroundImage: `url(${getBg()})`,
      }}
    >
      <div className="mx-auto flex w-full max-w-[824px] flex-col gap-[44px] px-4 pt-[70px]">
        <img className="w-full" src={Image} />
        <h1 className="heading-2 text-center font-semibold">
          {t("workInProgress:title")}
        </h1>
      </div>
    </div>
  );
};
