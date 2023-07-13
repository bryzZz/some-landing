import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Authorized,
  Home,
  FAQ,
  PointsStore,
  Bonuses,
  Contacts,
  Unauthorized,
  Registration,
  Blog,
} from "pages";
import { BASE_PATH } from "./constants";

const router = createBrowserRouter([
  {
    path: BASE_PATH,
    element: <Authorized />,
    children: [
      {
        path: BASE_PATH,
        element: <Home />,
      },
      {
        path: "FAQ/",
        element: <FAQ />,
      },
      {
        path: "points-store/",
        element: <PointsStore />,
      },
      {
        path: "bonuses/",
        element: <Bonuses />,
      },
      {
        path: "contacts/",
        element: <Contacts />,
      },
      {
        path: "blog/",
        element: <Blog />,
      },
    ],
  },
  // Тут переделать
  {
    path: BASE_PATH + "unauthorized/",
    element: <Unauthorized />,
    children: [
      {
        path: "registration/",
        element: <Registration />,
      },
    ],
  },
]);

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
