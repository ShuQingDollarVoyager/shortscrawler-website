import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - YouTube Shorts Crawler",
  description: "Professional insights on YouTube Shorts data analysis, crawler technology, and content creation. Learn the latest data collection techniques, analysis methods, and industry trends.",
  keywords: ["YouTube Shorts", "Data Analysis", "Web Crawling", "Content Creation", "Video Analytics", "Blog"],
  openGraph: {
    title: "Blog - YouTube Shorts Crawler",
    description: "Professional insights on YouTube Shorts data analysis, crawler technology, and content creation",
    url: "https://shortscrawler.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - YouTube Shorts Crawler",
    description: "Professional insights on YouTube Shorts data analysis, crawler technology, and content creation",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
