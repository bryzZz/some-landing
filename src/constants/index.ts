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
