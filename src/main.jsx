import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Layout } from "./components/Layout";
import { Itear } from "./pages/Itear";
import { Kimu } from "./pages/Kimu";
import { Descubre } from "./pages/Descubre";
import { Mika } from "./pages/Mika";

import coverImage from "./assets/itear/itear-rodete-gray-image-of-cover.jpg";
import kimuCoverImage from "./assets/kimu/cover-image-kimu.jpg";
import descubreCoverImage from "./assets/descubre/cover.jpg";
import mikaCoverImage from "./assets/mika/cover.jpg";

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
    path: "/projects/mika",
    element: <Mika coverImage={mikaCoverImage}/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
