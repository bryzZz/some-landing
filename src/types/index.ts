export interface Post {
  date: string;
  tags: string[];
  title: string;
  text: string;
  image?: string;
  link: string;
}

export interface RecentPost {
  date: string;
  title: string;
  image: string;
  link: string;
}

export interface WebMasterResponse {
  [id: string]: { d: string; m: string; name: string };
}

export interface OffersResponse {
  [id: string]: {
    total: {
      reg: number;
      dep: number;
    };
    r2d: number;
    title: string;
    privacy: "private" | "protected";
    countries: string[];
    logo: string;
  };
}

export interface Product {
  id: string;
  category: string;
  desc: string;
  img: string;
  name: string;
  price: string;
}

export interface PointsStoreResponse {
  items: Array<Product>;
}

export type RegistrationFirstStepResponse = ["success" | "fail"];

export interface RegistrationResponse {
  id: number;
  return_manager: string;
}
