import { Footer, Header } from "components";
import React from "react";
import { Outlet } from "react-router-dom";

import MainBg from "assets/images/main-bg.png";

export const Authorized: React.FC = () => {
  return (
    <div
      className="bg-auto bg-top bg-no-repeat"
      style={{
        backgroundImage: `url(${MainBg})`,
      }}
    >
      <Header />

      <div className="pt-36">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
