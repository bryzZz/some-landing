import EPN from "assets/images/bonuses/epn.svg";
import FLEX_CARD from "assets/images/bonuses/_Flex_Card__.png";
import Cloaking from "assets/images/bonuses/Cloaking_Logo_new.svg";
import SMS from "assets/images/bonuses/sms-activate.svg";
import PWA from "assets/images/bonuses/pwa.svg";
import Dolphin from "assets/images/bonuses/dolphin.svg";
import Adspect from "assets/images/bonuses/adspect.png";
import Adspy from "assets/images/bonuses/adspy.png";
import Fbtool from "assets/images/bonuses/fbtool.png";
import Iproxy from "assets/images/bonuses/Iproxy.png";
import Keitaro from "assets/images/bonuses/keitaro.png";
import Cloakit from "assets/images/bonuses/cloakit.png";
import Telemetr from "assets/images/bonuses/telemetr.png";
import Adlover from "assets/images/bonuses/adlover.png";
import Adheart from "assets/images/bonuses/adheart.png";

import T1 from "assets/images/testimonials/partnerkin.svg";
import T2 from "assets/images/testimonials/pro-traffic.svg";
import T3 from "assets/images/testimonials/mostbet.svg";
import T4 from "assets/images/testimonials/welcome-partners.svg";
import T5 from "assets/images/testimonials/vpartners.svg";
import T6 from "assets/images/testimonials/royalpartners.svg";
import ReviewAvatar from "assets/images/review-avatar.png";

export const BASE_PATH = import.meta.env.BASE_URL;

export const bonuses = [
  {
    img: EPN,
    text: "Трастовые виртуальные карты для арбитража и онлайн покупок",
    bonusLeft: {
      value: "∞",
      highlight: true,
    },
    bonusRight: {
      value: "карт",
    },
    promocodeText: "без минимального пополнения По промокоду:",
    promocode: "EPN",
    link: "https://epn.net/",
  },
  {
    img: FLEX_CARD,
    text: "Новый сервис по виртуальным банковским картам",
    bonusLeft: {
      value: "100",
      highlight: true,
    },
    bonusRight: {
      value: "карт",
    },
    promocodeText: "бесплатно (свежереги). По промокоду:",
    promocode: "LEADSHUB",
    link: "/",
  },
  {
    img: Cloaking,
    text: "Облачный сервис клоакинга. Подходит под все источники.",
    bonusLeft: {
      value: "скидка",
    },
    bonusRight: {
      value: "30%",
      highlight: true,
    },
    promocodeText: "на любой тариф. По промокоду:",
    promocode: "LEADSHUB30",
    link: "https://cloaking.house/?utm_source=leadshub",
  },
  {
    img: SMS,
    text: "Лучший сервис виртуальных номеров для регистрации аккаунтов",
    bonusLeft: {
      value: "КЭШБЭК",
    },
    bonusRight: {
      value: "10%",
      highlight: true,
    },
    promocodeText: "от первого пополнения и приятный бонус. По промокоду:",
    promocode: "LEADSHUB",
    link: "https://sms-activate.org/?ref=2374140",
  },
  {
    img: PWA,
    text: "Многофункциональный конструктор PWA-приложений под любую вертикаль",
    bonusLeft: {
      value: "скидка",
    },
    bonusRight: {
      value: "15%",
      highlight: true,
    },
    promocodeText: "на подписки. По промокоду:",
    promocode: "PWALHUB",
    link: "https://pwa.market/",
  },
  {
    img: Dolphin,
    text: "Сервис для управления аккаунтами и автозалива кампании в фейсбук в одном окне.",
    bonusLeft: {
      value: "скидка",
    },
    bonusRight: {
      value: "20%",
      highlight: true,
    },
    promocodeText: "на первую оплату. По промокоду:",
    promocode: "LEADSHUB",
    link: "https://dolphin.ru.com/ru/",
  },
  {
    img: Adspect,
    text: "Клоакинг. Фильтр ботов. CPA-трекер. Все в одном!",
    bonusLeft: {
      value: "СКИДКА",
    },
    bonusRight: {
      value: "15%",
      highlight: true,
    },
    promocodeText: "на любой тариф. По промокоду:",
    promocode: "LEADSHUB",
    link: "https://www.adspect.ai/ru/",
  },
  {
    img: Adspy,
    text: "Отличный SPY-Сервис",
    bonusLeft: {
      value: "скидка",
    },
    bonusRight: {
      value: "50%",
      highlight: true,
    },
    promocodeText: "+ 1000 просмотров и 100 поисков. По промокоду:",
    promocode: "LEADSHUB",
    link: "https://app.adspy.com/ads",
  },
  {
    img: Fbtool,
    text: "Инструмент для работы с рекламой",
    bonusLeft: {
      value: "скидка",
    },
    bonusRight: {
      value: "15%",
      highlight: true,
    },
    promocodeText: "на первую покупку. По промокоду:",
    promocode: "LEADSHUB15",
    link: "https://fbtool.pro/",
  },
  {
    img: Iproxy,
    text: "Личные мобильные прокси",
    bonusLeft: {
      value: "скидка",
    },
    bonusRight: {
      value: "15%",
      highlight: true,
    },
    promocodeText: "на bigdaddy. По промокоду:",
    promocode: "LEADSHUB15",
    link: "https://iproxy.online/",
  },
  {
    img: Keitaro,
    text: "Трекинг-платформа для арбитража",
    bonusLeft: {
      value: "скидка",
    },
    bonusRight: {
      value: "20%",
      highlight: true,
    },
    promocodeText:
      "на покупку для нового клиента сроком до 3х месяцев. По промокоду:",
    promocode: "LEADSHUB20",
    link: "https://keitaro.io/en/",
  },
  {
    img: Cloakit,
    text: "Клоакинг сервис для Facebook",
    bonusLeft: {
      value: "скидка",
    },
    bonusRight: {
      value: "40%",
      highlight: true,
    },
    promocodeText: "на первую оплату. По промокоду:",
    promocode: "LEADSHUB",
    link: "https://cloakit.pro/?ref=LEADSHUB",
  },
  {
    img: Telemetr,
    text: "Аналитика телеграм каналов",
    bonusLeft: {
      value: "скидка",
    },
    bonusRight: {
      value: "15%",
      highlight: true,
    },
    promocodeText: "на первую оплату. По промокоду:",
    promocode: "LEADSHUB",
    link: "https://telemetr.me/",
  },
  {
    img: Adlover,
    text: "Аналитика рекламы в Instagram",
    bonusLeft: {
      value: "скидка",
    },
    bonusRight: {
      value: "15%",
      highlight: true,
    },
    promocodeText: "на первую оплату. По промокоду:",
    promocode: "LEADSHUB",
    link: "https://adlover.ru/",
  },
  {
    img: Adheart,
    text: "Аналитика рекламы в Facebook",
    bonusLeft: {
      value: "скидка",
    },
    bonusRight: {
      value: "15%",
      highlight: true,
    },
    promocodeText: "на первую оплату. По промокоду:",
    promocode: "LEADSHUB",
    link: "https://adheart.me/",
  },
];

