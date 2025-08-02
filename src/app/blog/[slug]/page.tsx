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
              <Link href="/blog" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <article className="mb-12">
            {/* Category and Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary">
                {category?.name}
              </Badge>
              {post.featured && (
                <Badge className="bg-yellow-100 text-yellow-800">
                  Featured
                </Badge>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Article Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime} min read
              </div>
              <Button variant="ghost" size="sm" className="p-0 h-auto">
                <Share2 className="w-4 h-4 mr-1" />
                Share
              </Button>
            </div>

            {/* Article Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {post.description}
            </p>

            {/* Featured Image */}
            {post.image && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-6 mb-3">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-5 mb-2">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="leading-relaxed">{children}</li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children, className }) => {
                    const isBlock = className?.includes('language-');
                    if (isBlock) {
                      return (
                        <code className="block bg-gray-100 rounded-lg p-4 text-sm overflow-x-auto my-4">
                          {children}
                        </code>
                      );
                    }
                    return (
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        {children}
                      </code>
                    );
                  },
                  a: ({ href, children }) => (
                    <Link
                      href={href || '#'}
                      className="text-blue-600 hover:text-blue-800 underline"
                      target={href?.startsWith('http') ? '_blank' : undefined}
                      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {children}
                    </Link>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Article Tags */}
            <div className="mt-8 pt-6 border-t">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-600 mr-2">Tags:</span>
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </article>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      {relatedPost.image && (
                        <div className="aspect-video bg-gray-100 overflow-hidden">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <Badge variant="secondary" className="text-xs mb-2">
                          {categories.find(c => c.id === relatedPost.category)?.name}
                        </Badge>
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                          {relatedPost.description}
                        </p>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          {relatedPost.readTime} min read
                        </div>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Call to Action */}
          <section className="mt-16 text-center">
            <Card className="p-8 bg-blue-50 border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Found this article helpful?
              </h3>
              <p className="text-blue-700 mb-6">
                Download YouTube Shorts Crawler now and start your data analysis journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="https://chromewebstore.google.com/detail/youtube-shorts-crawler/ijmdekoohjomoonpfdplgdonlhahfpag" target="_blank">
                    Install Extension
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/blog">
                    Read More Articles
                  </Link>
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
