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
  top: Array<{ bonuses: string; id: string; name: string }>;
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
