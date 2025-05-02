import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogCard = ({ post }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
    <div className="h-48 overflow-hidden">
      <img 
        src={`${post.imageUrl}?auto=format&fit=crop&w=800&q=80`}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-center mb-3">
        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">{post.category}</Badge>
        <span className="text-sm text-gray-500">{post.date}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{post.readTime}</span>
        <Button 
          variant="ghost" 
          className="text-blue-600 hover:text-blue-800 p-0 h-auto"
          onClick={() => window.open(`/blog/${post.id}`, '_blank')}
        >
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
);

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  
  const categories = ["All", "AI Strategy", "Machine Learning", "Data Privacy"];
  
  const filteredPosts = activeCategory && activeCategory !== "All" 
    ? blogPosts.filter(post => post.category === activeCategory).slice(0, 3)
    : blogPosts.slice(0, 3);

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-slide-up">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-3">INSIGHTS</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest from Our Blog</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert insights and thought leadership on AI, machine learning, and data analytics.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category || (category === "All" && !activeCategory) ? "default" : "outline"}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <div key={post.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/blogs">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
