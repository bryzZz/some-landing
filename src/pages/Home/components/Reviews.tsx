import React, { useMemo, useState } from "react";
import { Scene } from "react-scrollmagic";
import { Fade } from "react-awesome-reveal";

import { reviews as initialReviews } from "constants/index";
import { ReviewsSlider, TabPanel, Tabs } from "components";
import { useTranslation } from "react-i18next";

export const Reviews: React.FC = () => {
  const { t } = useTranslation();

  const [tabValue, setTabValue] = useState(0);

  const [reviews, labels] = useMemo(() => {
    const res = [...initialReviews];
    const text = t("home:reviews.items", { returnObjects: true }) as any[];
    for (let i = 0; i < res.length; i++) {
      res[i].label = text[i].label;

      for (let j = 0; j < res[i].items.length; j++) {
        res[i].items[j].text = text[i].items[j].text;
      }
    }

    const labels = res.map(({ label }) => label);

    return [res, labels];
  }, [t]);

  return (
    <section
      id="bubbles-4"
      className="relative z-30 scroll-mt-24 bg-text-100 pb-24 pt-14"
    >
      <Scene duration={1500} triggerElement="#bubbles-4" triggerHook="onEnter">
        {(progress: number) => (
          <>
            <div
              className="absolute left-[10vw] h-11 w-11 rounded-full bg-[#5956E9]"
              style={{
                top: 350 + progress * -300,
              }}
            />
            <div
              className="absolute left-[30vw] h-5 w-5 rounded-full bg-[#ECF2F6]"
              style={{
                top: 100 + progress * -100,
              }}
            />
            <div
              className="absolute right-[30vw] h-5 w-5 rounded-full bg-[#FFDC60] opacity-50"
              style={{
                top: 200 + progress * -100,
              }}
            />
          </>
        )}
      </Scene>

      <Fade cascade direction="up" duration={500} damping={0.3} triggerOnce>
        <div className="flex flex-col items-center">
          <h2 className="heading-2 mb-10">
            {t("home:reviews.title")}
            <span className="ml-[1px] inline-block h-[7px] w-[7px] rounded-full bg-primary-100" />
          </h2>

          <Tabs
            className="mb-20"
            tabs={labels}
            value={tabValue}
            onChange={setTabValue}
          />
        </div>

        <div className="md:reviews-container pl-4">
          {reviews.map(({ items }, i) => (
            <TabPanel value={i} tabValue={tabValue} key={i}>
              <ReviewsSlider items={items} />
            </TabPanel>
          ))}
        </div>
      </Fade>
    </section>
  );
};
