import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import basqueContent from "./lang/eu.json";
import spanishContent from "./lang/es.json";
import englishContent from "./lang/en.json";
import italianContent from "./lang/it.json";

import { Layout } from "./components/Layout";
import { Itear } from "./pages/Itear";
import { Kimu } from "./pages/Kimu";
import { Descubre } from "./pages/Descubre";
import { Errofest } from "./pages/Errofest";

import coverImage from "./assets/itear/itear-rodete-gray-image-of-cover.jpg";
import kimuCoverImage from "./assets/kimu/cover-image-kimu.jpg";
import descubreCoverImage from "./assets/descubre/cover.jpg";
import errofestCoverImage from "./assets/errofest/imagen-del-festival.jpg";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Layout/>,
  },
  {
    path: "/projects/itear",
    element: <Itear coverImage={coverImage}/>,
  },
  {
    path: "/projects/kimu",
    element: <Kimu coverImage={kimuCoverImage}/>,
  },
  {
    path: "/projects/descubre",
    element: <Descubre coverImage={descubreCoverImage}/>,
  },
  {
    path: "/projects/errofest",
    element: <Errofest coverImage={errofestCoverImage}/>,
  },
]);

i18n.use(initReactI18next).init({
  resources: {
      eu: basqueContent,
      es: spanishContent,
      en: englishContent,
      it: italianContent,
  },

  fallbackLng: "eu",

  interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
