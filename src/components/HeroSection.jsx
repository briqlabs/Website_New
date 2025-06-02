import { Button } from "@/components/ui/button";
import { ArrowRight, MousePointer, RefreshCw, Shield, Sparkles } from "lucide-react";
import DemoDialog from "./DemoDialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleLogin =  () => {
    window.location.href = 'http://localhost:3000';
  }

  const [isDemoOpen, setIsDemoOpen] = useState(false);
  return (
    <section className="pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-60"></div>
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col space-y-8 animate-slide-up">
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                Next-Gen AI Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Business with <span className="text-gradient">Intelligent AI</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
            Briqlabs powers your vision with custom AI solutions — fueling innovation, scaling operations, and unlocking future potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-6 rounded-xl text-lg group"
               onClick={handleLogin}
              >
                Start For Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
             <Button 
                variant="outline" 
                className="text-blue-700 border-blue-200 hover:bg-blue-50 font-medium px-8 py-6 rounded-xl text-lg"
                onClick={() => setIsDemoOpen(true)}
              >
                Book a Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center">
                <Shield className="text-blue-600 h-5 w-5 mr-2" />
                <span className="text-sm text-gray-600">Enterprise-grade security</span>
              </div>
              <div className="flex items-center">
                <RefreshCw className="text-blue-600 h-5 w-5 mr-2" />
                <span className="text-sm text-gray-600">Continuous learning</span>
              </div>
              <div className="flex items-center">
                <MousePointer className="text-blue-600 h-5 w-5 mr-2" />
                <span className="text-sm text-gray-600">Easy integration</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-left animate-delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-2xl transform rotate-3"></div>
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <span>briq-ai-platform</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-semibold">AI</span>
                    </div>
                    <div className="font-semibold">Data Analysis</div>
                  </div>
                  <div className="ml-11 text-sm text-gray-600">Processing 3.4M data points...</div>
                  <div className="w-full h-2 bg-blue-100 rounded-full mt-2">
                    <div className="w-3/4 h-full bg-blue-500 rounded-full animate-pulse-slow"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-xs">01</span>
                    </div>
                    <div className="text-sm">Data ingestion complete</div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-xs">02</span>
                    </div>
                    <div className="text-sm">AI models training</div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-gray-200 rounded-md flex items-center justify-center mr-3">
                      <span className="text-gray-600 text-xs">03</span>
                    </div>
                    <div className="text-sm text-gray-400">Insights generation</div>
                  </div>
                </div>

                <div className="bg-blue-600 text-white p-3 rounded-lg text-sm font-medium text-center">
                  Estimated completion: 3m 24s
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
      {/* Demo Dialog */}
      <DemoDialog isOpen={isDemoOpen} onOpenChange={setIsDemoOpen} />
    </section>
  );
};

export default HeroSection;
