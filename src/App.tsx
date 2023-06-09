import { Home } from "pages/Home";
import { Authorized } from "pages/Layout";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Authorized />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
