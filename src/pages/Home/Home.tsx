import React from "react";

import { ShopPreview } from "components";
import { First, Cards, Slides, TopTables, Reviews } from "./components";

export const Home: React.FC = () => {
  return (
    <>
      <First />
      <Cards />
      <Slides />
      <TopTables />
      <ShopPreview />
      <Reviews />
    </>
  );
};
