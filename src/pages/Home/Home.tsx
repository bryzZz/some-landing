import React from "react";
import { First, Cards, Slides, TopTables, Reviews } from "./sections";
import { ShopPreview } from "sections";

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
