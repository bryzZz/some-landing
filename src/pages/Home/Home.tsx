import React from "react";
import {
  First,
  Cards,
  Slides,
  TopTables,
  ShopPreview,
  Reviews,
} from "./sections";

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
