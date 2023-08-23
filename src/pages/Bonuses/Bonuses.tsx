import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Fade } from "react-awesome-reveal";
import { CategoryFilter, FilterSearch, ShopPreviewMini } from "components";

import { bonuses } from "constants/index";
import { ReactComponent as ExternalLink } from "assets/icons/external-link.svg";

const allCategories = [
  "Все категории",
  "Техника",
  "Apple",
  "Кресла",
  "Инстурменты",
];

export const Bonuses: React.FC = () => {
  const [categories, setCategories] = useState(() =>
    allCategories.map((label) => ({ label, checked: false }))
  );

  const handleCategoryClick = (label: string) => {
    setCategories((p) =>
      p.map((opt) => {
        if (opt.label !== label) return opt;

        return {
          label: opt.label,
          checked: !opt.checked,
        };
      })
    );
  };

  return (
    <>
      <section className="base-container mb-10 md:mb-20 lg:mb-40">
        <Fade direction="up" duration={500} triggerOnce>
          <h1 className="heading-1 mb-28 text-center lg:mb-40">
            Скидки и бонусы
          </h1>
        </Fade>

        <div className="mb-8 flex flex-wrap-reverse items-center justify-between gap-2">
          <CategoryFilter
            categories={categories}
            onCategoryClick={handleCategoryClick}
            newCategoryCount={1}
          />

          <FilterSearch
            className="w-full rounded-lg border-none shadow-[0px_2px_10px_0px_rgba(0,0,0,0.08)] sm:w-auto"
            inputClassName="text-sm"
            placeholder="Поиск"
          />
        </div>

        <div className="flex flex-col gap-[30px]">
          <Fade cascade direction="up" duration={100} damping={0.1} triggerOnce>
            {bonuses.map(
              (
                {
                  img,
                  text,
                  bonusLeft,
                  bonusRight,
                  promocodeText,
                  promocode,
                  link,
                },
                i
              ) => (
                <div
                  className="flex flex-col gap-4 rounded-2xl bg-text-100 p-4 shadow-100 md:flex-row md:items-center md:gap-0 lg:p-7"
                  key={i}
                >
                  <img
                    className="mr-6 w-full max-w-[180px] md:max-w-[120px] lg:mr-16 3xl:max-w-[180px]"
                    src={img}
                  />
                  <p className="sub-heading-3 mr-2 w-full max-w-[350px] shrink-0 font-semibold lg:mr-7 lg:max-w-[418px] 3xl:max-w-[500px]">
                    {text}
                  </p>
                  <div className="mr-3">
                    <p className="mb-1 text-xl font-extrabold uppercase text-text-400 lg:mb-2 lg:text-2xl 3xl:text-4xl">
                      <span
                        className={twMerge(
                          bonusLeft.highlight && "text-primary-100"
                        )}
                      >
                        {bonusLeft.value}
                      </span>{" "}
                      <span
                        className={twMerge(
                          bonusRight.highlight && "text-primary-100"
                        )}
                      >
                        {bonusRight.value}
                      </span>
                    </p>
                    <p className="text-sm font-semibold text-text-400 lg:text-base 3xl:text-xl">
                      {promocodeText}{" "}
                      <span className="font-bold">{promocode}</span>
                    </p>
                  </div>
                  <a
                    className="flex items-center gap-1 text-base font-extrabold text-[#3452FF] md:ml-auto 3xl:text-xl"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Перейти
                    <ExternalLink />
                  </a>
                </div>
              )
            )}
          </Fade>
        </div>
      </section>

      <ShopPreviewMini />
    </>
  );
};
