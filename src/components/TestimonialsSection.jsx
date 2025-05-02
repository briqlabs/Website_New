import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useRef } from "react";

const Testimonial = ({ quote, author, role, company, avatarUrl, rating }) => (
  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
    <CardContent className="p-6">
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <Avatar className="h-12 w-12 mr-3">
          <AvatarImage src={avatarUrl} alt={author} />
          <AvatarFallback className="bg-blue-100 text-blue-600 font-medium">
            {author.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-600">{role}, {company}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TestimonialsSection = () => {
  const containerRef = useRef(null);

  const testimonials = [
    {
      quote: "BriqLabs' AI solution has transformed our data analysis capabilities. We've seen a 40% increase in operational efficiency within just three months.",
      author: "Michael Chen",
      role: "CTO",
      company: "TechVision Global",
      rating: 5
    },
    {
      quote: "The implementation was seamless, and the results have been remarkable. Our predictive accuracy improved by 35%, leading to better strategic decisions.",
      author: "Sarah Johnson",
      role: "Data Science Director",
      company: "Innovate Solutions",
      rating: 5
    },
    {
      quote: "We've been able to automate complex processes that previously required significant manual effort. BriqLabs delivered exactly what they promised.",
      author: "David Rodriguez",
      role: "VP of Operations",
      company: "NextGen Manufacturing",
      rating: 4
    },
    {
      quote: "Their AI-powered analytics platform has given us insights we never thought possible. It's like having a crystal ball for our business decisions.",
      author: "Emily Zhang",
      role: "Marketing Director",
      company: "Global Retail Inc.",
      rating: 5
    }
  ];

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 400;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-slide-up">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-3">TESTIMONIALS</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how BriqLabs has helped businesses across industries transform their operations with AI.
          </p>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide snap-x"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Testimonial
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>

          <div className="hidden md:flex justify-center mt-8 space-x-4">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
