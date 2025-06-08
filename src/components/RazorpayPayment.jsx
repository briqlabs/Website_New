import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Shield, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const paymentPlans = [
  {
    id: "free",
    name: "Free",
    price: 0,
    features: [
      "Up to 5 GPT responses per day",
      "Access to basic solutions",
      "Community support",
      "Single user"
    ]
  },
  {
    id: "pro",
    name: "Pro",
    price: 2900,
    originalPrice: 3500,
    features: [
      "Unlimited GPT responses",
      "Access to all solutions",
      "Priority support",
      "Up to 5 team members",
      "Custom branding"
    ],
    popular: true
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 9900,
    originalPrice: 12000,
    features: [
      "Unlimited GPT-4 responses",
      "Custom solutions development",
      "Dedicated account manager",
      "Unlimited team members",
      "SSO and advanced security",
      "API access"
    ]
  }
];

const RazorpayPayment = ({ selectedPlan = "pro" }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize active plan from URL param or fallback to prop or 'pro'
  const initialPlan = searchParams.get("plan") || selectedPlan || "pro";
  const [activePlanId, setActivePlanId] = useState(initialPlan);

  // Sync URL if activePlanId changes independently (e.g. initialPlan prop changes)
  useEffect(() => {
    if (searchParams.get("plan") !== activePlanId) {
      setSearchParams({ plan: activePlanId });
    }
  }, [activePlanId, searchParams, setSearchParams]);

  const [loading, setLoading] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const plan = paymentPlans.find(p => p.id === activePlanId) || paymentPlans[1];

  const handlePayment = async () => {
    if (!customerDetails.name || !customerDetails.email || !customerDetails.phone) {
      toast.error("Please fill in all required details");
      return;
    }

    setLoading(true);

    try {
      const options = {
        key: "zxPZYX3CS2QniXh1Y0nimVRN", // Replace with your Razorpay key
        amount: plan.price * 100,
        currency: "INR",
        name: "Briqlabs",
        description: `${plan.name} Plan Subscription`,
        order_id: "order_" + Date.now(),
        handler: function (response) {
          toast.success("Payment successful! Welcome to " + plan.name + " plan.");
          console.log("Payment ID:", response.razorpay_payment_id);
          console.log("Order ID:", response.razorpay_order_id);
          console.log("Signature:", response.razorpay_signature);
        },
        prefill: {
          name: customerDetails.name,
          email: customerDetails.email,
          contact: customerDetails.phone
        },
        notes: {
          plan: plan.id,
          customer_id: "customer_" + Date.now()
        },
        theme: {
          color: "#3B82F6"
        }
      };

      if (typeof window !== 'undefined' && window.Razorpay) {
        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response) {
          toast.error("Payment failed. Please try again.");
          console.error("Payment failed:", response.error);
        });
        rzp.open();
      } else {
        toast.error("Payment gateway not available. Please try again later.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Payment error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Plan Selection */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">Choose Your Plan</h2>
          <div className="space-y-4">
            {paymentPlans.map((planOption) => (
              <Card 
                key={planOption.id}
                onClick={() => {
                  setActivePlanId(planOption.id);
                  setSearchParams({ plan: planOption.id });
                }}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  activePlanId === planOption.id ? 'ring-2 ring-blue-500 border-blue-500' : ''
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold">{planOption.name}</h3>
                      {planOption.popular && <Badge>Popular</Badge>}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        {planOption.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ₹{planOption.originalPrice}
                          </span>
                        )}
                        <span className="text-lg font-bold">
                          {planOption.price === 0 ? 'Free' : `₹${planOption.price}`}
                        </span>
                      </div>
                      {planOption.price > 0 && (
                        <span className="text-sm text-gray-600">/month</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Selected Plan Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{plan.name} Plan</span>
              {plan.popular && <Badge>Popular Choice</Badge>}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg">Plan Price:</span>
                <div className="text-right">
                  {plan.originalPrice && (
                    <span className="text-sm text-gray-500 line-through block">
                      ₹{plan.originalPrice}/month
                    </span>
                  )}
                  <span className="text-2xl font-bold text-blue-600">
                    {plan.price === 0 ? 'Free' : `₹${plan.price}/month`}
                  </span>
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="font-medium mb-2">Features Included:</h4>
                <ul className="space-y-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment Form */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Payment Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={customerDetails.name}
                onChange={(e) => setCustomerDetails(prev => ({...prev, name: e.target.value}))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={customerDetails.email}
                onChange={(e) => setCustomerDetails(prev => ({...prev, email: e.target.value}))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                placeholder="Enter your phone number"
                value={customerDetails.phone}
                onChange={(e) => setCustomerDetails(prev => ({...prev, phone: e.target.value}))}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <span className="font-medium">Total Amount:</span>
              <span className="text-xl font-bold text-blue-600">
                {plan.price === 0 ? 'Free' : `₹${plan.price}`}
              </span>
            </div>

            {plan.price > 0 ? (
              <Button 
                onClick={handlePayment} 
                disabled={loading}
                className="w-full"
                size="lg"
              >
                {loading ? "Processing..." : `Pay ₹${plan.price}`}
              </Button>
            ) : (
              <Button className="w-full" size="lg">
                Get Started for Free
              </Button>
            )}

            <div className="text-xs text-gray-500 mt-2">
              By proceeding, you agree to our Terms of Service and Privacy Policy.
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-3 text-sm text-gray-600">
            <Shield className="h-5 w-5 text-blue-500" />
            <span>Secure payment powered by Razorpay</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RazorpayPayment;
