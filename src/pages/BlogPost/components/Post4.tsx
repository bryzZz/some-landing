import React from "react";
import { ReactComponent as Calendar } from "assets/icons/calendar.svg";

import Img1 from "assets/images/blogs/3/1.png";
import Img2 from "assets/images/blogs/3/2.jpeg";
import Img3 from "assets/images/blogs/3/3.png";
import Img4 from "assets/images/blogs/3/4.png";
import { useTranslation } from "react-i18next";

export const Post4: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="heading-1 mb-[89px] text-center lg:mb-40">
        {t("blog:blogPosts.3.title")}
      </h1>
      <div className="flex gap-[30px] lg:gap-12">
        <div className="BlogPost">
          <img className="BlogPost__img-main" src={Img1} />
          <div className="BlogPost__sub-img">
            <div className="BlogPost__tags">
              {(
                t("blog:blogPosts.3.tags", { returnObjects: true }) as any[]
              ).map((tag) => (
                <p key={tag} className="BlogPost__tag">
                  {tag}
                </p>
              ))}
            </div>
            <span className="BlogPost__date">
              <Calendar />
              {t("blog:blogPosts.3.date")}
            </span>
          </div>

          <p className="BlogPost__text">{t("blog:blogPosts.3.text.0")}</p>

          <h2 className="BlogPost__title-2">{t("blog:blogPosts.3.text.1")}</h2>

          <a data-fancybox="gallery" href={Img2}>
            <img className="BlogPost__img" src={Img2} />
          </a>

          <ol className="BlogPost__ordered-list">
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.3.text.2")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.3.text.3")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.3.text.4")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.3.text.5")}
            </li>
            <p className="BlogPost__text">{t("blog:blogPosts.3.text.6")}</p>
            <p className="BlogPost__text">{t("blog:blogPosts.3.text.7")}</p>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.3.text.8")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.3.text.9")}
            </li>
          </ol>

          <h2 className="BlogPost__title-2">{t("blog:blogPosts.3.text.10")}</h2>

          <a data-fancybox="gallery" href={Img3}>
            <img className="BlogPost__img" src={Img3} />
          </a>

          <ol className="BlogPost__ordered-list">
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.3.text.11")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.3.text.12")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.3.text.13")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.3.text.14")}
            </li>
          </ol>

          <a data-fancybox="gallery" href={Img4}>
            <img className="BlogPost__img" src={Img4} />
          </a>
        </div>
      </div>
    </>
  );
};
