import React, { useState } from "react";
import { Scene } from "react-scrollmagic";
import { Fade } from "react-awesome-reveal";

import { ReviewsSlider, TabPanel, Tabs } from "components";

import ReviewAvatar from "assets/images/review-avatar.png";

const reviews = [
  {
    label: "Сервисы и партнеры",
    items: [
      {
        avatar: ReviewAvatar,
        title: "Lorem Ipsum",
        date: "22.02.2022",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis odio hendrerit quisque nulla ac venenatis consequat feugiat. Maecenas proin sit purus, eros, egestas leo blandit.",
      },
      {
        avatar: ReviewAvatar,
        title: "Lorem Ipsum",
        date: "22.02.2022",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis odio hendrerit quisque nulla ac venenatis consequat feugiat. Maecenas proin sit purus, eros, egestas leo blandit.",
      },
      {
        avatar: ReviewAvatar,
        title: "Lorem Ipsum",
        date: "22.02.2022",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis odio hendrerit quisque nulla ac venenatis consequat feugiat. Maecenas proin sit purus, eros, egestas leo blandit.",
      },
      {
        avatar: ReviewAvatar,
        title: "Lorem Ipsum",
        date: "22.02.2022",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis odio hendrerit quisque nulla ac venenatis consequat feugiat. Maecenas proin sit purus, eros, egestas leo blandit.",
      },
      {
        avatar: ReviewAvatar,
        title: "Lorem Ipsum",
        date: "22.02.2022",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis odio hendrerit quisque nulla ac venenatis consequat feugiat. Maecenas proin sit purus, eros, egestas leo blandit.",
      },
    ],
  },
  {
    label: "Веб-мастера",
    items: [
      {
        avatar: ReviewAvatar,
        title: "Lorem Ipsum2",
        date: "22.02.2022",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis odio hendrerit quisque nulla ac venenatis consequat feugiat. Maecenas proin sit purus, eros, egestas leo blandit.",
        source: "partnerkin.com",
        rating: 8,
      },
      {
        avatar: ReviewAvatar,
        title: "Lorem Ipsum2",
        date: "22.02.2022",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis odio hendrerit quisque nulla ac venenatis consequat feugiat. Maecenas proin sit purus, eros, egestas leo blandit.",
        source: "partnerkin.com",
        rating: 8,
      },
      {
        avatar: ReviewAvatar,
        title: "Lorem Ipsum2",
        date: "22.02.2022",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis odio hendrerit quisque nulla ac venenatis consequat feugiat. Maecenas proin sit purus, eros, egestas leo blandit.",
        source: "partnerkin.com",
        rating: 8,
      },
      {
        avatar: ReviewAvatar,
        title: "Lorem Ipsum2",
        date: "22.02.2022",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis odio hendrerit quisque nulla ac venenatis consequat feugiat. Maecenas proin sit purus, eros, egestas leo blandit.",
        source: "partnerkin.com",
        rating: 8,
      },
      {
        avatar: ReviewAvatar,
        title: "Lorem Ipsum2",
        date: "22.02.2022",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis odio hendrerit quisque nulla ac venenatis consequat feugiat. Maecenas proin sit purus, eros, egestas leo blandit.",
        source: "partnerkin.com",
        rating: 8,
      },
    ],
  },
];

const labels = reviews.map(({ label }) => label);

export const Reviews: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <section
      id="bubbles-4"
      className="relative z-30 bg-text-100 pb-24 pt-5 md:pt-0"
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
            Отзывы
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
