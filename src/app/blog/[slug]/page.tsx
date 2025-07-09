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

// 生成静态路径
export async function generateStaticParams() {
  // 这里可以返回所有可能的 slug
  return [
    { slug: 'youtube-shorts-data-analysis-tips' },
    { slug: 'youtube-shorts-crawler-setup-guide' },
    { slug: 'youtube-shorts-trends-2025' }
  ];
}

// 生成页面元数据
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "文章未找到 - YouTube Shorts Crawler",
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
          {/* 返回按钮 */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="p-0 h-auto">
              <Link href="/blog" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回博客列表
              </Link>
            </Button>
          </div>

          {/* 文章头部 */}
          <article className="mb-12">
            {/* 分类和标签 */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary">
                {category?.name}
              </Badge>
              {post.featured && (
                <Badge className="bg-yellow-100 text-yellow-800">
                  精选
                </Badge>
              )}
            </div>

            {/* 标题 */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>

            {/* 文章信息 */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {format(new Date(post.publishedAt), 'yyyy年MM月dd日')}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                约 {post.readTime} 分钟阅读
              </div>
              <Button variant="ghost" size="sm" className="p-0 h-auto">
                <Share2 className="w-4 h-4 mr-1" />
                分享
              </Button>
            </div>

            {/* 文章描述 */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {post.description}
            </p>

            {/* 题图 */}
            {post.image && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            )}

            {/* 文章内容 */}
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

            {/* 文章标签 */}
            <div className="mt-8 pt-6 border-t">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-600 mr-2">标签:</span>
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </article>

          {/* 相关文章 */}
          {relatedPosts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">相关文章</h2>
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
                          {relatedPost.readTime} 分钟阅读
                        </div>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* 行动号召 */}
          <section className="mt-16 text-center">
            <Card className="p-8 bg-blue-50 border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                觉得这篇文章有用？
              </h3>
              <p className="text-blue-700 mb-6">
                立即下载 YouTube Shorts Crawler，开始您的数据分析之旅
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="https://chromewebstore.google.com/detail/youtube-shorts-crawler/ijmdekoohjomoonpfdplgdonlhahfpag" target="_blank">
                    安装扩展
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/blog">
                    阅读更多文章
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
