import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const SecurityFeature = ({ title, description, icon, showDivider }) => (
  <div className="relative flex justify-between">
    <div className="p-8 space-y-2 max-w-xl">
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
    <div className="flex flex-col justify-end p-8">
      <img className="h-20 w-20 object-contain" src={icon} alt="Feature Icon" />
    </div>
    {showDivider && <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />}
  </div>
);

const SecuritySection = () => {
  const features = [
    {
      title: "Your data stays yours",
      description: "Your data is only accessible to your AI agent and is never used to train models.",
      icon: "/database.png"
    },
    {
      title: "Data encryption",
      description: "All data is encrypted at rest and in transit. We use industry-standard encryption algorithms.",
      icon: "/cyberpunk.png"
    },
    {
      title: "Secure integrations",
      description: "We use verified variables to ensure users can access only their own data in your systems.",
      icon: "/box.png"
    }
  ];

  return (
    <section  id="security" className="py-20 bg-white">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side */}
          <div>
            <Badge className="mb-4 text-xl bg-gray-100 text-pink-500 hover:bg-gray-200">
              Security
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Enterprise-grade<br />security & privacy
            </h2>
            <p className="text-xl text-gray-600 mb-4 max-w-md">
              We take security and compliance seriously. Chatbase is SOC 2 Type II and GDPR compliant, trusted by thousands of businesses to build secure and compliant AI Agents.
            </p>
            <div className="flex gap-6 mt-8">
              <img src="/aicpa.png" alt="AICPA Logo" className="h-24 w-24 object-contain" />
              <img src="/gdpr.png" alt="GDPR Logo" className="h-24 w-24 object-contain" />
            </div>
          </div>

          {/* Right Side */}
          <Card className="rounded-2xl border bg-white shadow-sm relative">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <SecurityFeature {...feature} showDivider={index !== features.length - 1} />
              </div>
            ))}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
