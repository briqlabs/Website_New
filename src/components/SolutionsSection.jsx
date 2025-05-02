import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tab } from '@headlessui/react';
import { useState } from 'react';
import { Brain, Database, Laptop, BarChart, Search, Zap, Lock } from "lucide-react";

const Solution = ({ title, description, icon, benefits }) => (
  <Card className="border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
    <CardContent className="p-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-16 h-16 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <h4 className="font-medium text-blue-800 mb-2">Key Benefits:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

const solutions = [
  {
    title: "AI Integration",
    description: "Seamlessly incorporate advanced AI capabilities into your existing business systems and workflows.",
    icon: <Brain size={32} />,
    benefits: [
      "Custom AI model development",
      "API-based integration",
      "Scalable architecture",
      "Low-code implementation"
    ]
  },
  {
    title: "Intelligent Analytics",
    description: "Transform raw data into actionable insights with our powerful analytics platform powered by machine learning.",
    icon: <BarChart size={32} />,
    benefits: [
      "Real-time dashboards",
      "Predictive analytics",
      "Natural language querying",
      "Automated reporting"
    ]
  },
  {
    title: "Process Automation",
    description: "Eliminate repetitive tasks and streamline operations with intelligent automation solutions.",
    icon: <Zap size={32} />,
    benefits: [
      "Workflow optimization",
      "Document processing",
      "Error reduction",
      "Resource reallocation"
    ]
  },
  {
    title: "Knowledge Management",
    description: "Organize, discover, and leverage your organization's knowledge with AI-powered search and recommendation.",
    icon: <Search size={32} />,
    benefits: [
      "Semantic search",
      "Content categorization",
      "Expert finding",
      "Knowledge graph"
    ]
  }
];

const SolutionsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id="solutions" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-3">SOLUTIONS</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise AI Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our suite of intelligent solutions designed to solve complex business challenges
            and drive sustainable growth through innovation.
          </p>
        </div>

        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex flex-wrap space-x-1 rounded-xl bg-blue-100/20 p-1 mb-8 max-w-2xl mx-auto">
            {solutions.map((solution, idx) => (
              <Tab
                key={idx}
                className={({ selected }) =>
                  `w-full py-2.5 text-sm font-medium leading-5 rounded-lg transition-all
                  ${selected 
                    ? 'bg-white shadow text-blue-600' 
                    : 'text-gray-600 hover:bg-white/[0.5] hover:text-gray-900'
                  }`
                }
              >
                {solution.title}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="animate-scale">
            {solutions.map((solution, idx) => (
              <Tab.Panel key={idx}>
                <Solution
                  title={solution.title}
                  description={solution.description}
                  icon={solution.icon}
                  benefits={solution.benefits}
                />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="glass-card p-6 rounded-xl animate-slide-up animate-delay-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-blue-600">
              <Database size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Processing</h3>
            <p className="text-gray-600">Handle massive datasets with our scalable data processing infrastructure.</p>
          </div>

          <div className="glass-card p-6 rounded-xl animate-slide-up animate-delay-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-blue-600">
              <Laptop size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Dashboards</h3>
            <p className="text-gray-600">Visualize your business data through intuitive and customizable dashboards.</p>
          </div>

          <div className="glass-card p-6 rounded-xl animate-slide-up animate-delay-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-blue-600">
              <Lock size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
            <p className="text-gray-600">Bank-grade security protocols to keep your sensitive data protected.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
