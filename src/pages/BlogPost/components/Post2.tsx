import React from "react";
import { ReactComponent as Calendar } from "assets/icons/calendar.svg";

import Img1 from "assets/images/blogs/1/1.png";
import Img2 from "assets/images/blogs/1/2.png";
import Img3 from "assets/images/blogs/1/3.png";
import { useTranslation } from "react-i18next";

export const Post2: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="heading-1 mb-[89px] text-center lg:mb-40">
        {t("blog:blogPosts.1.title")}
      </h1>
      <div className="flex gap-[30px] lg:gap-12">
        <div className="BlogPost">
          <img className="BlogPost__img-main" src={Img3} />
          <div className="BlogPost__sub-img">
            <div className="BlogPost__tags">
              {(
                t("blog:blogPosts.1.tags", { returnObjects: true }) as any[]
              ).map((tag: string) => (
                <p key={tag} className="BlogPost__tag">
                  {tag}
                </p>
              ))}
            </div>
            <span className="BlogPost__date">
              <Calendar />
              {t("blog:blogPosts.1.date")}
            </span>
          </div>

          <p className="BlogPost__text">{t("blog:blogPosts.1.text.0")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.1.text.1")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.1.text.2")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.1.text.3")}</p>

          <p className="BlogPost__text">{t("blog:blogPosts.1.text.4")}</p>
          <ul className="BlogPost__unordered-list">
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.1.text.5")}
            </li>
            <a data-fancybox="gallery" href={Img1}>
              <img className="BlogPost__img" src={Img1} />
            </a>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.1.text.6")}
            </li>
            <a data-fancybox="gallery" href={Img2}>
              <img className="BlogPost__img" src={Img2} />
            </a>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.1.text.7")}
            </li>
            <a data-fancybox="gallery" href={Img3}>
              <img className="BlogPost__img" src={Img3} />
            </a>
          </ul>

          <h2 className="BlogPost__title-2">{t("blog:blogPosts.1.text.8")}</h2>
          <p className="BlogPost__text">{t("blog:blogPosts.1.text.9")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.1.text.10")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.1.text.11")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.1.text.12")}</p>

          <a data-fancybox="gallery" href={Img2}>
            <img className="BlogPost__img" src={Img2} />
          </a>

          <h2 className="BlogPost__title-2">{t("blog:blogPosts.1.text.13")}</h2>
          <p className="BlogPost__text">{t("blog:blogPosts.1.text.14")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.1.text.15")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.1.text.16")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.1.text.17")}</p>
        </div>
      </div>
    </>
  );
};
