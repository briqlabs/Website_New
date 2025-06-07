import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RazorpayPayment from "@/components/RazorpayPayment";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const selectedPlan = searchParams.get("plan") || "pro";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="section-padding bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Complete Your Purchase
              </h1>
             
            </div>

            <RazorpayPayment selectedPlan={selectedPlan} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Payment;
