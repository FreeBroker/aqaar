import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    supportedLng: ['en', 'ar'],
    fallbackLng: "en",
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: 'assets/locales/{{lng}}/translation.json',
    },
  });

const loadingMarkup = (
  <div className='flex justify-center mt-12'>
    <h2>... loading ...</h2>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
document.body.style.backgroundColor = "#eee";
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);

reportWebVitals();