import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import DemoRequestForm from "./DemoRequestForm";
import RequestConfirmation from "./RequestConfirmation";

const DemoDialog = ({ isOpen, onOpenChange }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSuccess = () => {
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => setIsSubmitted(false), 300);
  };

  const handleExplore = () => {
    onOpenChange(false);
    setTimeout(() => setIsSubmitted(false), 300);
    document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] md:max-w-[650px] p-0 overflow-hidden">
        {isSubmitted ? (
          <RequestConfirmation onClose={handleClose} onExplore={handleExplore} />
        ) : (
          <DemoRequestForm onSuccess={handleSuccess} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DemoDialog;
