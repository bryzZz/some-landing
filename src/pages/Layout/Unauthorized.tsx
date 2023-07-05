import React from "react";
import { Outlet } from "react-router-dom";

import Bg from "assets/images/unauthorized-bg.jpg";

export const Unauthorized: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <main className="mx-auto flex min-h-screen w-full max-w-[531px] items-center">
        <Outlet />
      </main>
    </div>
  );
};
