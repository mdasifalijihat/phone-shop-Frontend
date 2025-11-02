import React from "react";
import { Button } from "../ui/button";
import SamsungImg from "../../assets/samsung.png"; // import image

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-24 overflow-hidden">
      <div className="container mx-auto px-6 text-center md:text-left flex flex-col-reverse md:flex-row items-center gap-10">
        {/* ===== Text Content ===== */}
        <div className="md:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
            Welcome to <span className="text-pink-600">Mobile Shop</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Discover cutting-edge smartphones at unbeatable prices. Your
            ultimate destination for mobile technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg px-6 py-3 rounded-xl transition">
              Shop Now
            </Button>
            <Button
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg px-6 py-3 rounded-xl transition"
            >
              View Details
            </Button>
          </div>
        </div>

        {/* ===== Image ===== */}
        <div className="md:w-1/2 relative">
          <img
            src={SamsungImg}
            alt="Smartphone"
            className="w-full max-w-lg mx-auto md:mx-0 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      {/* Optional Floating Shape */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </section>
  );
};

export default Hero;
