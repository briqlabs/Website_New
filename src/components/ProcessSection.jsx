import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FileText, Link2, MessageSquare, Bot } from "lucide-react";

function ProcessCard({ title, description, icon: Icon, className, robotMessage }) {
  return (
    <div className={`flex flex-col gap-6 }`}>
      <div className="flex justify-end ">
      <Card className="w-fit relative bg-white border-gray-100 shadow-sm border-1px p-6">
      <div className="flex justify-end gap-4">
        <div>
          <h3 className="flex justify-end items-end text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
            <Icon className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>
    </Card>
      </div>
     
      {robotMessage && (
        <div className="w-fit bg-purple-50    border-[1px]  rounded-lg p-4 flex items-start gap-3">
          <Bot className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
          <p className="text-gray-700">{robotMessage}</p>
        </div>
      )}
    </div>
  );
}

function IntegrationBadge({ name }) {
  return (
    <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm py-2 px-6">
      {name}
    </Badge>
  );
}

function ProcessSection() {
  const steps = [
    {
      title: "Upload Files",
      description: "Train the AI by uploading your documents, PDFs, and other files",
      icon: FileText,
      robotMessage: "I'll analyze your files and build a custom knowledge base",
    },
    {
      title: "Add Website Links",
      description: "Connect website content to expand understanding",
      icon: Link2,
      robotMessage: "I'll crawl the websites and integrate the information",
    },
    {
      title: "Integrate Applications",
      description: "Connect with Slack, MS Teams, and other platforms",
      icon: MessageSquare,
      robotMessage: "I'll establish secure connections with your apps for seamless communication",
    },
    {
      title: "Chat with AI",
      description: "Start interacting with your customized AI assistant",
      icon: Bot,
      robotMessage: "I'm ready to help with your specific needs using the knowledge we've built together",
    },
  ];

  const integrations = ["Slack", "Microsoft Teams", "Discord", "Email"];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-purple-600 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Create your custom AI solution trained on your specific data, integrated with your tools, and ready to assist your team
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <ProcessCard
              key={index}
              {...step}
              className={`animate-fade-in animate-delay-${index * 100}`}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">Supported Integrations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <IntegrationBadge key={index} name={integration} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
