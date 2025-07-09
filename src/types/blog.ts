export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  category: string;
  readTime: number;
  featured: boolean;
  image?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  count: number;
}

export interface BlogSearchParams {
  query?: string;
  category?: string;
  tags?: string[];
  sort?: 'newest' | 'oldest' | 'popular';
}
