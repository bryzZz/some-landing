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

export const Cards: React.FC = () => {
  return (
    <section className="base-container mb-20 grid grid-cols-6 gap-7 lg:mb-24 lg:grid-cols-8">
      {topCards.map(({ Icon, title, subTitle }, i) => (
        <div
          className="col-span-3 row-span-4 rounded-2xl bg-text-100 p-5 shadow-100 lg:col-span-2 lg:p-6"
          key={i}
        >
          <div className="mb-3 grid grid-cols-[50px_1fr] items-center gap-4">
            <Icon />
            <h5 className="heading-6">{title}</h5>
          </div>
          <p className="sub-heading-4">{subTitle}</p>
        </div>
      ))}

      <div className="col-span-2 row-span-2 rounded-2xl bg-gradient-to-tl from-primary-300 to-primary-400 p-6 pt-2 shadow-100 lg:col-span-2 lg:row-span-6">
        <img src={MainImage2} />
        <p className="heading-6 text-center text-text-100">Генератор чеков</p>
      </div>

      {bottomCards.slice(0, 2).map(({ Icon, title, subTitle }, i) => (
        <div
          className="col-span-4 row-span-1 grid grid-cols-[130px_1fr] items-center rounded-2xl bg-text-100 shadow-100 lg:col-span-3 lg:row-span-3"
          key={i}
        >
          <Icon />
          <div>
            <p className="heading-6">{title}</p>
            <p className="sub-heading-4">{subTitle}</p>
          </div>
        </div>
      ))}

      {bottomCards.slice(2).map(({ Icon, title, subTitle }, i) => (
        <div
          className="col-span-3 row-span-1 grid grid-cols-[130px_1fr] items-center rounded-2xl bg-text-100 shadow-100 lg:col-span-3 lg:row-span-3"
          key={i}
        >
          <Icon />
          <div>
            <p className="heading-6">{title}</p>
            <p className="sub-heading-4">{subTitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
