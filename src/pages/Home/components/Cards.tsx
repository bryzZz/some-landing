import React, { useMemo } from "react";
import { Fade, Zoom } from "react-awesome-reveal";

import MainImage2 from "assets/images/info-1.png";

import { ReactComponent as IconCard1 } from "assets/icons/main-card-1.svg";
import { ReactComponent as IconCard2 } from "assets/icons/main-card-2.svg";
import { ReactComponent as IconCard3 } from "assets/icons/main-card-3.svg";
import { ReactComponent as IconCard4 } from "assets/icons/main-card-4.svg";
import IconCard5 from "assets/icons/main-card-5.png";
import IconCard6 from "assets/icons/main-card-6.png";
import IconCard7 from "assets/icons/main-card-7.png";
import IconCard8 from "assets/icons/main-card-8.png";
import { useMediaQuery } from "hooks";
import { useTranslation } from "react-i18next";

const topCardsIcons: any[] = [
  {
    Icon: IconCard1,
  },
  {
    Icon: IconCard2,
  },
  {
    Icon: IconCard3,
  },
  {
    Icon: IconCard4,
  },
];

const bottomCardsIcons: any[] = [
  {
    Icon: IconCard5,
  },
  {
    Icon: IconCard6,
  },
  {
    Icon: IconCard7,
  },
  {
    Icon: IconCard8,
  },
];

interface BottomCardProps {
  Icon: string;
  title: string;
  subTitle: string;
}

const BottomCard: React.FC<BottomCardProps> = ({ Icon, title, subTitle }) => {
  const matches = useMediaQuery("(min-width: 768px)");

  if (matches) {
    return (
      <div className="flex h-full items-start rounded-2xl bg-text-100 pb-[15px] pr-[22px] shadow-100">
        <img
          src={Icon}
          className="h-[100px] w-[100px] flex-shrink-0 lg:h-[128px] lg:w-[129px]"
        />
        <div className="pt-[22px]">
          <p className="heading-6">{title}</p>
          <p className="sub-heading-4">{subTitle}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full rounded-2xl bg-text-100 pb-[15px] pr-[22px] shadow-100">
      <div className="flex items-center gap-1">
        <img src={Icon} className="h-[77px] w-[77px] flex-shrink-0" />
        <p className="heading-6">{title}</p>
      </div>

      <p className="sub-heading-4 px-5">{subTitle}</p>
    </div>
  );
};

export const Cards: React.FC = () => {
  const { t } = useTranslation();

  const topCards = useMemo(() => {
    const text = t("home:second.topCards", { returnObjects: true }) as any[];

    for (let i = 0; i < text.length; i++) {
      topCardsIcons[i].title = text[i].title;
      topCardsIcons[i].subTitle = text[i].subTitle;
    }

    return topCardsIcons;
  }, [t]);

  const bottomCards = useMemo(() => {
    const text = t("home:second.bottomCards", { returnObjects: true }) as any[];

    for (let i = 0; i < text.length; i++) {
      bottomCardsIcons[i].title = text[i].title;
      bottomCardsIcons[i].subTitle = text[i].subTitle;
    }

    return bottomCardsIcons;
  }, [t]);

  return (
    <section
      id="cards"
      className="base-container mb-20 grid scroll-mt-24 grid-cols-6 gap-7 xl:mb-24 xl:grid-cols-8"
    >
      <Fade
        cascade
        direction="up"
        className="col-span-6 row-span-4 rounded-2xl bg-text-100 p-5 shadow-100 md:col-span-3 xl:col-span-2 xl:p-6"
        duration={500}
        damping={0.3}
        triggerOnce
      >
        {topCards.map(({ Icon, title, subTitle }, i) => (
          <div key={i}>
            <div className="mb-3 flex items-center gap-4">
              <Icon className="h-[50px] w-[50px] flex-shrink-0 3xl:h-[56px] 3xl:w-[56px]" />
              <h5 className="heading-6">{title}</h5>
            </div>
            <p className="sub-heading-4">{subTitle}</p>
          </div>
        ))}
      </Fade>

      <Zoom
        triggerOnce
        className="col-span-6 row-span-2 md:col-span-2 lg:h-auto xl:col-span-2 xl:row-span-6"
      >
        <div className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-primary-300 to-primary-400 p-2 pb-4 pt-2 shadow-100 lg:h-auto lg:p-6">
          <img
            src={MainImage2}
            className="max-h-[400px] md:max-h-max 3xl:min-h-[288px]"
          />
          <p className="heading-6 text-center text-text-100">
            {t("home:second.check")}
          </p>
        </div>
      </Zoom>

      <Fade
        cascade
        direction="up"
        className="col-span-6 row-span-1 md:col-span-4 xl:col-span-3 xl:row-span-3"
        duration={500}
        damping={0.3}
        triggerOnce
      >
        {bottomCards.slice(0, 2).map((data, i) => (
          <BottomCard key={i} {...data} />
        ))}
      </Fade>

      <Fade
        cascade
        direction="up"
        className="col-span-6 row-span-1 md:col-span-3 xl:col-span-3 xl:row-span-3"
        duration={500}
        damping={0.3}
        triggerOnce
      >
        {bottomCards.slice(2).map((data, i) => (
          <BottomCard key={i} {...data} />
        ))}
      </Fade>
    </section>
  );
};
