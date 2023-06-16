import { FilterSearch, FilterSelect } from "components";
import React from "react";

import { ShopPreview } from "sections";

import Bonus1 from "assets/images/bonuses-1.png";
import Bonus2 from "assets/images/bonuses-2.png";
import Bonus3 from "assets/images/bonuses-3.png";
import { ReactComponent as ExternalLink } from "assets/icons/external-link.svg";

const bonuses = [
  {
    img: Bonus1,
    text: "Новый сервис по виртуальным банковским картам.",
    bonus: "100 карт",
    link: "/",
  },
  {
    img: Bonus2,
    text: "Клоакинг. Фильтр ботов. CPA-трекер. Все в одном!",
    bonus: "скидка 15%",
    link: "/",
  },
  {
    img: Bonus3,
    text: "Трекинг-платформа для арбитража",
    bonus: "скидка 20%",
    link: "/",
  },
  {
    img: Bonus1,
    text: "Новый сервис по виртуальным банковским картам.",
    bonus: "100 карт",
    link: "/",
  },
  {
    img: Bonus2,
    text: "Клоакинг. Фильтр ботов. CPA-трекер. Все в одном!",
    bonus: "скидка 15%",
    link: "/",
  },
  {
    img: Bonus3,
    text: "Трекинг-платформа для арбитража",
    bonus: "скидка 20%",
    link: "/",
  },
  {
    img: Bonus1,
    text: "Новый сервис по виртуальным банковским картам.",
    bonus: "100 карт",
    link: "/",
  },
  {
    img: Bonus2,
    text: "Клоакинг. Фильтр ботов. CPA-трекер. Все в одном!",
    bonus: "скидка 15%",
    link: "/",
  },
  {
    img: Bonus3,
    text: "Трекинг-платформа для арбитража",
    bonus: "скидка 20%",
    link: "/",
  },
];

export const Bonuses: React.FC = () => {
  return (
    <>
      <section>
        <h1 className="heading-1 mb-40 text-center">Скидки и бонусы</h1>

        <div className="base-container">
          <div className="mb-8 flex items-center justify-between">
            <FilterSelect
              options={[{ value: "1", label: "1" }]}
              placeholder="Категория"
            />
            <FilterSearch />
          </div>

          <div className="mb-40 flex flex-col gap-[30px]">
            {bonuses.map(({ img, text, bonus, link }) => (
              <div className="flex rounded-2xl bg-text-100 p-7 shadow-100">
                <img
                  className="w-full max-w-[120px] object-cover pr-16"
                  src={img}
                />
                <p className="sub-heading-3 mr-7 w-full max-w-md font-semibold">
                  {text}
                </p>
                <p className="mr-auto text-2xl font-extrabold uppercase text-text-400">
                  {bonus}
                </p>
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
            ))}
          </div>
        </div>
      </section>

      <ShopPreview endSeparator={false} />
    </>
  );
};
