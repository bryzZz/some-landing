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
      <section className="base-container">
        <h1 className="heading-1 mb-40 text-center">Скидки и бонусы</h1>

        <div className="mb-8 flex items-center justify-between">
          <FilterSelect
            options={[{ value: "1", label: "1" }]}
            placeholder="Категория"
          />
          <FilterSearch placeholder="Поиск" />
        </div>

        <div className="mb-40 flex flex-col gap-[30px]">
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
              <div className="flex items-center rounded-2xl bg-text-100 p-7 shadow-100">
                <img
                  className="w-full max-w-[140px] object-contain pr-16"
                  src={img}
                />
                <p className="sub-heading-3 mr-7 w-full max-w-md font-semibold">
                  {text}
                </p>
                <div className="mr-auto max-w-md">
                  <p className="mb-2 mr-auto text-2xl font-extrabold uppercase text-text-400">
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
                  <p className="font-semibold text-text-400">
                    {promocodeText}{" "}
                    <span className="font-bold">{promocode}</span>
                  </p>
                </div>
                <a
                  className="flex items-center gap-1 justify-self-end font-extrabold text-[#3452FF]"
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
