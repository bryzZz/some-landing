import React from "react";
import { ReactComponent as Calendar } from "assets/icons/calendar.svg";

import Img1 from "assets/images/blogs/4/1.jpg";
import Img2 from "assets/images/blogs/4/2.png";
import Img3 from "assets/images/blogs/4/3.png";
import Img4 from "assets/images/blogs/4/4.png";
import Img5 from "assets/images/blogs/4/5.png";
import Img6 from "assets/images/blogs/4/6.png";
import Img7 from "assets/images/blogs/4/7.png";
import Img8 from "assets/images/blogs/4/8.png";
import { useTranslation } from "react-i18next";

export const Post5: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="heading-1 mb-[89px] text-center lg:mb-40">
        {t("blog:blogPosts.4.title")}
      </h1>
      <div className="flex gap-[30px] lg:gap-12">
        <div className="BlogPost">
          <p className="BlogPost__text">{t("blog:blogPosts.4.text.0")}</p>

          <img className="BlogPost__img-main" src={Img1} />
          <div className="BlogPost__sub-img">
            <div className="BlogPost__tags">
              {(
                t("blog:blogPosts.4.tags", { returnObjects: true }) as any[]
              ).map((tag) => (
                <p key={tag} className="BlogPost__tag">
                  {tag}
                </p>
              ))}
            </div>
            <span className="BlogPost__date">
              <Calendar />
              {t("blog:blogPosts.4.date")}
            </span>
          </div>

          <p className="BlogPost__text">{t("blog:blogPosts.4.text.1")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.4.text.2")}</p>
          <ul className="BlogPost__unordered-list">
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.4.text.3")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.4.text.4")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.4.text.5")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.4.text.6")}
            </li>
          </ul>

          <p className="BlogPost__text">{t("blog:blogPosts.4.text.7")}</p>

          <p className="BlogPost__text">{t("blog:blogPosts.4.text.8")}</p>

          <h2 className="BlogPost__title-2">{t("blog:blogPosts.4.text.9")}</h2>
          <p className="BlogPost__text">{t("blog:blogPosts.4.text.10")}</p>
          <a data-fancybox="gallery" href={Img2}>
            <img className="BlogPost__img" src={Img2} />
          </a>

          <p className="BlogPost__text">{t("blog:blogPosts.4.text.11")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.4.text.12")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.4.text.13")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.4.text.14")}</p>

          <ul className="BlogPost__unordered-list">
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.4.text.15")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.4.text.16")}
            </li>
            <li className="BlogPost__ordered-list-item">
              {t("blog:blogPosts.4.text.17")}
            </li>
          </ul>

          <p className="BlogPost__text">{t("blog:blogPosts.4.text.18")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.4.text.19")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.4.text.20")}</p>

          <a data-fancybox="gallery" href={Img3}>
            <img className="BlogPost__img" src={Img3} />
          </a>

          <p className="BlogPost__text">{t("blog:blogPosts.4.text.21")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.4.text.22")}</p>

          <a data-fancybox="gallery" href={Img4}>
            <img className="BlogPost__img" src={Img4} />
          </a>

          <p className="BlogPost__text">{t("blog:blogPosts.4.text.23")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.4.text.24")}</p>

          <a data-fancybox="gallery" href={Img5}>
            <img className="BlogPost__img" src={Img5} />
          </a>

          <p className="BlogPost__text">{t("blog:blogPosts.4.text.25")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.4.text.26")}</p>

          <a data-fancybox="gallery" href={Img6}>
            <img className="BlogPost__img" src={Img6} />
          </a>
          <a data-fancybox="gallery" href={Img7}>
            <img className="BlogPost__img" src={Img7} />
          </a>
          <a data-fancybox="gallery" href={Img8}>
            <img className="BlogPost__img" src={Img8} />
          </a>

          <p className="BlogPost__text">{t("blog:blogPosts.4.text.27")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.4.text.28")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.4.text.29")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.4.text.30")}</p>
        </div>
      </div>
    </>
  );
};
