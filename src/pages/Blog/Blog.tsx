import React, { useMemo, useState } from "react";

import { BlogSlider, Posts, Recent, Tags } from "./components";
import { Post, RecentPost } from "types";

import Img1 from "assets/images/blogs/0/1.jpg";
import Img2 from "assets/images/blogs/1/3.png";
import Img3 from "assets/images/blogs/2/1.jpg";
import Img4 from "assets/images/blogs/3/1.png";
import Img5 from "assets/images/blogs/4/1.jpg";

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
    date: "November 16, 2023",
    tags: ["Gambling", "Арбитраж"],
    title: "Актуальные подходы и связки при работе с Инфлюенс трафиком",
    text: "Актуальные подходы в инфлюенс-трафике дают возможность эффективно продвигать гемблинг через различные социальные платформы, включая Facebook.",
    image: Img1,
    link: "0",
  },
  {
    date: "November 16, 2023",
    tags: ["Gambling", "Арбитраж"],
    title: "Все о рекламе в Telegram Ads",
    text: "Согласно данным портала Inclient.ru, в 2022 году Telegram чаще всего загружали в Индии (70,48 млн), России (24,15 млн), США (20,03 млн), Индонезии (19,61 млн) и Бразилии (18,04 млн). Мессенджер популярен среди пользователей в России, Белоруссии, Украине, Казахстане и США. Кроме того, по итогам 2022 года аудитория Telegram выросла с 25,5 млн до 48,8 млн пользователей.",
    image: Img2,
    link: "1",
  },
  {
    date: "November 16, 2023",
    tags: ["Gambling", "Арбитраж"],
    title: "🔥 Инфлюенс трафик на Грецию: как мы получали трафик из Facebook",
    text: "Одна из самых креативных задумок в гемблинге - инфлюенс трафик, так идеально подошедший под азартные игры: быстрая возможность заработать на удаче и рассчетах. При этом “алгоритмы” годами стреляли в России и на территории СНГ, но на бурж выходили очень долго. Впрочем, последние пару лет на любой гемблинг-партнерке можно найти несколько офферов по гео преимущественно из тир-2 и тир-3, на которые такой трафик примется.",
    image: Img3,
    link: "2",
  },
  {
    date: "November 16, 2023",
    tags: ["Gambling", "Арбитраж"],
    title: "Сервисы для создания рекламных креативов на телефоне",
    text: "Хорошо сделанный креатив - залог успешного залива трафика. И если ты не хочешь нанимать дизайнера, то можешь сделать сам дизайн на телефоне. В этой статье мы сделали подборку из 10 приложений, в которых у тебя точно получится сделать годный креатив.",
    image: Img4,
    link: "3",
  },
  {
    date: "November 16, 2023",
    tags: ["Gambling", "Арбитраж"],
    title: "Кейс: Гемблинг на Колумбию с ROI 150%",
    text: 'Лить гемблинг через Facebook с каждым днем становится только сложнее: показатель ROI падает, появляются частые штормы, а гемблинг приложения живут не очень долго. Что же тогда делать? Выход есть и называется он "Influence трафик"',
    image: Img5,
    link: "4",
  },
  {
    date: "November 16, 2023",
    tags: ["Gambling", "Арбитраж"],
    title: "Интеграция Keitaro x Leadshub",
    text: "Для успешной интеграции Keitaro с Leadshub необходимо следовать четким шагам. Первым этапом является регистрация в личном кабинете с использованием промокода <b>LEADSHUB20</b>, который предоставляет скидку 20% на первую покупку для новых клиентов, действительную в течение трех месяцев.",
    link: "5",
  },
];

const recentPosts: RecentPost[] = [
  {
    image: Img3,
    title: "🔥 Инфлюенс трафик на Грецию: как мы получали трафик из Facebook",
    date: "November 16, 2023",
    link: "2",
  },
  {
    image: Img4,
    title: "Сервисы для создания рекламных креативов на телефоне",
    date: "November 16, 2023",
    link: "3",
  },
  {
    image: Img5,
    title: "Кейс: Гемблинг на Колумбию с ROI 150%",
    date: "November 16, 2023",
    link: "4",
  },
];

export const Blog: React.FC = () => {
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
  }, [selectedTags]);

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
