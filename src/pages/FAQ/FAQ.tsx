/* eslint-disable react-refresh/only-export-components */
import React, { useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { twMerge } from "tailwind-merge";

import { FAQAccordion, TabPanel, FilterSearch } from "components";

import { ReactComponent as QuestionTab1 } from "assets/icons/question-tab-1.svg";
import { ReactComponent as QuestionTab2 } from "assets/icons/question-tab-2.svg";
import { ReactComponent as QuestionTab3 } from "assets/icons/question-tab-3.svg";
import { ReactComponent as QuestionTab4 } from "assets/icons/question-tab-4.svg";

const questionTabs = [
  {
    label: "Начало работы",
    Icon: QuestionTab1,
    questions: [
      {
        heading: "Как мне зарегистрироваться?",
        solution:
          'На главной странице сайта есть кнопка "Регистрация" по нажатию на неё открывается форма. При заполении как можно подробнее расскажите о своем опыте и внимательно заполняйте пункты. Заполненная вами информация повлияет на дальнейщую работу и предложения от менеджера.',
      },
      {
        heading: "Как получить персонального менеджера?",
        solution:
          "После регистрации, в течении пары часов менеджер сам отпишет вам по указанным контактам.",
      },
    ],
  },
  {
    label: "Офферы",
    Icon: QuestionTab2,
    questions: [
      {
        heading: "Как подключить оффер?",
        solution:
          'Офферы доступны во вкладке "Офферы", где вы лично сможете со всем ознакомится и выбрать наиболее подходящее предложение, после чего оставить тикет на подключение. Если же вы не знаете на что лучше пустить трафик, обратитесь к своему личному менеджеру. Мы всегда подскажем, куда запустить трафик с максимальной выгодой для вас.',
      },
      {
        heading: "Как часто обновляется статистика?",
        solution:
          "Статистика по кликам обновляется в режиме реального времени. Конверсия может отображаться как сразу, так и с некоторой задержкой (от 15 минут до суток).",
      },
      {
        heading: "Что такое CPA, CPL, Revshare?",
        solution:
          "CPA — Это разовая выплата за целевое действие - чаще всего это: покупка или депозит.\n\nCPL - Опять же разовая оплата, но уже за регистрацию.\n\nRevshare — это модель оплаты, при которой вы получаете не фиксированную сумму за привлеченного лида, а процент от дохода компании в течение всего времени работы с ним.",
      },
      {
        heading: "Что такое Hold ?",
        solution:
          "Холд - период, необходимый рекламодателю для оценки качества конверсий и для анализа соответствия траффика указанным в оффере KPI.",
      },
      {
        heading: "Что такое KPI ?",
        solution:
          "KPI (Key Performance Indicators, ключевые показатели эффективности) — это требования рекламодателя к трафику. Условия, при которых трафик будет оплачен, прописаны в каждом оффере. Больше информации о KPI вы найдете в статье.",
      },
      {
        heading: 'Что такое "кап" (Тестовая капа) ?',
        solution:
          "Когда вы впервые начинаете работать с каким-либо оффером, вам необходимо пройти квалификацию, чтобы ваш трафик был признан рекламодателем качественным. Для этого нужно в тестовом режиме привести на оффер ограниченное количество конверсий — их называют тестовым лимитом.",
      },
      {
        heading: "Как мне получить ставку выше?",
        solution:
          "Все ставки пересматриваются сразу после тестового пролива. Так же, не стоит забывать, что высокий объем трафика (при хорошем качестве) является главным основанием для повышения ставки.",
      },
      {
        heading: "Как оценивается качество трафика?",
        solution:
          "Рекламодатель оценивает активность трафика на площадке, повторные визиты, CR из регистраций в оплачиваемое действие, повторные конверсии, время на посадочных страницах, отказы и множество других показателей. Они составляют KPI оффера.",
      },
      {
        heading: "Когда проходит сверка от рекламодателя?",
        solution:
          "Сверки у разных рекламодателей происходят с разным графиком: еженедельно, два раза в месяц или ежемесячно. Подробнее можно уточнить у вашего персонального менеджера или команды поддержки.",
      },
    ],
  },
  {
    label: "Финансовые вопросы",
    Icon: QuestionTab3,
    questions: [
      {
        heading: "Реферальные выплаты",
        solution:
          "Вы можете приводить неограниченное кол-во рефералов. Выплаты получаются раз в месяц.\n- Запрещены любые махинации с реферальными выплатами.",
      },
      {
        heading: "Когда поступит выплата?",
        solution:
          "С этим вопросом вам стоит обратиться к личному менеджеру, т.к по всем офферам сроки выплат разные.",
      },
      {
        heading: "Как получить выплату досрочно?",
        solution:
          "Для этого нужно: быть авторизированным в нашем боте, пройти тестовый период, иметь минимум 2 выплаты.",
      },
      {
        heading: "Какова минимальная сумма для выплаты?",
        solution:
          "Сейчас минимальной суммы для выплаты в нашей CPA-Сети не установлено, но не стоит забывать, что бывают рекламодатели, которые выплачивают от определенного кол-ва лидов (2-5 штук).",
      },
      {
        heading: "Куда я могу получить выплату?",
        solution:
          "Актуальный список платежных реквизитов от 10.08.2023:\n\n• Счет Capitalist - Без комиссии\n• Qiwi 3%\n• ЮMoney 3%\n• Банковские карты РФ (без комиссии, по курсу обменника)\n• Банковские карты Украины, UAH 2%\n• Банковские карты Казахстана, KZT 3% + 0.8 USD\n• USDT trc20 (без комиссии)",
      },
      {
        heading: "Как изменить реквизиты и метод для выплаты ?",
        solution:
          '1. В личном кабинете есть вкладка "Платежканя система", там устанавливаете нужные для вас реквизиты.\n2. Попросить личного менеджера установить нужный реквизит.',
      },
    ],
  },
  {
    label: "Запрещенный трафик",
    Icon: QuestionTab4,
    questions: [
      {
        heading: 'Что подразумевается под "запрещенным трафиком" ?',
        solution:
          "Запрещенный трафик - Это трафик, который не будет оплачивать рекламодатель. Списко запрещенного трафика:\n\n— Фрод, боты и мотивированный трафик: — с сервисов размещения заданий (системы активной рекламы, буксы).\n— Cashback-трафик: запрещается обещать пользователям деньги/другое вознаграждение за счет выплаты вебмастера.\n— Боты, мультиаккаунты, любая накрутка пользователей.",
      },
      {
        heading: "На каких основаниях трафик признается фродовым ?",
        solution:
          "На стороне рекламодателей проводится проверка трафика, где оценивают множество поведенческих факторов и окупаемость. Среди этих показателей: активность на площадке, повторные визиты, CR из регистраций в оплачиваемое действие, повторные конверсии, время на посадочных страницах, отказы и т.д.\n\nНекоторые из параметров (KPI) рекламодатели не раскрывают, чтобы избежать накруток конверсий с запрещенных ресурсов.",
      },
      {
        heading:
          "Что происходит, если веб-мастер отлил фрод или запрещенный трафик ?",
        solution:
          "— Весь налитый трафик не оплачивается - признается фродовым.\n— Аккаунт веб-мастера блокируется/удаляется.\n— Дальнейшая работа с Leadshub признается невозможной.",
      },
    ],
  },
];

const labelsAndIcons = questionTabs.map(({ label, Icon }) => ({ label, Icon }));

export const FAQ: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [tabValue, setTabValue] = useState(0);

  const handleTabClick = (i: number) => {
    setTabValue(i);

    ref.current?.scrollIntoView();
  };

  return (
    <section className="FAQ-container mb-28">
      <Fade cascade direction="up" duration={500} damping={0.3} triggerOnce>
        <h1 className="heading-1 mb-7 text-center">Вопросы и ответы</h1>

        <FilterSearch
          className="mx-auto mb-6 w-full max-w-xl py-2"
          placeholder="Поиск вопроса"
        />

        <p className="sub-heading-4 mb-32 text-center">
          Или выбирите категорию вопроса ниже.
        </p>
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
            <Icon className="h-[130px] w-full max-w-[160px] 3xl:h-[220px]" />
            <h5 className="heading-5 text-center">{label}</h5>
          </div>
        ))}
        <div className="relative col-span-full h-full cursor-pointer overflow-hidden rounded-2xl bg-[#C5C9D4] px-4 pb-6 pt-5 shadow-100 md:col-span-1 md:pt-14">
          <div className="absolute -left-14 -top-5 z-10 h-36 w-36 rounded-full bg-gradient-to-l from-text-100 to-transparent" />
          <div className="relative z-20 h-full">
            <h5 className="heading-5 mb-2 md:mb-[37px]">
              Не нашли ответ на свой вопрос?
            </h5>
            <p className="text-xs text-text-300 3xl:text-lg">
              Напишите вопрос на почту{" "}
              <span className="underline">info@leadshub.pro</span>, и мы
              обязательно поможем!
            </p>
          </div>
        </div>
      </div>

      <div ref={ref} className="scroll-mt-24">
        {questionTabs.map(({ label, questions }, i) => (
          <TabPanel value={i} tabValue={tabValue} key={i}>
            <Fade direction="up" duration={500} triggerOnce>
              <h2 className="heading-2 mb-[70px] text-center">
                {label}
                <span className="ml-[1px] inline-block h-[7px] w-[7px] rounded-full bg-primary-100" />
              </h2>
            </Fade>
            <div className="flex flex-col gap-4">
              <Fade
                cascade
                direction="up"
                duration={500}
                damping={0.3}
                triggerOnce
              >
                {questions.map(({ heading, solution }, i) => (
                  <FAQAccordion header={heading} content={solution} key={i} />
                ))}
              </Fade>
            </div>
          </TabPanel>
        ))}
      </div>
    </section>
  );
};
