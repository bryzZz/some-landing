import React, { useMemo, useState } from "react";

import { BlogSlider, Posts, Recent, Tags } from "./components";
import { Post, RecentPost } from "types";

import Img1 from "assets/images/blogs/0/1.jpg";
import Img2 from "assets/images/blogs/1/3.png";
import Img3 from "assets/images/blogs/2/1.jpg";
import Img4 from "assets/images/blogs/3/1.png";
import Img5 from "assets/images/blogs/4/1.jpg";

import { useMediaQuery } from "hooks";
import { useTranslation } from "react-i18next";

const _posts = [
  {
    image: Img1,
    link: "0",
  },
  {
    image: Img2,
    link: "1",
  },
  {
    image: Img3,
    link: "2",
  },
  {
    image: Img4,
    link: "3",
  },
  {
    image: Img5,
    link: "4",
  },
  {
    link: "5",
  },
] as Post[];

const _recentPosts = [
  {
    image: Img3,
    link: "2",
  },
  {
    image: Img4,
    link: "3",
  },
  {
    image: Img5,
    link: "4",
  },
] as RecentPost[];

export const Blog: React.FC = () => {
  const { t } = useTranslation();

  const tags = t("blog:tags", { returnObjects: true }) as string[];

  const posts = useMemo(() => {
    const res = [..._posts];
    const text = t("blog:posts", {
      returnObjects: true,
    }) as any[];

    for (let i = 0; i < res.length; i++) {
      res[i].date = text[i].date;
      res[i].tags = text[i].tags;
      res[i].title = text[i].title;
      res[i].text = text[i].text;
    }

    return res;
  }, [t]);

  const recentPosts = useMemo(() => {
    const res = [..._recentPosts];
    const text = t("blog:recentPosts", {
      returnObjects: true,
    }) as any[];

    for (let i = 0; i < res.length; i++) {
      res[i].date = text[i].date;
      res[i].title = text[i].title;
    }

    return res;
  }, [t]);

  const matches = useMediaQuery("(min-width: 768px)");

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSelectTag = (tag: string) => {
    setSelectedTags((p) => {
      if (p.includes(tag)) {
        return p.filter((t) => t !== tag);
      }

      return [...p, tag];
    });
  };

  const filteredPosts = useMemo(() => {
    if (selectedTags.length === 0) return posts;

    return posts.filter((p) => {
      for (const tag of p.tags) {
        if (selectedTags.includes(tag)) return true;
      }

      return false;
    });
  }, [posts, selectedTags]);

  return (
    <div className="pb-24">
      <BlogSlider />
      <section className="base-container grid grid-cols-1 justify-center md:grid-cols-[2fr,1fr] md:gap-[30px]">
        {matches ? (
          <>
            <Posts posts={filteredPosts} />
            <div>
              <Recent className="mb-12" posts={recentPosts} />
              <Tags
                tags={tags}
                selected={selectedTags}
                onSelect={handleSelectTag}
              />
            </div>
          </>
        ) : (
          <>
            <Tags
              tags={tags}
              selected={selectedTags}
              onSelect={handleSelectTag}
            />
            <Posts posts={filteredPosts} />
            <Recent posts={recentPosts} />
          </>
        )}
      </section>
    </div>
  );
};
