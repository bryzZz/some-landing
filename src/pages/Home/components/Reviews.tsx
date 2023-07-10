import React, { useState } from "react";

import ReviewAvatar from "assets/images/review-avatar.png";

import { ReviewsSlider, TabPanel, Tabs } from "components";

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
      },
      {
        avatar: ReviewAvatar,
        title: "Lorem Ipsum2",
        date: "22.02.2022",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis odio hendrerit quisque nulla ac venenatis consequat feugiat. Maecenas proin sit purus, eros, egestas leo blandit.",
      },
      {
        avatar: ReviewAvatar,
        title: "Lorem Ipsum2",
        date: "22.02.2022",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis odio hendrerit quisque nulla ac venenatis consequat feugiat. Maecenas proin sit purus, eros, egestas leo blandit.",
      },
      {
        avatar: ReviewAvatar,
        title: "Lorem Ipsum2",
        date: "22.02.2022",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis odio hendrerit quisque nulla ac venenatis consequat feugiat. Maecenas proin sit purus, eros, egestas leo blandit.",
      },
      {
        avatar: ReviewAvatar,
        title: "Lorem Ipsum2",
        date: "22.02.2022",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis odio hendrerit quisque nulla ac venenatis consequat feugiat. Maecenas proin sit purus, eros, egestas leo blandit.",
      },
    ],
  },
];

const labels = reviews.map(({ label }) => label);

export const Reviews: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <section className="relative z-40 bg-text-100 pb-24 pt-5 md:pt-0">
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
    </section>
  );
};
