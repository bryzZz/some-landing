/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useMemo, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { twMerge } from "tailwind-merge";

import { TabPanel, FilterSearch } from "components";

import { ReactComponent as QuestionTab1 } from "assets/icons/question-tab-1.svg";
import { ReactComponent as QuestionTab2 } from "assets/icons/question-tab-2.svg";
import { ReactComponent as QuestionTab3 } from "assets/icons/question-tab-3.svg";
import { ReactComponent as QuestionTab4 } from "assets/icons/question-tab-4.svg";
import { FAQSection } from "components/FAQSection";
import { ModalSearch } from "components/ModalSearch";
import { useTranslation } from "react-i18next";

// я знаю что это говнокод....
export const FAQ: React.FC = () => {
  const { t } = useTranslation();

  const [search, setSearch] = useState("");

  const [currentSearchedIndex, setCurrentSearchedIndex] = useState(0);
  const [currentSearchedQuestion, setCurrentSearchedQuestion] = useState(0);
  const [maxSearchedIndex, setMaxSearchedIndex] = useState(0);
  const [currentHighlighted, setCurrentHighlighted] = useState<Element | null>(
    null
  );
  const [isSearching, setIsSearching] = useState(false);
  const [trigger, setTrigger] = useState(0);

  const [tabValue, setTabValue] = useState(0);

  const [questionTabs, labelsAndIcons] = useMemo(() => {
    const questionTabsText = t("faq:questionTabs", {
      returnObjects: true,
    }) as any[];
    const questionTabs = [
      {
        Icon: QuestionTab1,
        ...questionTabsText[0],
      },
      {
        Icon: QuestionTab2,
        ...questionTabsText[1],
      },
      {
        Icon: QuestionTab3,
        ...questionTabsText[2],
      },
      {
        Icon: QuestionTab4,
        ...questionTabsText[3],
      },
    ];

    const labelsAndIcons = questionTabs.map(({ label, Icon }) => ({
      label,
      Icon,
    }));

    return [questionTabs, labelsAndIcons];
  }, [t]);

  const handleTabClick = (i: number) => {
    setTabValue(i);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const value = (e.target as any)?.[0]?.value;

    if (typeof value !== "string") return;

    setSearch(value);
    setIsSearching(!!value);
    setCurrentSearchedIndex(0);

    setTrigger((p) => p + 1);
  };

  const highlightedData = useMemo(() => {
    let i = 0;

    const result = questionTabs.map(({ questions, ...other }, j) => {
      return {
        ...other,
        questions: (questions as any[]).map((question, k) => {
          if (!isSearching || !search) return question;

          const pattern = new RegExp(search, "gi");

          const replacer = (match: string) =>
            `<span data-index="${i++}" data-group="${j}" data-question="${k}" class='highlight'>${match}</span>`;

          return {
            heading: question.heading.replaceAll(pattern, replacer),
            solution: question.solution.replaceAll(pattern, replacer),
          };
        }),
      };
    });

    setMaxSearchedIndex(i - 1);

    return result;
  }, [isSearching, questionTabs, search]);

  const hadleClickNext = () => {
    setCurrentSearchedIndex((p) => Math.min(p + 1, maxSearchedIndex));
  };
  const hadleClickPrev = () => {
    setCurrentSearchedIndex((p) => Math.max(p - 1, 0));
  };

  useEffect(() => {
    if (!isSearching) return;

    const currentHighlighted = document.querySelector(
      `span.highlight[data-index="${currentSearchedIndex}"]`
    );
    const tabIndex = (currentHighlighted as any)?.dataset?.group;
    const questionIndex = (currentHighlighted as any)?.dataset?.question;

    if (!currentHighlighted || !tabIndex || !questionIndex) return;

    document
      .querySelectorAll("span.highlight")
      .forEach((s) => s.classList.remove("current"));
    currentHighlighted.classList.add("current");

    setTabValue(Number(tabIndex));
    setCurrentSearchedQuestion(Number(questionIndex));
    setCurrentHighlighted(currentHighlighted);
  }, [currentSearchedIndex, isSearching, trigger]);

  useEffect(() => {
    if (!currentHighlighted) return;

    currentHighlighted?.scrollIntoView({ block: "center" });
  }, [currentHighlighted]);

  return (
    <section className="FAQ-container mb-28">
      <Fade cascade direction="up" duration={500} damping={0.3} triggerOnce>
        <h1 className="heading-1 mb-7 text-center">{t("faq:title")}</h1>

        <form onSubmit={handleSubmit}>
          <FilterSearch
            className="mx-auto mb-6 w-full max-w-xl py-2"
            placeholder={t("faq:search")}
          />
        </form>

        <p className="sub-heading-4 mb-32 text-center">{t("faq:subTitle")}</p>
      </Fade>

      <div className="mb-24 grid grid-cols-2 items-center justify-center gap-4 md:grid-cols-5 md:grid-rows-1 md:justify-between lg:gap-[30px]">
        {labelsAndIcons.map(({ Icon, label }, i) => (
          <div
            key={i}
            className={twMerge(
              "flex cursor-pointer flex-col items-center rounded-2xl bg-text-100 px-3 py-7  shadow-100 transition-all",
              tabValue === i && "-translate-y-7 shadow-300"
            )}
            onClick={() => handleTabClick(i)}
          >
            <Icon className="h-[130px] w-full max-w-[160px] 3xl:h-[176px]" />
            <h5 className="heading-5 text-center">{label}</h5>
          </div>
        ))}
        <div
          className="relative col-span-full h-full cursor-pointer overflow-hidden rounded-2xl bg-[#C5C9D4] px-4 pb-6 pt-5 shadow-100 md:col-span-1 xl:pt-14"
          onClick={() => {
            const a = document.createElement("a");
            a.setAttribute("href", "mailto:info@leadshub.pro");
            a.setAttribute("target", "_blank");
            a.click();
            a.remove();
          }}
        >
          <div className="absolute -left-14 -top-5 z-10 h-36 w-36 rounded-full bg-gradient-to-l from-text-100 to-transparent" />
          <div className="relative z-20 h-full">
            <h5 className="heading-5 mb-2 md:mb-[37px]">
              {t("faq:didntFoundAnswer.title")}
            </h5>
            <p className="text-xs text-text-300 3xl:text-base">
              {t("faq:didntFoundAnswer.mail1")}
              <span className="underline">info@leadshub.pro</span>
              {t("faq:didntFoundAnswer.mail2")}
            </p>
          </div>
        </div>
      </div>

      <div>
        {highlightedData.map(({ label, questions }, i) => (
          <TabPanel value={i} tabValue={tabValue} key={i}>
            <FAQSection
              label={label}
              questions={questions}
              currentGroup={i === tabValue}
              currentQuestion={currentSearchedQuestion}
              triggerReset={trigger}
            />
          </TabPanel>
        ))}
      </div>

      <ModalSearch
        isOpen={isSearching}
        onRequestClose={() => setIsSearching(false)}
        onClickNext={hadleClickNext}
        onClickPrev={hadleClickPrev}
      />
    </section>
  );
};
