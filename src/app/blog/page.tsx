'use client';

import { useState, useMemo } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { Search, Filter, Clock, Tag, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  getAllPosts,
  getAllCategories,
  getAllTags,
  searchPosts,
  getFeaturedPosts
} from "@/lib/blog";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'popular'>('newest');

  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const allTags = getAllTags();
  const featuredPosts = getFeaturedPosts();

  // Filter and search articles
  const filteredPosts = useMemo(() => {
    return searchPosts({
      query: searchQuery,
      category: selectedCategory,
      tags: selectedTags,
      sort: sortBy
    });
  }, [searchQuery, selectedCategory, selectedTags, sortBy]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
            <p className="text-lg text-gray-600">
              Professional insights on YouTube Shorts data analysis, crawler technology, and content creation
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Box */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search articles, tags, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort Options */}
              <Select value={sortBy} onValueChange={(value) => setSortBy(value as 'newest' | 'oldest' | 'popular')}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Tag Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600 py-1">Filter by tags:</span>
              {allTags.slice(0, 10).map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleTagToggle(tag)}
                  className="h-7 text-xs"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="all">All Articles ({filteredPosts.length})</TabsTrigger>
              <TabsTrigger value="featured">Featured Articles ({featuredPosts.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <Link href={`/blog/${post.slug}`}>
                      {post.image && (
                        <div className="aspect-video bg-gray-100 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="secondary" className="text-xs">
                            {categories.find(c => c.id === post.category)?.name}
                          </Badge>
                          {post.featured && (
                            <Badge className="text-xs bg-yellow-100 text-yellow-800">
                              Featured
                            </Badge>
                          )}
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {post.description}
                        </p>

                        <div className="flex items-center text-xs text-gray-500 mb-4">
                          <User className="w-3 h-3 mr-1" />
                          <span className="mr-4">{post.author}</span>
                          <Clock className="w-3 h-3 mr-1" />
                          <span className="mr-4">{post.readTime} min read</span>
                          <span>{format(new Date(post.publishedAt), 'yyyy-MM-dd')}</span>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              <Tag className="w-2 h-2 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{post.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No articles found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search criteria or clearing filters
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                      setSelectedTags([]);
                    }}
                    className="mt-4"
                    variant="outline"
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="featured" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                  <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="md:flex">
                        {post.image && (
                          <div className="md:w-1/3 aspect-video md:aspect-square bg-gray-100 overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="p-6 md:w-2/3">
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant="secondary" className="text-xs">
                              {categories.find(c => c.id === post.category)?.name}
                            </Badge>
                            <Badge className="text-xs bg-yellow-100 text-yellow-800">
                              Featured
                            </Badge>
                          </div>

                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {post.title}
                          </h3>

                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {post.description}
                          </p>

                          <div className="flex items-center text-xs text-gray-500 mb-4">
                            <User className="w-3 h-3 mr-1" />
                            <span className="mr-4">{post.author}</span>
                            <Clock className="w-3 h-3 mr-1" />
                            <span className="mr-4">{post.readTime} min read</span>
                            <span>{format(new Date(post.publishedAt), 'yyyy-MM-dd')}</span>
                          </div>

                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                <Tag className="w-2 h-2 mr-1" />
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Statistics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{allPosts.length}</div>
              <div className="text-sm text-gray-600">Total Articles</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{categories.length}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{allTags.length}</div>
              <div className="text-sm text-gray-600">Tags</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">{featuredPosts.length}</div>
              <div className="text-sm text-gray-600">Featured</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
