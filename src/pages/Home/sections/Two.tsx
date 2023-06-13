import React from "react";

import MainImage2 from "assets/images/info-1.png";

import { ReactComponent as IconCard1 } from "assets/icons/main-card-1.svg";
import { ReactComponent as IconCard2 } from "assets/icons/main-card-2.svg";
import { ReactComponent as IconCard3 } from "assets/icons/main-card-3.svg";
import { ReactComponent as IconCard4 } from "assets/icons/main-card-4.svg";
import { ReactComponent as IconCard5 } from "assets/icons/main-card-5.svg";
import { ReactComponent as IconCard6 } from "assets/icons/main-card-6.svg";
import { ReactComponent as IconCard7 } from "assets/icons/main-card-7.svg";
import { ReactComponent as IconCard8 } from "assets/icons/main-card-8.svg";

const topCards = [
  {
    title: "Лучшие офферы с местной лицензией",
    Icon: IconCard1,
    subTitle: "Больше не придется беспокоиться за проблемы с платежкой.",
  },
  {
    title: "Наш уникальный SMART-LINK",
    Icon: IconCard2,
    subTitle:
      "Охватываем весь мир по стримам! Если ты льешься WW, смело обращайся за лучшей сделкой.",
  },
  {
    title: "Наша вишенка на торте",
    Icon: IconCard3,
    subTitle:
      "Холд 0 дней после тестовой капы. Контент для профилей и каналов. Актуальные связки по заливу с FB.",
  },
  {
    title: "Все самое удобное только для вас",
    Icon: IconCard4,
    subTitle:
      "Все необходимые инструменты, купоны, диплинки, короткие ссылки и многое другое.",
  },
];

const bottomCards = [
  {
    title: "Настройка ссылок для DM",
    Icon: IconCard5,
    subTitle:
      "Поможем с настройкой ссылки для выдачи в DM. Твои лиды не пройдут мимо.",
  },
  {
    title: "Уникальный Telegram Бот",
    Icon: IconCard6,
    subTitle:
      "Получай статистику, баланс и досрочные выплаты. Работай с приложениями, уникализируй креатив и получай оповещения о новых лидах.",
  },
  {
    title: "Игровые офферы",
    Icon: IconCard7,
    subTitle: "Офферы с пикантным игровым сюжетом показывают невероятный CR.",
  },
  {
    title: "Оповещения о новых лидах",
    Icon: IconCard8,
    subTitle:
      "Устанавливай постбек в своей партнерке и получай оповещения прямо в Telegram.",
  },
];

export const Two: React.FC = () => {
  return (
    <section className="base-container grid-rows-7 mb-24 grid grid-cols-8 gap-7">
      {topCards.map(({ Icon, title, subTitle }, i) => (
        <div
          className="col-span-2 row-span-4 rounded-2xl bg-text-100 p-6 shadow-xl shadow-[#3d3d3d0a]"
          key={i}
        >
          <div className="mb-3 grid grid-cols-[50px_1fr] gap-4">
            <Icon />
            <span className="text-[15px] font-bold text-text-400">{title}</span>
          </div>
          <p className="text-[14px] text-text-300">{subTitle}</p>
        </div>
      ))}

      <div className="col-span-2 row-span-6 rounded-2xl bg-gradient-to-tl from-[#FEC82F] to-[#FD9E58] p-6 pt-2 shadow-xl shadow-[#3d3d3d0a]">
        <img src={MainImage2} />
        <p className="text-center text-[15px] font-bold text-text-100">
          Генератор чеков
        </p>
      </div>

      {bottomCards.map(({ Icon, title, subTitle }, i) => (
        <div
          className="col-span-3 row-span-3 grid grid-cols-[130px_1fr] items-center rounded-2xl bg-text-100 shadow-xl shadow-[#3d3d3d0a]"
          key={i}
        >
          <Icon />
          <div>
            <p className="text-[15px] font-bold text-text-400">{title}</p>
            <p className="text-[14px] text-text-300">{subTitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
