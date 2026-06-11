export interface Block {
  type: "heading" | "paragraph" | "image" | "two_column" | "list" | "grid";
  level?: number;
  text?: string;
  src?: string;
  alt?: string;
  caption?: string;
  left?: Block[];
  right?: Block[];
  style?: "bullet" | "ordered";
  items?: (string | { image: string; caption?: string })[];
  columns?: number;
}

export interface Comment {
  author: string;
  avatar?: string;
  text: string;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  day: string;
  month: string;
  author: string;
  commentsCount: number;
  image: string;
  excerpt: string;
  template?: string;
  tags?: string[];
  categories?: string[];
  blocks?: Block[];
  comments?: Comment[];
}
