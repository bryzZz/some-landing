import React, { useState } from "react";

import { CategoryFilter, FilterSearch, ShopPreviewMini } from "components";

import Bonus1 from "assets/images/bonuses-1.png";
import Bonus2 from "assets/images/bonuses-2.png";
import Bonus3 from "assets/images/bonuses-3.png";
import { ReactComponent as ExternalLink } from "assets/icons/external-link.svg";
import { twMerge } from "tailwind-merge";
import { Fade } from "react-awesome-reveal";

const bonuses = [
  {
    img: Bonus1,
    text: "Новый сервис по виртуальным банковским картам.",
    bonusLeft: {
      value: "100",
      highlight: true,
    },
    bonusRight: {
      value: "карт",
    },
    promocodeText: "бесплатно (свежереги). По промокоду:",
    promocode: "LEADSHUB",
    link: "/",
  },
  {
    img: Bonus2,
    text: "Клоакинг. Фильтр ботов. CPA-трекер. Все в одном!",
    bonusLeft: {
      value: "скидка",
    },
    bonusRight: {
      value: "15%",
      highlight: true,
    },
    promocodeText: "на любой тариф. По промокоду:",
    promocode: "LEADSHUB",
    link: "/",
  },
  {
    img: Bonus3,
    text: "Трекинг-платформа для арбитража",
    bonusLeft: {
      value: "скидка",
    },
    bonusRight: {
      value: "20%",
      highlight: true,
    },
    promocodeText:
      "на покупку для нового клиента сроком до 3х месяцев. По промокоду:",
    promocode: "LEADSHUB",
    link: "/",
  },
  {
    img: Bonus1,
    text: "Новый сервис по виртуальным банковским картам.",
    bonusLeft: {
      value: "100",
      highlight: true,
    },
    bonusRight: {
      value: "карт",
    },
    promocodeText: "бесплатно (свежереги). По промокоду:",
    promocode: "LEADSHUB",
    link: "/",
  },
  {
    img: Bonus2,
    text: "Клоакинг. Фильтр ботов. CPA-трекер. Все в одном!",
    bonusLeft: {
      value: "скидка",
    },
    bonusRight: {
      value: "15%",
      highlight: true,
    },
    promocodeText: "на любой тариф. По промокоду:",
    promocode: "LEADSHUB",
    link: "/",
  },
  {
    img: Bonus3,
    text: "Трекинг-платформа для арбитража",
    bonusLeft: {
      value: "скидка",
    },
    bonusRight: {
      value: "20%",
      highlight: true,
    },
    promocodeText:
      "на покупку для нового клиента сроком до 3х месяцев. По промокоду:",
    promocode: "LEADSHUB",
    link: "/",
  },
  {
    img: Bonus1,
    text: "Новый сервис по виртуальным банковским картам.",
    bonusLeft: {
      value: "100",
      highlight: true,
    },
    bonusRight: {
      value: "карт",
    },
    promocodeText: "бесплатно (свежереги). По промокоду:",
    promocode: "LEADSHUB",
    link: "/",
  },
  {
    img: Bonus2,
    text: "Клоакинг. Фильтр ботов. CPA-трекер. Все в одном!",
    bonusLeft: {
      value: "скидка",
    },
    bonusRight: {
      value: "15%",
      highlight: true,
    },
    promocodeText: "на любой тариф. По промокоду:",
    promocode: "LEADSHUB",
    link: "/",
  },
  {
    img: Bonus3,
    text: "Трекинг-платформа для арбитража",
    bonusLeft: {
      value: "скидка",
    },
    bonusRight: {
      value: "20%",
      highlight: true,
    },
    promocodeText:
      "на покупку для нового клиента сроком до 3х месяцев. По промокоду:",
    promocode: "LEADSHUB",
    link: "/",
  },
];

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

          <FilterSearch className="w-full sm:w-auto" placeholder="Поиск" />
        </div>

        <div className="flex flex-col gap-[30px]">
          <Fade cascade direction="up" duration={100} damping={0.1} triggerOnce>
            {bonuses.map(
              ({
                img,
                text,
                bonusLeft,
                bonusRight,
                promocodeText,
                promocode,
                link,
              }) => (
                <div className="flex flex-col gap-4 rounded-2xl bg-text-100 p-4 shadow-100 md:flex-row md:items-center md:gap-0 lg:p-7">
                  <img
                    className="w-full max-w-[180px] object-contain pr-6 md:max-w-[140px] lg:pr-16"
                    src={img}
                  />
                  <p className="sub-heading-3 mr-2 w-full max-w-[350px] shrink-0 font-semibold lg:mr-7 lg:max-w-[418px]">
                    {text}
                  </p>
                  <div className="mr-3">
                    <p className="mb-1 text-xl font-extrabold uppercase text-text-400 lg:mb-2 lg:text-2xl">
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
                    <p className="text-sm font-semibold text-text-400 lg:text-base">
                      {promocodeText}{" "}
                      <span className="font-bold">{promocode}</span>
                    </p>
                  </div>
                  <a
                    className="flex items-center gap-1 text-sm font-extrabold text-[#3452FF] md:ml-auto lg:text-base"
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
