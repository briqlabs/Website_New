import { Badge } from "@/components/ui/badge";
import { Brain, ChartBar, Lock, Users, Layers, Zap, Database, Search, RefreshCw } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover">
    <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-blue-600">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "State-of-the-art machine learning models designed for enterprise-scale applications."
    },
    {
      icon: ChartBar,
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions with sophisticated predictive capabilities."
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Comprehensive tools for organizing, processing, and deriving value from your data assets."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Industry-leading security protocols with SOC 2 compliance and end-to-end encryption."
    },
    {
      icon: Search,
      title: "Semantic Search",
      description: "Intelligent search functionality that understands context and user intent beyond keywords."
    },
    {
      icon: RefreshCw,
      title: "Continuous Learning",
      description: "Self-improving systems that evolve and adapt based on new data and interactions."
    },
    {
      icon: Layers,
      title: "Multi-platform Integration",
      description: "Seamlessly connect with your existing tech stack through our comprehensive API."
    },
    {
      icon: Users,
      title: "Collaborative Workspace",
      description: "Team-friendly environment with role-based access controls and sharing capabilities."
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline workflows and eliminate manual tasks with intelligent automation tools."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-3">FEATURES</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful AI Capabilities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform offers a comprehensive suite of cutting-edge features designed to transform your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className={`animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
