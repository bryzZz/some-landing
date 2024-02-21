import React, { useMemo, useState, useTransition } from "react";
import { twMerge } from "tailwind-merge";
import { Fade } from "react-awesome-reveal";
import { CategoryFilter, FilterSearch, ShopPreviewMini } from "components";

import { ReactComponent as ExternalLink } from "assets/icons/external-link.svg";
import { useTranslation } from "react-i18next";

import BlackCoronium from "assets/images/bonuses/Black-Coronium-Logo.svg";
import EPN from "assets/images/bonuses/epn.svg";
import FLEX_CARD from "assets/images/bonuses/_Flex_Card__.png";
import Cloaking from "assets/images/bonuses/Cloaking_Logo_new.svg";
import SMS from "assets/images/bonuses/sms-activate.svg";
import PWA from "assets/images/bonuses/pwa.svg";
import Dolphin from "assets/images/bonuses/dolphin.svg";
import Adspect from "assets/images/bonuses/adspect.png";
import Adspy from "assets/images/bonuses/adspy.png";
import Fbtool from "assets/images/bonuses/fbtool.png";
import Iproxy from "assets/images/bonuses/Iproxy.png";
import Keitaro from "assets/images/bonuses/keitaro.png";
import Cloakit from "assets/images/bonuses/cloakit.png";
import Telemetr from "assets/images/bonuses/telemetr.png";
import Adlover from "assets/images/bonuses/adlover.png";
import Adheart from "assets/images/bonuses/adheart.png";

