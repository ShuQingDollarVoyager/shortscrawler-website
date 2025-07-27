import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowLeft, Clock, Tag, User, Calendar, Share2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getPostBySlug, getRelatedPosts, getAllCategories } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static paths
export async function generateStaticParams() {
  // Return all possible slugs
  return [
    { slug: 'youtube-shorts-data-analysis-tips' },
    { slug: 'youtube-shorts-crawler-setup-guide' },
    { slug: 'youtube-shorts-trends-2025' }
  ];
}

// Generate page metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found - YouTube Shorts Crawler",
    };
  }

  return {
    title: `${post.title} - YouTube Shorts Crawler`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      images: post.image ? [post.image] : undefined,
    },
    keywords: post.tags,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const categories = getAllCategories();

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);
  const category = categories.find(c => c.id === post.category);

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="p-0 h-auto">
              <Link href="/blog" className="flex items-center text-gray-600 hover:text-blue-
