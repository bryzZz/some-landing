import React, { useMemo, useState, useTransition } from "react";
import { twMerge } from "tailwind-merge";
import { Fade } from "react-awesome-reveal";
import { CategoryFilter, FilterSearch, ShopPreviewMini } from "components";

import { bonuses } from "constants/index";
import { ReactComponent as ExternalLink } from "assets/icons/external-link.svg";

const allCategories = ["Скидки", "Кэшбэки", "Подарки"];

export const Bonuses: React.FC = () => {
  const [categories, setCategories] = useState(() =>
    allCategories.map((label) => ({ label, checked: false }))
  );
  const [, startTransition] = useTransition();
  const [search, setSearch] = useState("");

  const handleCategoryClick = (label: string) => {
    setCategories((p) =>
      p.map((opt) => {
        if (opt.label !== label) return opt;

        return {
          label: opt.label,
          checked: !opt.checked,
        };
      })
    );
  };

  const handleChangeSearch = (value: string) => {
    startTransition(() => {
      setSearch(value);
    });
  };

  const filteredBonuses = useMemo(() => {
    return bonuses
      .filter((bonus) => {
        if (!categories.some((category) => category.checked)) return true;

        for (const category of categories) {
          if (category.checked && category.label === bonus.category)
            return true;
        }

        return false;
      })
      .filter((bonus) =>
        bonus.text.toLowerCase().trim().includes(search.toLowerCase().trim())
      );
  }, [categories, search]);

  return (
    <>
      <section className="base-container mb-10 md:mb-20 lg:mb-40">
        <Fade direction="up" duration={500} triggerOnce>
          <h1 className="heading-1 mb-28 text-center lg:mb-40">
            Скидки и бонусы
          </h1>
        </Fade>

        <div className="mb-8 flex flex-wrap-reverse items-center justify-between gap-2">
          <CategoryFilter
            categories={categories}
            onCategoryClick={handleCategoryClick}
            position="bottom left"
            // newCategoryCount={1}
          />

          <FilterSearch
            className="w-full rounded-lg border-none shadow-[0px_2px_10px_0px_rgba(0,0,0,0.08)] sm:w-auto"
            inputClassName="text-sm"
            placeholder="Поиск"
            value={search}
            onChange={handleChangeSearch}
          />
        </div>

        <div className="flex flex-col gap-[30px]">
          <Fade cascade direction="up" duration={100} damping={0.1} triggerOnce>
            {filteredBonuses.map(
              (
                {
                  img,
                  text,
                  bonusLeft,
                  bonusRight,
                  promocodeText,
                  promocode,
                  link,
                },
                i
              ) => (
                <div
                  className="flex flex-col gap-4 rounded-2xl bg-text-100 p-4 shadow-100 md:flex-row md:items-center md:gap-0 lg:p-7"
                  key={i}
                >
                  <img
                    className="mr-6 w-full max-w-[180px] md:max-w-[120px] lg:mr-16 3xl:max-w-[160px]"
                    src={img}
                  />
                  <p className="sub-heading-3 mr-2 w-full max-w-[350px] shrink-0 font-semibold lg:mr-7 lg:max-w-[418px] 3xl:max-w-[400px]">
                    {text}
                  </p>
                  <div className="mr-3">
                    <p className="mb-1 text-xl font-extrabold uppercase text-text-400 lg:mb-2 lg:text-2xl 3xl:text-3xl">
                      <span
                        className={twMerge(
                          bonusLeft.highlight && "text-primary-100"
                        )}
                      >
                        {bonusLeft.value}
                      </span>{" "}
                      <span
                        className={twMerge(
                          bonusRight.highlight && "text-primary-100"
                        )}
                      >
                        {bonusRight.value}
                      </span>
                    </p>
                    <p className="text-sm font-semibold text-text-400 lg:text-base 3xl:text-lg">
                      {promocodeText}{" "}
                      <span className="font-bold">{promocode}</span>
                    </p>
                  </div>
                  <a
                    className="flex items-center gap-1 text-base font-extrabold text-[#3452FF] md:ml-auto 3xl:text-lg"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Перейти
                    <ExternalLink />
                  </a>
                </div>
              )
            )}
          </Fade>
        </div>
      </section>

      <ShopPreviewMini />
    </>
  );
};
