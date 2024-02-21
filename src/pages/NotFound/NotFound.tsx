import React from "react";
import { Link } from "react-router-dom";

import { randomInteger } from "utils";
import { useMediaQuery } from "hooks";

import FirstBgXl from "assets/images/first-top-bg-xl.jpg";
import FirstBg3Xl from "assets/images/first-top-bg-3xl.jpg";
import Image1 from "assets/images/404-1.png";
import Image2 from "assets/images/404-2.png";

import { ReactComponent as Bonuses } from "assets/icons/bonuses.svg";
import { ReactComponent as Store } from "assets/icons/store.svg";
import { ReactComponent as Blog } from "assets/icons/blog.svg";
import { ReactComponent as Chat } from "assets/icons/chat.svg";
import { ReactComponent as Arrow } from "assets/icons/arrow-right-2.svg";
import { useTranslation } from "react-i18next";

const images = [Image1, Image2];

const cards = [
  {
    Icon: Bonuses,
    link: "/bonuses",
  },
  {
    Icon: Store,
    link: "/points-store",
  },
  {
    Icon: Blog,
    link: "/blog",
  },
  {
    Icon: Chat,
    link: "https://t.me/leads_chat",
    external: true,
  },
];

export const NotFound: React.FC = () => {
  const { t } = useTranslation();

  const matches = useMediaQuery("(min-width: 1921px)");

  const getBg = () => {
    return matches ? FirstBg3Xl : FirstBgXl;
  };

  const cardsText = t("notFound:cards", { returnObjects: true }) as any[];

  return (
    <div
      className="bg-auto bg-left-top bg-no-repeat"
      style={{
        backgroundImage: `url(${getBg()})`,
      }}
    >
      <div className="mx-auto mb-16 flex w-full max-w-[900px] flex-col items-center justify-center gap-8 px-4 pt-[70px] lg:mb-48">
        <img
          className="w-full max-w-[550px]"
          src={images[randomInteger(0, 1)]}
        />
        <h1 className="heading-1 text-center font-semibold">
          {t("notFound:title")}
        </h1>
        <Link to="/" className="btn-primary py-4">
          {t("notFound:home")}
        </Link>
      </div>
      <div className="mx-auto grid w-full max-w-[1344px] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 px-4">
        {cards.map(({ Icon, link, external = false }, i) => {
          if (external) {
            return (
              <a
                className="cursor-pointer rounded-2xl bg-white px-5 pb-10 pt-5 shadow-100"
                href={link}
                target="_blank"
              >
                <div className="mb-3 flex items-center">
                  <Icon className="mr-4" />
                  <h4 className="heading-4 mr-auto">{cardsText[i].title}</h4>
                  <Arrow />
                </div>
                <p className="sub-heading-3">{cardsText[i].subtitle}</p>
              </a>
            );
          }

          return (
            <Link
              className="cursor-pointer rounded-2xl bg-white px-5 pb-10 pt-5 shadow-100"
              to={link}
            >
              <div className="mb-3 flex items-center">
                <Icon className="mr-4" />
                <h4 className="heading-4 mr-auto">{cardsText[i].title}</h4>
                <Arrow />
              </div>
              <p className="sub-heading-3">{cardsText[i].subtitle}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
