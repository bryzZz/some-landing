import React, { useState, FC } from "react";
import { Pagination, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";

import "swiper/css";
import "swiper/css/pagination";

import { ReactComponent as Shild } from "assets/icons/shild.svg";
import { ReactComponent as Person } from "assets/icons/person.svg";
import { ReactComponent as ArrowRight } from "assets/icons/arrow-right.svg";
import MainImage from "assets/images/main-image.png";
import MainImage2 from "assets/images/info-1.png";
import SliderImage1 from "assets/images/screen-3-slider-1.png";
import ShopCard1 from "assets/images/shop-showcase-1.png";
import ShopCard2 from "assets/images/shop-showcase-2.png";
import ShopCard3 from "assets/images/shop-showcase-3.png";
import ShopCard4 from "assets/images/shop-showcase-4.png";
import ShopCard5 from "assets/images/shop-showcase-5.png";
import ShopCard6 from "assets/images/shop-showcase-6.png";
import ShopCard7 from "assets/images/shop-showcase-7.png";
import ShopCard8 from "assets/images/shop-showcase-8.png";
import ShopCard9 from "assets/images/shop-showcase-9.png";
import { ReactComponent as IconCard1 } from "assets/icons/main-card-1.svg";
import { ReactComponent as IconCard2 } from "assets/icons/main-card-2.svg";
import { ReactComponent as IconCard3 } from "assets/icons/main-card-3.svg";
import { ReactComponent as IconCard4 } from "assets/icons/main-card-4.svg";
import { ReactComponent as IconCard5 } from "assets/icons/main-card-5.svg";
import { ReactComponent as IconCard6 } from "assets/icons/main-card-6.svg";
import { ReactComponent as IconCard7 } from "assets/icons/main-card-7.svg";
import { ReactComponent as IconCard8 } from "assets/icons/main-card-8.svg";
import ShopShowcaseBg from "assets/images/shop-showcase-bg.png";
import ShopShowcaseFg from "assets/images/shop-showcase-fg.png";
import { TabPanel } from "components";

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

interface Top {
  label: string;
  head: string[];
  rows: { value: string | number; Icon?: FC }[][];
}

const tops: Top[] = [
  {
    label: "Топ веб-мастеров",
    head: ["Имя", "За день", "За месяц"],
    rows: [
      [
        { value: "Никто Павлов", Icon: Person },
        { value: 5000 },
        { value: 50000 },
      ],
      [
        { value: "Никто Павлов", Icon: Person },
        { value: 5000 },
        { value: 50000 },
      ],
      [
        { value: "Никто Павлов", Icon: Person },
        { value: 5000 },
        { value: 50000 },
      ],
      [
        { value: "Никто Павлов", Icon: Person },
        { value: 5000 },
        { value: 50000 },
      ],
      [
        { value: "Никто Павлов", Icon: Person },
        { value: 5000 },
        { value: 50000 },
      ],
    ],
  },
  {
    label: "Топ офферов",
    head: ["Имя", "За день", "За месяц"],
    rows: [
      [{ value: "Оффер 1" }, { value: 5000 }, { value: 50000 }],
      [{ value: "Оффер 1" }, { value: 5000 }, { value: 50000 }],
      [{ value: "Оффер 1" }, { value: 5000 }, { value: 50000 }],
      [{ value: "Оффер 1" }, { value: 5000 }, { value: 50000 }],
      [{ value: "Оффер 1" }, { value: 5000 }, { value: 50000 }],
    ],
  },
];

const USDollar = new Intl.NumberFormat("ru-RU", {
  minimumSignificantDigits: 6,
});

const shopCards = [
  {
    title: "iPhone 14 Pro Max - 256GB",
    supTitle: "3 500 БАЛЛОВ",
    img: ShopCard1,
  },
  {
    title: "Watch Series 7 - 45 мм",
    supTitle: "980 БАЛЛОВ",
    img: ShopCard2,
  },
  {
    title: "AirPods Max",
    supTitle: "1 030 БАЛЛОВ",
    img: ShopCard3,
  },
  {
    title: "Наушники\n Apple AirPods Pro",
    supTitle: "450 БАЛЛОВ",
    img: ShopCard4,
  },
  {
    title: "MacBook Pro 13 Touch Bar - 256 GB",
    supTitle: "2 350 БАЛЛОВ",
    img: ShopCard5,
  },
  {
    title: "Dyson Pure Hot + Cool HP05",
    supTitle: "2 170 БАЛЛОВ",
    img: ShopCard6,
  },
  {
    title: "JBL PartyBox 1000",
    supTitle: "2 270 БАЛЛОВ",
    img: ShopCard7,
  },
  {
    title: "Samsung QE55Q77AAUXCE 75",
    supTitle: "3 950 БАЛЛОВ",
    img: ShopCard8,
  },
  {
    title: "PlayStation 5",
    supTitle: "1 500 БАЛЛОВ",
    img: ShopCard9,
  },
  {
    title: "Microsoft Xbox Series X",
    supTitle: "1 000 БАЛЛОВ",
    img: ShopCard9,
  },
];

export const Home: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <>
      <section className="base-container mb-32 flex justify-between gap-24">
        <div className="w-full max-w-xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#EFEFEF] bg-[#FFFFFF] px-5 pb-[2px] pt-1 font-semibold text-[#464646] backdrop-blur-sm">
            <Shild />
            Надежный партнер
          </div>
          <h1 className="mb-5 text-5xl font-extrabold leading-10 text-[#333333]">
            Монетизируйте трафик по лучшим условиям
          </h1>
          <p className="mb-10 text-lg font-semibold leading-7 text-[#4B4B4B]">
            Персональные офферы, собственные инструменты, инсайд информация и
            связки для топов.
          </p>
          <button className="rounded bg-gradient-to-r from-[#F7971D] via-[#F7AD1D] to-[#F7971D] px-6 py-4 font-extrabold text-[#FFFFFF]">
            Регистрация
          </button>
        </div>
        <div className="w-full max-w-[408px]">
          <img src={MainImage} className="w-full" />
        </div>
      </section>

      <section className="base-container grid-rows-7 mb-24 grid grid-cols-8 gap-7">
        {topCards.map(({ Icon, title, subTitle }, i) => (
          <div
            className="col-span-2 row-span-4 rounded-2xl bg-[#FFFFFF] p-6 shadow-xl shadow-[#3d3d3d0a]"
            key={i}
          >
            <div className="mb-3 grid grid-cols-[50px_1fr] gap-4">
              <Icon />
              <span className="text-[15px] font-bold text-[#333333]">
                {title}
              </span>
            </div>
            <p className="text-[14px] text-[#4B4B4B]">{subTitle}</p>
          </div>
        ))}

        <div className="col-span-2 row-span-6 rounded-2xl bg-gradient-to-tl from-[#FEC82F] to-[#FD9E58] p-6 pt-2 shadow-xl shadow-[#3d3d3d0a]">
          <img src={MainImage2} />
          <p className="text-center text-[15px] font-bold text-[#FFFFFF]">
            Генератор чеков
          </p>
        </div>

        {bottomCards.map(({ Icon, title, subTitle }, i) => (
          <div
            className="col-span-3 row-span-3 grid grid-cols-[130px_1fr] items-center rounded-2xl bg-[#FFFFFF] shadow-xl shadow-[#3d3d3d0a]"
            key={i}
          >
            <Icon />
            <div>
              <p className="text-[15px] font-bold text-[#333333]">{title}</p>
              <p className="text-[14px] text-[#4B4B4B]">{subTitle}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="small-container mb-28">
        <div className="max-w-2xl">
          <h2 className="mb-5 text-4xl font-semibold text-[#333333]">
            Индивидуальность & инновационность, уверенность
          </h2>
          <p className="text-[18px] text-[#4B4B4B]">
            Какой-то текст в одну строку какой-то текст в одну.
          </p>
        </div>

        <Swiper
          direction="vertical"
          autoHeight={true}
          mousewheel={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          height={400}
          modules={[Mousewheel, Pagination]}
        >
          {new Array(4).fill(0).map(() => (
            <SwiperSlide>
              <div className="flex gap-28 pl-24">
                <div>
                  <h3 className="mb-6 text-[130px] text-[#333333]">
                    <span className="text-[#F7971D]">$</span>20m+
                  </h3>
                  <p className="max-w-xs text-[#4B4B4B]">
                    Выплатили нашим клиентам за время существования нашей
                    компании.
                  </p>
                </div>
                <div>
                  <img
                    src={SliderImage1}
                    className="relative h-full w-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="small-container z-10 mb-32 flex flex-col items-center">
        <div className="mb-11 w-[500px] rounded-[35px] border-2 text-[15px] font-bold text-[#333333]">
          {tops.map(({ label }, i) => (
            <button
              className={twMerge(
                "w-1/2 px-11 py-4",
                tabValue === i &&
                  "rounded-[35px] bg-[#FDFDFD] shadow-[0_4px_21px_3px_rgba(28,28,28,0.07)] outline outline-2 outline-[#FDFDFD]"
              )}
              onClick={() => setTabValue(i)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="w-full">
          {tops.map(({ head, rows }, i) => (
            <TabPanel value={i} tabValue={tabValue} key={i}>
              <table className="w-full table-fixed border-separate border-spacing-y-2">
                <thead>
                  <tr className="bg-[#F4F4F4] text-[14px] font-bold text-[#B3B3B3]">
                    {head.map((value, i, arr) => (
                      <th
                        key={i}
                        className={twMerge(
                          "py-3 pl-8 text-left",
                          i === 0 && "rounded-bl rounded-tl",
                          i === arr.length - 1 && "rounded-br rounded-tr"
                        )}
                      >
                        {value}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      className="mb-2 rounded bg-[#F9F9F9] text-[14px] font-bold text-[#4B4B4B]"
                      key={i}
                    >
                      {row.map(({ value, Icon }, i, arr) => (
                        <td
                          className={twMerge(
                            "py-3 pl-3",
                            Icon && "flex items-center gap-4",
                            i === 0 && "rounded-bl rounded-tl",
                            i === arr.length - 1 && "rounded-br rounded-tr"
                          )}
                          key={i}
                        >
                          {Icon && <Icon />}
                          {typeof value === "number" ? (
                            <span>
                              <span className="text-[#F7971D]">$</span>{" "}
                              {USDollar.format(value)}
                            </span>
                          ) : (
                            value
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </TabPanel>
          ))}
        </div>
      </section>

      <section
        className="relative z-20 bg-auto bg-top bg-no-repeat pb-[860px] pt-28"
        style={{ backgroundImage: `url(${ShopShowcaseBg})` }}
      >
        <div className="base-container">
          <div>
            <h2 className="mb-5 max-w-[580px] text-4xl font-semibold text-[#333333]">
              Получай баллы за апрувнутые лиды и обменивай их на призы
            </h2>
            <p className="mb-10 max-w-[500px] text-[18px] text-[#4B4B4B]">
              Какой-то текст в одну строку какой-то текст в одну строку какой-то
              текст в одну строку.
            </p>
            <button className="flex items-center gap-2 rounded bg-gradient-to-r from-[#F7971D] via-[#F7AD1D] to-[#F7971D] px-6 py-4 font-extrabold text-[#FFFFFF]">
              В магазин
              <ArrowRight width="20px" height="20px" />
            </button>
          </div>
        </div>

        <div className="absolute left-0 top-72 z-30 grid rotate-[-30deg] grid-cols-[repeat(6,324px)] gap-20">
          {shopCards.map(({ img, supTitle, title }, i) => (
            <div
              className={twMerge(
                "flex flex-col items-center rounded-3xl bg-[#FFFFFF] py-12 text-center shadow-[0_0_24px_3px_rgba(61,61,61,0.04)]",
                i === 0 && "col-start-2"
              )}
            >
              <div className="mb-7 h-[324px]">
                <img className="h-full w-full object-cover" src={img} />
              </div>
              <h5 className="mb-3 font-black uppercase text-[#B5B5B5]">
                {supTitle}
              </h5>
              <h4 className="whitespace-pre-line text-[19px] font-bold text-[#333333]">
                {title}
              </h4>
            </div>
          ))}
        </div>

        <img
          src={ShopShowcaseFg}
          className="absolute bottom-0 left-0 z-40 w-full object-cover"
        />
      </section>
    </>
  );
};
