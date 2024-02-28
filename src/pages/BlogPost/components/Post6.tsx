import React from "react";
import { ReactComponent as Calendar } from "assets/icons/calendar.svg";

import Img1 from "assets/images/blogs/5/1.png";
import Img2 from "assets/images/blogs/5/2.png";
import Img3 from "assets/images/blogs/5/3.png";
import Img4 from "assets/images/blogs/5/4.png";
import { useTranslation } from "react-i18next";

export const Post6: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="heading-1 mb-[89px] text-center lg:mb-40">
        {t("blog:blogPosts.5.title")}
      </h1>
      <div className="flex gap-[30px] lg:gap-12">
        <div className="BlogPost">
          <p className="BlogPost__text">{t("blog:blogPosts.5.text.0")}</p>

          <div className="BlogPost__sub-img">
            <div className="BlogPost__tags">
              {(
                t("blog:blogPosts.5.tags", { returnObjects: true }) as any[]
              ).map((tag) => (
                <p key={tag} className="BlogPost__tag">
                  {tag}
                </p>
              ))}
            </div>
            <span className="BlogPost__date">
              <Calendar />
              {t("blog:blogPosts.5.date")}
            </span>
          </div>

          <h2 className="BlogPost__title-2">{t("blog:blogPosts.5.text.1")}</h2>

          <p className="BlogPost__text">{t("blog:blogPosts.5.text.2")}</p>

          <p className="BlogPost__text">{t("blog:blogPosts.5.text.3")}</p>

          <a data-fancybox="gallery" href={Img1}>
            <img className="BlogPost__img" src={Img1} />
          </a>

          <h2 className="BlogPost__title-2">{t("blog:blogPosts.5.text.4")}</h2>
          <ul className="BlogPost__unordered-list">
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.5.text.5")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.5.text.6")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.5.text.7")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.5.text.8")}
            </li>
          </ul>

          <h2 className="BlogPost__title-2">{t("blog:blogPosts.5.text.9")}</h2>
          <p className="BlogPost__quote">{t("blog:blogPosts.5.text.10")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.5.text.11")}</p>
          <p className="BlogPost__text">
            <b>{t("blog:blogPosts.5.text.12")}</b>
            {t("blog:blogPosts.5.text.13")}
          </p>
          <p className="BlogPost__quote">{t("blog:blogPosts.5.text.14")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.5.text.15")}</p>
          <p className="BlogPost__quote">{t("blog:blogPosts.5.text.16")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.5.text.17")}</p>
          <p className="BlogPost__text">
            {t("blog:blogPosts.5.text.18")}
            <b>{t("blog:blogPosts.5.text.19")}</b>
            {t("blog:blogPosts.5.text.20")}
            <b>{t("blog:blogPosts.5.text.21")}</b>
            {t("blog:blogPosts.5.text.22")}
            <b>{t("blog:blogPosts.5.text.23")}</b>
            {t("blog:blogPosts.5.text.24")}
            <b>{t("blog:blogPosts.5.text.25")}</b>
            {t("blog:blogPosts.5.text.26")}
          </p>

          <h2 className="BlogPost__title-2">{t("blog:blogPosts.5.text.27")}</h2>
          <p className="BlogPost__text">{t("blog:blogPosts.5.text.28")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.5.text.29")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.5.text.30")}</p>
          <p className="BlogPost__text">
            {t("blog:blogPosts.5.text.31")}
            <b>{t("blog:blogPosts.5.text.32")}</b>
            {t("blog:blogPosts.5.text.33")}
          </p>
          <ol className="BlogPost__ordered-list">
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.5.text.34")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.5.text.35")}
            </li>
          </ol>
          <p className="BlogPost__text">{t("blog:blogPosts.5.text.36")}</p>
          <p className="BlogPost__quote">{t("blog:blogPosts.5.text.37")}</p>

          <h2 className="BlogPost__title-2">{t("blog:blogPosts.5.text.38")}</h2>
          <p className="BlogPost__text">
            {t("blog:blogPosts.5.text.39")}
            <b>{t("blog:blogPosts.5.text.40")}</b>
          </p>
          <a data-fancybox="gallery" href={Img2}>
            <img className="BlogPost__img" src={Img2} />
          </a>
          <p className="BlogPost__text">
            {t("blog:blogPosts.5.text.41")}
            <b>{t("blog:blogPosts.5.text.42")}</b>
            {t("blog:blogPosts.5.text.43")}
            <b>{t("blog:blogPosts.5.text.44")}</b>
            {t("blog:blogPosts.5.text.45")}
          </p>
          <p className="BlogPost__text">
            {t("blog:blogPosts.5.text.46")}
            <b>{t("blog:blogPosts.5.text.47")}</b>
            {t("blog:blogPosts.5.text.48")}
          </p>
          <a data-fancybox="gallery" href={Img3}>
            <img className="BlogPost__img" src={Img3} />
          </a>
          <p className="BlogPost__text">
            {t("blog:blogPosts.5.text.49")}
            <b>{t("blog:blogPosts.5.text.50")}</b>
            {t("blog:blogPosts.5.text.51")}
          </p>
          <a data-fancybox="gallery" href={Img4}>
            <img className="BlogPost__img" src={Img4} />
          </a>

          <p className="BlogPost__text">
            {t("blog:blogPosts.5.text.52")}
            <b>{t("blog:blogPosts.5.text.53")}</b>
            {t("blog:blogPosts.5.text.54")}
            <b>{t("blog:blogPosts.5.text.55")}</b>
            {t("blog:blogPosts.5.text.56")}
          </p>
          <p className="BlogPost__text">{t("blog:blogPosts.5.text.57")}</p>
        </div>
      </div>
    </>
  );
};
