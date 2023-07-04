/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";

import { ReactComponent as QuestionTab1 } from "assets/icons/question-tab-1.svg";
import { ReactComponent as QuestionTab2 } from "assets/icons/question-tab-2.svg";
import { ReactComponent as QuestionTab3 } from "assets/icons/question-tab-3.svg";
import { ReactComponent as QuestionTab4 } from "assets/icons/question-tab-4.svg";
import { FAQAccordion, TabPanel, FilterSearch } from "components";
import { twMerge } from "tailwind-merge";

const questionTabs = [
  {
    label: "Начало работы",
    Icon: QuestionTab1,
    questions: [
      {
        heading: "Реферальные выплаты",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Когда поступит выплата?",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Как получить выплату досрочно?",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Какова минимальная сумма для выплаты?",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Куда я могу получить выплату?",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Как изменить реквизиты и метод для выплаты ?",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
    ],
  },
  {
    label: "Офферы",
    Icon: QuestionTab2,
    questions: [
      {
        heading: "Реферальные выплаты 2",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Когда поступит выплата? 2",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Как получить выплату досрочно? 2",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Какова минимальная сумма для выплаты? 2",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Куда я могу получить выплату? 2",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Как изменить реквизиты и метод для выплаты ? 2",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
    ],
  },
  {
    label: "Финансовые вопросы",
    Icon: QuestionTab3,
    questions: [
      {
        heading: "Реферальные выплаты 3",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Когда поступит выплата? 3",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Как получить выплату досрочно? 3",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Какова минимальная сумма для выплаты? 3",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Куда я могу получить выплату? 3",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Как изменить реквизиты и метод для выплаты ? 3",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
    ],
  },
  {
    label: "Запрещенный трафик",
    Icon: QuestionTab4,
    questions: [
      {
        heading: "Реферальные выплаты 4",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Когда поступит выплата? 4",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Как получить выплату досрочно? 4",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Какова минимальная сумма для выплаты? 4",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Куда я могу получить выплату? 4",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Как изменить реквизиты и метод для выплаты ? 4",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц. - Запрещены любые махинации с реферальными выплатами.",
      },
    ],
  },
];

const labelsAndIcons = questionTabs.map(({ label, Icon }) => ({ label, Icon }));

export const FAQ: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <section className="FAQ-container mb-28">
      <h1 className="heading-1 mb-7 text-center">Вопросы и ответы</h1>

      <FilterSearch
        className="mx-auto mb-6 w-full max-w-xl py-2"
        placeholder="Поиск вопроса"
      />

      <p className="sub-heading-4 mb-32 text-center">
        Или выбирите категорию вопроса ниже.
      </p>

      <div className="mb-24 flex items-center justify-between gap-[30px]">
        {labelsAndIcons.map(({ Icon, label }, i) => (
          <div
            key={i}
            className={twMerge(
              "flex h-[234px] w-full max-w-[180px] cursor-pointer flex-col items-center rounded-2xl bg-text-100 pt-7 shadow-100 transition-all",
              tabValue === i && "-translate-y-7 shadow-300"
            )}
            onClick={() => setTabValue(i)}
          >
            <Icon width="130px" height="130px" />
            <h5 className="heading-5 text-center">{label}</h5>
          </div>
        ))}
        <div className="relative h-[234px] w-full max-w-[194px] cursor-pointer overflow-hidden rounded-2xl bg-[#C5C9D4] px-4 pb-6 pt-16 shadow-100">
          <div className="absolute -left-14 -top-5 z-10 h-36  w-36 rounded-full bg-gradient-to-l from-text-100 to-transparent" />
          <div className="relative z-20 flex h-full flex-col justify-between">
            <h5 className="heading-5 text-center">
              Не нашли ответ на свой вопрос?
            </h5>
            <p className="text-[12px] text-text-300">
              Напишите вопрос на почту <span>info@leadshub.pro</span>, и мы
              обязательно поможем!
            </p>
          </div>
        </div>
      </div>

      <div>
        {questionTabs.map(({ label, questions }, i) => (
          <TabPanel value={i} tabValue={tabValue} key={i}>
            <h2 className="heading-2 mb-[70px] text-center">
              {label}
              <span className="ml-[1px] inline-block h-[7px] w-[7px] rounded-full bg-primary-100" />
            </h2>

            <div className="flex flex-col gap-4">
              {questions.map(({ heading, solution }, i) => (
                <FAQAccordion header={heading} content={solution} key={i} />
              ))}
            </div>
          </TabPanel>
        ))}
      </div>
    </section>
  );
};
