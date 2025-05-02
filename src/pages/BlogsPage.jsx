import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { blogPosts } from "@/data/blogPosts";

const BlogsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = ["All", "AI Strategy", "Machine Learning", "Data Privacy", "Automation"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === null || activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-3">BLOG</Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Latest Articles</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Expert insights, thought leadership, and practical guides on AI, machine learning, and data analytics.
            </p>

            {/* Search and filter */}
            <div className="max-w-xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    activeCategory === category || (category === "All" && !activeCategory)
                      ? "default"
                      : "outline"
                  }
                  className={
                    activeCategory === category || (category === "All" && !activeCategory)
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "text-gray-700 hover:text-blue-600"
                  }
                  onClick={() => setActiveCategory(category === "All" ? null : category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={`${post.imageUrl}?auto=format&fit=crop&w=800&q=80`}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-0">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">{post.category}</Badge>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold line-clamp-2">{post.title}</h3>
                  </CardHeader>
                  <CardContent className="py-4 flex-grow">
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="pt-0 flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Button
                      variant="ghost"
                      className="text-blue-600 hover:text-blue-800 p-0 h-auto"
                      onClick={() => window.open(`/blog/${post.id}`, "_blank")}
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          <Pagination className="my-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;
