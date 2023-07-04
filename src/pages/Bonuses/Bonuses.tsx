import React from "react";

import { FilterSearch, FilterSelect, ShopPreviewMini } from "components";

import Bonus1 from "assets/images/bonuses-1.png";
import Bonus2 from "assets/images/bonuses-2.png";
import Bonus3 from "assets/images/bonuses-3.png";
import { ReactComponent as ExternalLink } from "assets/icons/external-link.svg";
import { twMerge } from "tailwind-merge";

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

export const Bonuses: React.FC = () => {
  return (
    <>
      <section className="base-container mb-20 lg:mb-40">
        <h1 className="heading-1 mb-28 text-center lg:mb-40">
          Скидки и бонусы
        </h1>

        <div className="mb-8 flex items-center justify-between">
          <FilterSelect
            options={[{ value: "1", label: "1" }]}
            placeholder="Категория"
          />
          <FilterSearch placeholder="Поиск" />
        </div>

        <div className="flex flex-col gap-[30px]">
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
              <div className="flex items-center rounded-2xl bg-text-100 p-4 shadow-100 lg:p-7">
                <img
                  className="w-full max-w-[140px] object-contain pr-11 lg:pr-16"
                  src={img}
                />
                <p className="sub-heading-3 mr-7 w-full max-w-[370px] shrink-0 font-semibold lg:max-w-[418px]">
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
                  className="ml-auto flex items-center gap-1 text-sm font-extrabold text-[#3452FF] lg:text-base"
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
        </div>
      </section>

      <ShopPreviewMini />
    </>
  );
};
