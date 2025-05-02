import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const features = [
  "50 conversations",
  "100 Docs/URLs, no updates",
  "Briqlabs AI Agent",
  "Community support",
  "Multiple app integration (Slack, Teams, Outlook)",
  "100% hallucination free AI",
  "Unlimited knowledge uploads & updates",
  "24x7 support",
  "AWS, Azure or Google Cloud",
  "Self host LLM option",
];

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Best for initial exploration and trials",
    included: [
      true,  // 50 conversations
      true,  // 100 Docs/URLs, no updates
      true,  // Briqlabs AI Agent
      true,  // Community support
      false, // Multiple app integration
      false, // 100% hallucination free AI
      false, // Unlimited knowledge uploads & updates
      false, // 24x7 support
      false, // AWS, Azure or Google Cloud
      false, // Self host LLM option
    ],
    cta: "Get Started",
    isPopular: false,
  },
  {
    name: "Pro",
    price: "$0.59",
    description: "Perfect for professionals and teams",
    included: [
      true,  // 50 conversations
      true,  // 100 Docs/URLs, no updates
      true,  // Briqlabs AI Agent
      true,  // Community support
      true,  // Multiple app integration
      true,  // 100% hallucination free AI
      true,  // Unlimited knowledge uploads & updates
      true,  // 24x7 support
      true,  // AWS, Azure or Google Cloud
      false, // Self host LLM option
    ],
    cta: "Subscribe Now",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Pay as you go",
    description: "Customized solutions for large-scale businesses",
    included: [
      true,  // 50 conversations
      true,  // 100 Docs/URLs, no updates
      true,  // Briqlabs AI Agent
      true,  // Community support
      true,  // Multiple app integration
      true,  // 100% hallucination free AI
      true,  // Unlimited knowledge uploads & updates
      true,  // 24x7 support
      true,  // AWS, Azure or Google Cloud
      true,  // Self host LLM option
    ],
    cta: "Contact Sales",
    isPopular: false,
  },
];

const FeatureItem = ({ included, feature }) => (
  <li className="flex items-center space-x-2">
    {included ? (
      <Check className="text-green-500 w-5 h-5" />
    ) : (
      <X className="text-gray-400 w-5 h-5" />
    )}
    <span className={included ? "text-gray-700" : "text-gray-400"}>{feature}</span>
  </li>
);

const PlanCard = ({ plan }) => (
  <Card className={`w-full ${plan.isPopular ? "border-blue-600 shadow-lg relative" : "border-gray-200"} hover:shadow-xl`}>
    {plan.isPopular && (
      <div className="absolute -top-3 left-0 right-0 mx-auto w-fit bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
        Popular
      </div>
    )}
    <CardHeader className="text-center pt-6 pb-4">
      <h3 className="text-xl font-bold">{plan.name}</h3>
      <p className="text-gray-500 text-sm">{plan.description}</p>
      <div className="mt-4 flex items-baseline justify-center">
        <span className="text-3xl font-bold">{plan.price}</span>
        {plan.price !== "Get a Quote" && <span className="ml-1 text-gray-500 text-sm">/conversation</span>}
      </div>
    </CardHeader>
    <CardContent className="pt-6">
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <FeatureItem key={idx} included={plan.included[idx]} feature={feature} />
        ))}
      </ul>
    </CardContent>
    <CardFooter className="pt-6 pb-8">
      <Button className={`w-full py-6 ${plan.isPopular ? "bg-blue-600 hover:bg-blue-700" : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"}`}>
        {plan.cta}
      </Button>
    </CardFooter>
  </Card>
);

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-700 mb-3">PRICING</Badge>
          <h2 className="text-4xl font-bold">Choose the Right Plan</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Start for free or scale as you grow with our Pro and Enterprise plans.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <PlanCard key={idx} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