export const reviews = [
  {
    label: "Сервисы и партнеры",
    items: [
      {
        avatar: T1,
        avatarBg: true,
        title: "PARTNERKIN",
        date: "15.10.2020",
        text: "С ребятами работаем давно, за все время не было недопониманий ни с нашей, ни с их стороны. Хотелось бы выделить ответственность команды, никогда не было задержек с оплатой позиций. Всегда на связи и за любой кипиш. Видно, что люди радеют за своё дело и стремятся все довести до идеала.",
      },
      {
        avatar: T2,
        avatarBg: true,
        title: "PRO-TRAFFIC",
        date: "15.10.2020",
        text: "Сотрудничать с Leadshub — это о win-win развитии, дружеских отношениях и четко поставленных задачах. Ребята всегда знают, что им нужно и не отклоняются от своей глобальной цели – сделать лучший продукт в аффилиейт нише. Приятно совместно работать и наблюдать за постоянным развитием Leadshub’ов! 🤟",
      },
      {
        avatar: T3,
        avatarBg: true,
        title: "Mostbet Partners",
        date: "15.10.2020",
        text: "Сотрудничаем уже давно, за все это время только положительные эмоции! Покупаем у них трафик, и он всегда высшего качества! Команда – топ, всегда приятно пообщаться. Очень компетенные - видно что эксперты, а не нубы. Очень рекомендуем ребят для сотрудничества, если вам нужен по-настоящему качественный траф!🔥",
      },
      {
        avatar: T4,
        avatarBg: true,
        title: "Welcome Partners",
        date: "15.10.2020",
        text: "За долгое время сотрудничества с Leadshub сложились позитивные впечатления и уверенность в команде. Также хочется заметить рост и развитие сервиса. Наши продукты доступны в партнерской сети Leadshub на одних из лучших условиях на рынке. Будем рады и дальше работать вместе с вами! 💚",
      },
      {
        avatar: T5,
        avatarBg: true,
        title: "V.Partners",
        date: "15.10.2020",
        text: "За год сотрудничества с Leadshub могу с увереностью сказать, что здесь работает команда с огромным опытом, на которую всегда можно положиться. Ребята на связи 24/7, что не может не радовать. Поэтому, мы полностью можем доверить свой продукт настоящим професионалам таким, как Leadshub❤️",
      },
      {
        avatar: T6,
        avatarBg: true,
        title: "Royal Partners",
        date: "15.10.2020",
        text: "Работаем с Leadshub очень плотно. Можем с уверенностью сказать, что ребята подходят к своей работе креативно и ответственно. Что касается гемблинга, то знают своё дело на все 100! Придут на помощь и днём и ночью, дадут одни из лучших условий.",
      },
    ],
  },
  {
    label: "Веб-мастера",
    items: [
      {
        avatar: ReviewAvatar,
        title: "Sevcuka224",
        date: "02.03.2022",
        text: "Перваночально оставлю отзыв о самой ПП. Удобный интерфейс, легкий в понимании. Выплаты происходят моментально, что очень радует. Рекомендую эту ПП.",
        source:
          "https://partnerkin.com/c/17/leadshub/reviews/hochu_poblagodarit_svoego_mene",
        rating: 8,
      },
      {
        avatar: ReviewAvatar,
        title: "Fine",
        date: "19.01.2022",
        text: "Подводя итог своему отзыву, хочу сказать всем тем, кто сомневается: попав однажды в Leadshub - ты остаешься навсегда, так случилось и со мной. Будьте осторожны, всем мир ✌️😜",
        source:
          "https://partnerkin.com/c/17/leadshub/reviews/hochu_poblagodarit_svoego_mene",
        rating: 10,
      },
      {
        avatar: ReviewAvatar,
        title: "VladBMT",
        date: "18.01.2022",
        text: "Отмечу глубокое понимание саппорта в продуктах + поддержка на всех этапах залива. Тут буквально могут выдать связку, помочь словом и делом, в общем, только положительные впечатления. Верю, что вырасту, благодаря ребятам💪💪💪",
        source:
          "https://partnerkin.com/c/17/leadshub/reviews/hochu_poblagodarit_svoego_mene",
        rating: 8.6,
      },
      {
        avatar: ReviewAvatar,
        title: "Koctzik5",
        date: "14.01.2022",
        text: "И в заключение хочу сказать, что партнерка достойная, всегда вовремя платит и даже раньше, хотя объем моего трафика мал, но когда я захожу на Leadshub, он растет 😏",
        source:
          "https://partnerkin.com/c/17/leadshub/reviews/hochu_poblagodarit_svoego_mene",
        rating: 10,
      },
      {
        avatar: ReviewAvatar,
        title: "Shox",
        date: "11.07.2021",
        text: "Ребята из партнёрки на связи 24/7, можно воспринимать эти слова буквально. Грубо говоря в любое время суток можно получить фидбек, что тоже было приятно) Ах да, тут вы можете получить досрочную выплату, что даёт возможность набирать объёмы в трафике и наливать ещё больше)",
        source:
          "https://partnerkin.com/c/17/leadshub/reviews/hochu_poblagodarit_svoego_mene",
        rating: 10,
      },
      {
        avatar: ReviewAvatar,
        title: "AIRPLANE",
        date: "24.05.2021",
        text: "Хорошая ПП для гемблинга Работаю с этой ПП уже год, саппорт всегда на связи! Офферы с высокими ставками и выплаты всегда прилетают во время.",
        source:
          "https://partnerkin.com/c/17/leadshub/reviews/hochu_poblagodarit_svoego_mene",
        rating: 10,
      },
      {
        avatar: ReviewAvatar,
        title: "Sabina22",
        date: "05.03.2021",
        text: "Работаю с лидсхаб больше года, все нравится. Попробовал кучу офферов за это время, если кто целиться в приваты, то вам точно к этим ребятам, последняя канада показа ерс 15 баксов, ставку говорить не буду, чтобы рты не отвалились)",
        source:
          "https://partnerkin.com/c/17/leadshub/reviews/hochu_poblagodarit_svoego_mene",
        rating: 10,
      },
      {
        avatar: ReviewAvatar,
        title: "777.77",
        date: "22.01.2021",
        text: "Лучшие ребята. Поддержка быстрая и удобная ПП отличная, лью сюда уже 4 месяца и процес полностью нас устравиает, не жалею что мы сотрудничаем. Очень легко отслеживать потоки, все можно мониторить. Саппорт адекватный, выплаты – по требованию. Также, можно заказать досрочную выплату. Спасибо.",
        source:
          "https://partnerkin.com/c/17/leadshub/reviews/hochu_poblagodarit_svoego_mene",
        rating: 9.75,
      },
    ],
  },
];
