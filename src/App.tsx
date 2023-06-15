import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Authorized, Home, FAQ, PointsStore } from "pages";
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
    ],
  },
]);

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