export const Bonuses: React.FC = () => {
  const { t } = useTranslation();

  const allCategories = t("bonuses:allCategories", {
    returnObjects: true,
  }) as string[];

  const bonusesText = t("bonuses:allBonuses", {
    returnObjects: true,
  }) as any[];

  const bonuses = [
    {
      img: BlackCoronium,
      text: bonusesText[0].text,
      bonusLeft: {
        value: bonusesText[0].bonusLeft,
        highlight: true,
      },
      bonusRight: {
        value: bonusesText[0].bonusRight,
      },
      promocodeText: bonusesText[0].promocodeText,
      promocode: "LEADSHUB",
      link: "https://coronium.io",
      category: bonusesText[0].category,
    },
    {
      img: EPN,
      text: bonusesText[1].text,
      bonusLeft: {
        value: bonusesText[1].bonusLeft,
        highlight: true,
      },
      bonusRight: {
        value: bonusesText[1].bonusRight,
      },
      promocodeText: bonusesText[1].promocodeText,
      promocode: "EPN",
      link: "https://epn.net/",
      category: bonusesText[1].category,
    },
    {
      img: FLEX_CARD,
      text: bonusesText[2].text,
      bonusLeft: {
        value: bonusesText[2].bonusLeft,
        highlight: true,
      },
      bonusRight: {
        value: bonusesText[2].bonusRight,
      },
      promocodeText: bonusesText[2].promocodeText,
      promocode: "LEADSHUB",
      link: "/",
      category: bonusesText[2].category,
    },
    {
      img: Cloaking,
      text: bonusesText[3].text,
      bonusLeft: {
        value: bonusesText[3].bonusLeft,
      },
      bonusRight: {
        value: bonusesText[3].bonusRight,
        highlight: true,
      },
      promocodeText: bonusesText[3].promocodeText,
      promocode: "LEADSHUB30",
      link: "https://cloaking.house/?utm_source=leadshub",
      category: bonusesText[3].category,
    },
    {
      img: SMS,
      text: bonusesText[4].text,
      bonusLeft: {
        value: bonusesText[4].bonusLeft,
      },
      bonusRight: {
        value: bonusesText[4].bonusRight,
        highlight: true,
      },
      promocodeText: bonusesText[4].promocodeText,
      promocode: "LEADSHUB",
      link: "https://sms-activate.org/?ref=2374140",
      category: bonusesText[4].category,
    },
    {
      img: PWA,
      text: bonusesText[5].text,
      bonusLeft: {
        value: bonusesText[5].bonusLeft,
      },
      bonusRight: {
        value: bonusesText[5].bonusRight,
        highlight: true,
      },
      promocodeText: bonusesText[5].promocodeText,
      promocode: "PWALHUB",
      link: "https://pwa.market/",
      category: bonusesText[5].category,
    },
    {
      img: Dolphin,
      text: bonusesText[6].text,
      bonusLeft: {
        value: bonusesText[6].bonusLeft,
      },
      bonusRight: {
        value: bonusesText[6].bonusRight,
        highlight: true,
      },
      promocodeText: bonusesText[6].promocodeText,
      promocode: "LEADSHUB",
      link: "https://dolphin.ru.com/ru/",
      category: bonusesText[6].category,
    },
    {
      img: Adspect,
      text: bonusesText[7].text,
      bonusLeft: {
        value: bonusesText[7].bonusLeft,
      },
      bonusRight: {
        value: bonusesText[7].bonusRight,
        highlight: true,
      },
      promocodeText: bonusesText[7].promocodeText,
      promocode: "LEADSHUB",
      link: "https://www.adspect.ai/ru/",
      category: bonusesText[7].category,
    },
    {
      img: Adspy,
      text: bonusesText[8].text,
      bonusLeft: {
        value: bonusesText[8].bonusLeft,
      },
      bonusRight: {
        value: bonusesText[8].bonusRight,
        highlight: true,
      },
      promocodeText: bonusesText[8].promocodeText,
      promocode: "LEADSHUB",
      link: "https://app.adspy.com/ads",
      category: bonusesText[8].category,
    },
    {
      img: Fbtool,
      text: bonusesText[9].text,
      bonusLeft: {
        value: bonusesText[9].bonusLeft,
      },
      bonusRight: {
        value: bonusesText[9].bonusRight,
        highlight: true,
      },
      promocodeText: bonusesText[9].promocodeText,
      promocode: "LEADSHUB15",
      link: "https://fbtool.pro/",
      category: bonusesText[9].category,
    },
    {
      img: Iproxy,
      text: bonusesText[10].text,
      bonusLeft: {
        value: bonusesText[10].bonusLeft,
      },
      bonusRight: {
        value: bonusesText[10].bonusRight,
        highlight: true,
      },
      promocodeText: bonusesText[10].promocodeText,
      promocode: "LEADSHUB15",
      link: "https://iproxy.online/",
      category: bonusesText[10].category,
    },
    {
      img: Keitaro,
      text: bonusesText[11].text,
      bonusLeft: {
        value: bonusesText[11].bonusLeft,
      },
      bonusRight: {
        value: bonusesText[11].bonusRight,
        highlight: true,
      },
      promocodeText: bonusesText[11].promocodeText,
      promocode: "LEADSHUB20",
      link: "https://keitaro.io/en/",
      category: bonusesText[11].category,
    },
    {
      img: Cloakit,
      text: bonusesText[12].text,
      bonusLeft: {
        value: bonusesText[12].bonusLeft,
      },
      bonusRight: {
        value: bonusesText[12].bonusRight,
        highlight: true,
      },
      promocodeText: bonusesText[12].promocodeText,
      promocode: "LEADSHUB",
      link: "https://cloakit.pro/?ref=LEADSHUB",
      category: bonusesText[12].category,
    },
    {
      img: Telemetr,
      text: bonusesText[13].text,
      bonusLeft: {
        value: bonusesText[13].bonusLeft,
      },
      bonusRight: {
        value: bonusesText[13].bonusRight,
        highlight: true,
      },
      promocodeText: bonusesText[13].promocodeText,
      promocode: "LEADSHUB",
      link: "https://telemetr.me/",
      category: bonusesText[13].category,
    },
    {
      img: Adlover,
      text: bonusesText[14].text,
      bonusLeft: {
        value: bonusesText[14].bonusLeft,
      },
      bonusRight: {
        value: bonusesText[14].bonusRight,
        highlight: true,
      },
      promocodeText: bonusesText[14].promocodeText,
      promocode: "LEADSHUB",
      link: "https://adlover.ru/",
      category: bonusesText[14].category,
    },
    {
      img: Adheart,
      text: bonusesText[15].text,
      bonusLeft: {
        value: bonusesText[15].bonusLeft,
      },
      bonusRight: {
        value: bonusesText[15].bonusRight,
        highlight: true,
      },
      promocodeText: bonusesText[15].promocodeText,
      promocode: "LEADSHUB",
      link: "https://adheart.me/",
      category: bonusesText[15].category,
    },
  ];

  const [categories, setCategories] = useState(() =>
    allCategories.map((label) => ({ label, checked: false }))
  );
  const [, startTransition] = useTransition();
  const [search, setSearch] = useState("");

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

  const handleChangeSearch = (value: string) => {
    startTransition(() => {
      setSearch(value);
    });
  };

  const filteredBonuses = useMemo(() => {
    return bonuses
      .filter((bonus) => {
        if (!categories.some((category) => category.checked)) return true;

        for (const category of categories) {
          if (category.checked && category.label === bonus.category)
            return true;
        }

        return false;
      })
      .filter((bonus) =>
        bonus.text.toLowerCase().trim().includes(search.toLowerCase().trim())
      );
  }, [categories, search]);

  return (
    <>
      <section className="base-container mb-10 md:mb-20 lg:mb-40">
        <Fade direction="up" duration={500} triggerOnce>
          <h1 className="heading-1 mb-28 text-center lg:mb-40">
            {t("bonuses:title")}
          </h1>
        </Fade>

        <div className="mb-8 flex flex-wrap-reverse items-center justify-between gap-2">
          <CategoryFilter
            categories={categories}
            onCategoryClick={handleCategoryClick}
            position="bottom left"
            // newCategoryCount={1}
          />

          <FilterSearch
            className="w-full rounded-lg border-none shadow-[0px_2px_10px_0px_rgba(0,0,0,0.08)] sm:w-auto"
            inputClassName="text-sm"
            placeholder={t("bonuses:search")}
            value={search}
            onChange={handleChangeSearch}
          />
        </div>

        <div className="flex flex-col gap-[30px]">
          <Fade cascade direction="up" duration={100} damping={0.1} triggerOnce>
            {filteredBonuses.map(
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
                    className="mr-6 w-full max-w-[180px] md:max-w-[120px] lg:mr-16 3xl:max-w-[160px]"
                    src={img}
                  />
                  <p className="sub-heading-3 mr-2 w-full max-w-[350px] shrink-0 font-semibold lg:mr-7 lg:max-w-[418px] 3xl:max-w-[400px]">
                    {text}
                  </p>
                  <div className="mr-3">
                    <p className="mb-1 text-xl font-extrabold uppercase text-text-400 lg:mb-2 lg:text-2xl 3xl:text-3xl">
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
                    <p className="text-sm font-semibold text-text-400 lg:text-base 3xl:text-lg">
                      {promocodeText}{" "}
                      <span className="font-bold">{promocode}</span>
                    </p>
                  </div>
                  <a
                    className="flex items-center gap-1 text-base font-extrabold text-[#3452FF] md:ml-auto 3xl:text-lg"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("bonuses:goToBonus")}
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
