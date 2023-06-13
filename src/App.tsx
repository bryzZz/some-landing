import { BASE_PATH } from "constants";
import { Authorized, Home, FAQ } from "pages";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    ],
  },
]);

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
