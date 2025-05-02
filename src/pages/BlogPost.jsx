import { useParams, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { useEffect } from "react";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find(post => post.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!post) {
      navigate("/blogs");
    }
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Button
            variant="outline"
            className="mb-8"
            onClick={() => navigate("/blogs")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Articles
          </Button>

          <div className="flex items-center gap-4 mb-4">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              {post.category}
            </Badge>
            <span className="text-sm text-gray-500">{post.date}</span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>

          <div className="w-full h-64 md:h-96 mb-8 overflow-hidden rounded-lg">
            <img
              src={`${post.imageUrl}?auto=format&fit=crop&w=1200&q=80`}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-3xl mx-auto prose prose-lg prose-blue">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8">
            <h3 className="text-2xl font-bold mb-4">Share this article</h3>
            <div className="flex gap-4">
              <Button variant="outline">Twitter</Button>
              <Button variant="outline">LinkedIn</Button>
              <Button variant="outline">Facebook</Button>
              <Button variant="outline">Copy Link</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
