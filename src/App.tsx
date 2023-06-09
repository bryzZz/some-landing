import { Home } from "pages/Home";
import { Authorized } from "pages/Layout";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/some-landing/",
    element: <Authorized />,
    children: [
      {
        path: "/some-landing/",
        element: <Home />,
      },
    ],
  },
]);

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
