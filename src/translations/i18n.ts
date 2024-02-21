import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";
import * as translations from "./index";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: translations,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
