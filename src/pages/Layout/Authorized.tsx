import { Footer, Header, ModalCookie, ModalPublicOffer } from "components";
import React from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

import { BASE_PATH } from "../../constants";

import FirstBgXl from "assets/images/first-top-bg-xl.jpg";
import FirstBg3Xl from "assets/images/first-top-bg-3xl.jpg";
import SecondBg from "assets/images/second-top-bg.jpg";
import { useMediaQuery } from "hooks";

export const Authorized: React.FC = () => {
  const { pathname } = useLocation();

  const matches = useMediaQuery("(min-width: 1921px)");

  return (
    <>
      <div
        className="bg-auto bg-top bg-no-repeat"
        style={{
          backgroundImage: `url(${
            pathname === BASE_PATH
              ? matches
                ? FirstBg3Xl
                : FirstBgXl
              : SecondBg
          })`,
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
