import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const RequestConfirmation = ({ onClose, onExplore }) => {
  return (
    <div className="p-8 max-w-xl mx-auto text-center">
      <div className="flex justify-center mb-8">
        <div className="rounded-full bg-green-500 p-3 w-20 h-20 flex items-center justify-center">
          <Check className="h-10 w-10 text-white" />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
      
      <p className="text-gray-600 text-lg mb-6">
        We've received your request.
      </p>
      
      <p className="text-gray-800 text-lg mb-8">
        Thank you for your interest in BriqLabs. Our team of AI
        experts will review your request and get back to you within
        24 hours to discuss how we can help with your specific
        needs.
      </p>
      
      <p className="text-gray-800 text-lg mb-10">
        In the meantime, you'll receive a confirmation email with
        more information about our services and process.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button 
          variant="outline"
          className="py-6 px-8 text-base" 
          onClick={onClose}
        >
          Back to Home
        </Button>
        
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white py-6 px-8 text-base"
          onClick={onExplore}
        >
          Explore Solutions
        </Button>
      </div>
    </div>
  );
};

export default RequestConfirmation;
