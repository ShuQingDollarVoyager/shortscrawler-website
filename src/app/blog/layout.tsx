import { Metadata } from "next";

export const metadata: Metadata = {
  title: "博客 - YouTube Shorts Crawler",
  description: "YouTube Shorts 数据分析、爬虫技术和内容创作的专业见解。学习最新的数据收集技巧、分析方法和行业趋势。",
  keywords: ["YouTube Shorts", "数据分析", "爬虫技术", "内容创作", "视频分析", "博客"],
  openGraph: {
    title: "博客 - YouTube Shorts Crawler",
    description: "YouTube Shorts 数据分析、爬虫技术和内容创作的专业见解",
    url: "https://shortscrawler.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "博客 - YouTube Shorts Crawler",
    description: "YouTube Shorts 数据分析、爬虫技术和内容创作的专业见解",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
