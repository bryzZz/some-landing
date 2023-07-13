import React from "react";

import { BlogSlider, Posts, Recent, Tags } from "./components";
import { Post, RecentPost } from "types";

import PostImg from "assets/images/post-img.jpg";
import RecentImage1 from "assets/images/recent-post-1.jpg";
import RecentImage2 from "assets/images/recent-post-2.jpg";
import RecentImage3 from "assets/images/recent-post-3.jpg";
import { useMediaQuery } from "hooks";

const tags = [
  "Gambling",
  "Схемы",
  "Nutra",
  "Betting",
  "Связки",
  "Dating",
  "Антики",
  "Фарминг",
];

const posts: Post[] = [
  {
    date: "20 мая 2022",
    tags: ["Gambling", "Арбитраж"],
    title: "For athletes, high altitude produces",
    text: "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that moves the foundation of classical...",
    image: PostImg,
    link: "0",
  },
  {
    date: "20 мая 2022",
    tags: ["Gambling", "Арбитраж"],
    title: "For athletes, high altitude produces",
    text: "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that moves the...",
    link: "0",
  },
  {
    date: "20 мая 2022",
    tags: ["Gambling", "Арбитраж"],
    title: "For athletes, high altitude produces",
    text: "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that moves the...",
    link: "0",
  },
  {
    date: "20 мая 2022",
    tags: ["Gambling", "Арбитраж"],
    title: "For athletes, high altitude produces",
    text: "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that moves the foundation of classical...",
    image: PostImg,
    link: "0",
  },
  {
    date: "20 мая 2022",
    tags: ["Gambling", "Арбитраж"],
    title: "For athletes, high altitude produces",
    text: "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that moves the...",
    link: "0",
  },
  {
    date: "20 мая 2022",
    tags: ["Gambling", "Арбитраж"],
    title: "For athletes, high altitude produces",
    text: "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that moves the...",
    link: "0",
  },
];

const recentPosts: RecentPost[] = [
  {
    image: RecentImage1,
    title: "Health and fitness",
    date: "20 мая 2022",
    link: "0",
  },
  {
    image: RecentImage2,
    title: "Geography and places",
    date: "20 мая 2022",
    link: "0",
  },
  {
    image: RecentImage3,
    title: "Philosophy and thinking",
    date: "20 мая 2022",
    link: "0",
  },
];

export const Blog: React.FC = () => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div className="pb-24">
      <BlogSlider />
      <section className="base-container flex flex-col justify-center md:flex-row md:gap-[30px]">
        {matches ? (
          <>
            <Posts posts={posts} className="w-full flex-grow-0" />
            <div>
              <Tags tags={tags} />
              <Recent posts={recentPosts} />
            </div>
          </>
        ) : (
          <>
            <Tags tags={tags} />
            <Posts posts={posts} />
            <Recent posts={recentPosts} />
          </>
        )}
      </section>
    </div>
  );
};
