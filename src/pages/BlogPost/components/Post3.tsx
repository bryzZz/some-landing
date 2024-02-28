import React from "react";
import { ReactComponent as Calendar } from "assets/icons/calendar.svg";

import Img1 from "assets/images/blogs/2/1.jpg";
import Img2 from "assets/images/blogs/2/2.png";
import Img3 from "assets/images/blogs/2/3.png";
import { useTranslation } from "react-i18next";

export const Post3: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="heading-1 mb-[89px] text-center lg:mb-40">
        {t("blog:blogPosts.2.title")}
      </h1>
      <div className="flex gap-[30px] lg:gap-12">
        <div className="BlogPost">
          <p className="BlogPost__text">{t("blog:blogPosts.2.text.0")}</p>

          <img className="BlogPost__img-main" src={Img1} />
          <div className="BlogPost__sub-img">
            <div className="BlogPost__tags">
              {(
                t("blog:blogPosts.2.tags", { returnObjects: true }) as any[]
              ).map((tag: string) => (
                <p key={tag} className="BlogPost__tag">
                  {tag}
                </p>
              ))}
            </div>
            <span className="BlogPost__date">
              <Calendar />
              {t("blog:blogPosts.2.date")}
            </span>
          </div>

          <h2 className="BlogPost__title-2">{t("blog:blogPosts.2.text.1")}</h2>
          <p className="BlogPost__text">{t("blog:blogPosts.2.text.2")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.2.text.3")}</p>

          <h2 className="BlogPost__title-2">{t("blog:blogPosts.2.text.4")}</h2>
          <p className="BlogPost__text">{t("blog:blogPosts.2.text.5")}</p>
          <a data-fancybox="gallery" href={Img2}>
            <img className="BlogPost__img" src={Img2} />
          </a>
          <a data-fancybox="gallery" href={Img3}>
            <img className="BlogPost__img" src={Img3} />
          </a>
          <p className="BlogPost__text">{t("blog:blogPosts.2.text.6")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.2.text.7")}</p>

          <h2 className="BlogPost__title-2">{t("blog:blogPosts.2.text.8")}</h2>
          <p className="BlogPost__text">{t("blog:blogPosts.2.text.9")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.2.text.10")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.2.text.11")}</p>
          <p className="BlogPost__text">{t("blog:blogPosts.2.text.12")}</p>

          <h2 className="BlogPost__title-2">{t("blog:blogPosts.2.text.13")}</h2>
          <p className="BlogPost__text">{t("blog:blogPosts.2.text.14")}</p>
        </div>
      </div>
    </>
  );
};
