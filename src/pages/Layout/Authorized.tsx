import { Footer, Header, ModalCookie, ModalPublicOffer } from "components";
import React from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

import { BASE_PATH } from "../../constants";

import FirstBgXl from "assets/images/first-top-bg-xl.jpg";
import FirstBg3Xl from "assets/images/first-top-bg-3xl.jpg";
import SecondBg from "assets/images/second-top-bg.jpg";
import SecondBg3Xl from "assets/images/second-top-bg-3xl.jpg";
import { useMediaQuery } from "hooks";

export const Authorized: React.FC = () => {
  const { pathname } = useLocation();

  const matches = useMediaQuery("(min-width: 1921px)");

  const getBg = () => {
    if (pathname === BASE_PATH) {
      return matches ? FirstBg3Xl : FirstBgXl;
    }

    return matches ? SecondBg3Xl : SecondBg;
  };

  return (
    <>
      <div
        className="bg-auto bg-left-top bg-no-repeat"
        style={{
          backgroundImage: `url(${getBg()})`,
        }}
      >
        <Header />

        <main className="overflow-hidden pt-24 md:pt-32 lg:pt-44">
          <Outlet />
        </main>

        <Footer />
      </div>

      <ModalCookie />
      <ModalPublicOffer />

      <ScrollRestoration />
    </>
  );
};
