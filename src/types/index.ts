import { FC } from "react";

export interface TopTable {
  label: string;
  head: string[];
  rows: {
    value?: string | number;
    image?: string;
    icons?: FC[];
  }[][];
}
