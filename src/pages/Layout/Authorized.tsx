import { Footer, Header, ModalCookie } from "components";
import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { BASE_PATH } from "../../constants";

import FirstBg from "assets/images/first-top-bg.png";
import SecondBg from "assets/images/second-top-bg.jpg";

export const Authorized: React.FC = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div
        className="bg-auto bg-top bg-no-repeat"
        style={{
          backgroundImage: `url(${
            pathname === BASE_PATH ? FirstBg : SecondBg
          })`,
        }}
      >
        <Header />

        <main className="overflow-hidden pt-24 md:pt-32 lg:pt-44">
          <Outlet />
        </main>

        <Footer />
      </div>

      <ModalCookie isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
    </>
  );
};
