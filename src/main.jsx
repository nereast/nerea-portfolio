import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import i18n from "i18next";
import "./i18n.jsx";  //Import here
import { initReactI18next } from "react-i18next";
import basqueContent from "./lang/eu.json";
import spanishContent from "./lang/es.json";
import englishContent from "./lang/en.json";

import { Layout } from "./components/Layout";
import { Itear } from "./pages/Itear";
import { Kimu } from "./pages/Kimu";
import { Descubre } from "./pages/Descubre";
import { Errofest } from "./pages/Errofest";
import { DesignSystem } from "./pages/DesignSystem";
import { Echo } from "./pages/Echo";


const router = createBrowserRouter([
  { path: "/eu", element: <Layout /> },
  { path: "/eu/proiektuak/itear", element: <Itear/> },
  { path: "/eu/proiektuak/kimu", element: <Kimu/>},
  { path: "/eu/proiektuak/descubre", element: <Descubre/>},
  { path: "/eu/proiektuak/errofest", element: <Errofest/>},
  { path: "/eu/proiektuak/designsystem", element: <DesignSystem/>},
  { path: "/eu/proiektuak/echo", element: <Echo/>},

  { path: "/es", element: <Layout /> },
  { path: "/es/proyectos/itear", element: <Itear/> },
  { path: "/es/proyectos/kimu", element: <Kimu/>},
  { path: "/es/proyectos/descubre", element: <Descubre/>},
  { path: "/es/proyectos/errofest", element: <Errofest/>},
  { path: "/es/proyectos/designsystem", element: <DesignSystem/>},
  { path: "/es/proyectos/echo", element: <Echo/>},

  { path: "/en", element: <Layout /> },
  { path: "/en/projects/itear", element: <Itear/> },
  { path: "/en/projects/kimu", element: <Kimu/>},
  { path: "/en/projects/descubre", element: <Descubre/>},
  { path: "/en/projects/errofest", element: <Errofest/>},
  { path: "/en/projects/designsystem", element: <DesignSystem/>},
  { path: "/en/projects/echo", element: <Echo/>},
]);



i18n.use(initReactI18next).init({
  resources: {
      eu: basqueContent,
      es: spanishContent,
      en: englishContent,
  },
  
  interpolation: {
      escapeValue: false, 
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
