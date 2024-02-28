import React from "react";
import { ReactComponent as Calendar } from "assets/icons/calendar.svg";

import Img1 from "assets/images/blogs/0/1.jpg";
import Img2 from "assets/images/blogs/0/2.png";
import Img3 from "assets/images/blogs/0/3.png";
import Img4 from "assets/images/blogs/0/4.png";
import Img5 from "assets/images/blogs/0/5.png";
import Img6 from "assets/images/blogs/0/6.jpg";
import { useTranslation } from "react-i18next";

export const Post1: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="heading-1 mb-[89px] text-center lg:mb-40">
        {t("blog:blogPosts.0.title")}
      </h1>
      <div className="flex gap-[30px] lg:gap-12">
        <div className="BlogPost">
          <img className="BlogPost__img-main" src={Img1} />
          <div className="BlogPost__sub-img">
            <div className="BlogPost__tags">
              {(
                t("blog:blogPosts.0.tags", { returnObjects: true }) as any[]
              ).map((tag) => (
                <p key={tag} className="BlogPost__tag">
                  {tag}
                </p>
              ))}
            </div>
            <span className="BlogPost__date">
              <Calendar />
              {t("blog:blogPosts.0.date")}
            </span>
          </div>

          <p className="BlogPost__text">{t("blog:blogPosts.0.text.0")}</p>

          <h2 className="BlogPost__title-2">{t("blog:blogPosts.0.text.1")}</h2>
          <ol className="BlogPost__ordered-list">
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.0.text.2")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.0.text.3")}
            </li>
            <li className="BlogPost__ordered-list-item">
              "{t("blog:blogPosts.0.text.4")}"
            </li>
          </ol>

          <h2 className="BlogPost__title-2">{t("blog:blogPosts.0.text.5")}</h2>
          <ul className="BlogPost__unordered-list">
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.0.text.6")}
            </li>
            <a data-fancybox="gallery" href={Img2}>
              <img className="BlogPost__img" src={Img2} />
            </a>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.0.text.7")}
            </li>
            <a data-fancybox="gallery" href={Img3}>
              <img className="BlogPost__img max-h-[690px]" src={Img3} />
            </a>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.0.text.8")}
            </li>
            <a data-fancybox="gallery" href={Img4}>
              <img className="BlogPost__img max-h-[690px]" src={Img4} />
            </a>
          </ul>

          <h2 className="BlogPost__title-2">{t("blog:blogPosts.0.text.9")}</h2>
          <ol className="BlogPost__ordered-list">
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.0.text.10")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.0.text.11")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.0.text.12")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.0.text.13")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.0.text.14")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.0.text.15")}
            </li>
          </ol>

          <a data-fancybox="gallery" href={Img5}>
            <img className="BlogPost__img max-h-[690px]" src={Img5} />
          </a>

          <p className="BlogPost__text">{t("blog:blogPosts.0.text.16")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.0.text.17")}</p>

          <a data-fancybox="gallery" href={Img6}>
            <img className="BlogPost__img max-h-[690px]" src={Img6} />
          </a>

          <h2 className="BlogPost__title-2">{t("blog:blogPosts.0.text.18")}</h2>
          <p className="BlogPost__text">{t("blog:blogPosts.0.text.19")}</p>
        </div>
      </div>
    </>
  );
};
