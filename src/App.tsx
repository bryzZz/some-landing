import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Controller } from "react-scrollmagic";

import {
  Authorized,
  Unauthorized,
  Home,
  FAQ,
  PointsStore,
  Bonuses,
  Contacts,
  Blog,
  BlogPost,
  Registration,
  Login,
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
      { path: "blog/:id", element: <BlogPost /> },
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
      {
        path: "login/",
        element: <Login />,
      },
    ],
  },
]);

export const App: React.FC = () => {
  return (
    <Controller>
      <RouterProvider router={router} />
    </Controller>
  );
};
