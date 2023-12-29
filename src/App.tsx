import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Controller } from "react-scrollmagic";
import { SWRConfig } from "swr";

import {
  Authorized,
  Unauthorized,
  Home,
  FAQ,
  PointsStore,
  Bonuses,
  Contacts,
  // Blog,
  // BlogPost,
  Registration,
  Login,
  NotFound,
  WorkInProgress,
  Blog,
  BlogPost,
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
  {
    path: BASE_PATH + "work/",
    element: <WorkInProgress />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export const App: React.FC = () => {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <Controller>
        <RouterProvider router={router} />
      </Controller>
    </SWRConfig>
  );
};
