import React from "react";
import { Truck, ShieldCheck, Gift, RefreshCw, Zap, Leaf } from "lucide-react";

const featuresData = [
  {
    icon: <Truck className="w-8 h-8 text-pink-500" />,
    title: "Fast Delivery",
    description: "Get your orders delivered lightning-fast to your doorstep.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-pink-500" />,
    title: "Secure Payment",
    description: "100% secure payment with all major cards and wallets.",
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-pink-500" />,
    title: "Easy Returns",
    description: "Hassle-free returns within 30 days for your peace of mind.",
  },
  {
    icon: <Gift className="w-8 h-8 text-pink-500" />,
    title: "Exclusive Deals",
    description: "Special discounts and offers for our loyal customers.",
  },
  {
    icon: <Zap className="w-8 h-8 text-pink-500" />,
    title: "Latest Technology",
    description: "Get the newest smartphones and gadgets with cutting-edge tech.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-pink-500" />,
    title: "Eco-Friendly",
    description: "Sustainable and eco-friendly packaging for every order.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Why Shop With Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:scale-105 transition-transform"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
