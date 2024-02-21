import T1 from "assets/images/testimonials/partnerkin.svg";
import T2 from "assets/images/testimonials/pro-traffic.svg";
import T3 from "assets/images/testimonials/mostbet.svg";
import T4 from "assets/images/testimonials/welcome-partners.svg";
import T5 from "assets/images/testimonials/vpartners.svg";
import T6 from "assets/images/testimonials/royalpartners.svg";
import T7 from "assets/images/testimonials/chilli.jpg";
import Person from "assets/icons/person.svg";

export const BASE_PATH = import.meta.env.BASE_URL;

export const reviews = [
  {
    label: "",
    items: [
      {
        avatar: T1,
        avatarBg: true,
        title: "PARTNERKIN",
        date: "15.10.2020",
        text: "",
      },
      {
        avatar: T2,
        avatarBg: true,
        title: "PRO-TRAFFIC",
        date: "11.10.2023",
        text: "",
      },
      {
        avatar: T7,
        avatarBg: false,
        title: "Chilli Partners",
        date: "13.10.2023",
        text: "",
      },
      {
        avatar: T3,
        avatarBg: true,
        title: "Mostbet Partners",
        date: "15.10.2020",
        text: "",
      },
      {
        avatar: T4,
        avatarBg: true,
        title: "Welcome Partners",
        date: "15.10.2020",
        text: "",
      },
      {
        avatar: T5,
        avatarBg: true,
        title: "V.Partners",
        date: "15.10.2020",
        text: "",
      },
      {
        avatar: T6,
        avatarBg: true,
        title: "Royal Partners",
        date: "15.10.2020",
        text: "",
      },
    ],
  },
  {
    label: "",
    items: [
      {
        avatar: Person,
        title: "Sevcuka224",
        date: "02.03.2022",
        text: "",
        source:
          "https://partnerkin.com/c/17/leadshub/reviews/hochu_poblagodarit_svoego_mene",
        rating: 8,
      },
      {
        avatar: Person,
        title: "Fine",
        date: "19.01.2022",
        text: "",
        source:
          "https://partnerkin.com/c/17/leadshub/reviews/hochu_poblagodarit_svoego_mene",
        rating: 10,
      },
      {
        avatar: Person,
        title: "VladBMT",
        date: "18.01.2022",
        text: "",
        source:
          "https://partnerkin.com/c/17/leadshub/reviews/hochu_poblagodarit_svoego_mene",
        rating: 8.6,
      },
      {
        avatar: Person,
        title: "Koctzik5",
        date: "14.01.2022",
        text: "",
        source:
          "https://partnerkin.com/c/17/leadshub/reviews/hochu_poblagodarit_svoego_mene",
        rating: 10,
      },
      {
        avatar: Person,
        title: "Shox",
        date: "11.07.2021",
        text: "",
        source:
          "https://partnerkin.com/c/17/leadshub/reviews/hochu_poblagodarit_svoego_mene",
        rating: 10,
      },
      {
        avatar: Person,
        title: "AIRPLANE",
        date: "24.05.2021",
        text: "",
        source:
          "https://partnerkin.com/c/17/leadshub/reviews/hochu_poblagodarit_svoego_mene",
        rating: 10,
      },
      {
        avatar: Person,
        title: "Sabina22",
        date: "05.03.2021",
        text: "",
        source:
          "https://partnerkin.com/c/17/leadshub/reviews/hochu_poblagodarit_svoego_mene",
        rating: 10,
      },
      {
        avatar: Person,
        title: "777.77",
        date: "22.01.2021",
        text: "",
        source:
          "https://partnerkin.com/c/17/leadshub/reviews/hochu_poblagodarit_svoego_mene",
        rating: 9.75,
      },
    ],
  },
];

const verticals = [
  "Gambling",
  "Betting",
  "Nutra",
  "Crypto",
  "Dating",
  "E-commerce",
  "Gaming",
  "Adult",
  "Бинарные опционы/Forex",
];

const trafficSources = [
  "Streams",
  "PPC",
  "Influence/Schemes",
  "Fb app",
  "In-app",
  "ASO",
  "UAC",
  "УБТ",
  "Push",
  "SEO",
  "Popunder",
  "Capper",
];

const trafficAmounts = ["До $1,000", "$1,000-$10,000", "$10,000+"];

export const verticalOptions = verticals.map((label) => ({
  value: label,
  label,
}));

export const trafficSourceOptions = trafficSources.map((label) => ({
  value: label,
  label,
}));

export const trafficAmountOptions = trafficAmounts.map((label) => ({
  value: label,
  label,
}));
