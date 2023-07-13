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
