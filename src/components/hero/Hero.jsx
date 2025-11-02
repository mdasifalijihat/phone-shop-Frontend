import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-pink-600">Mobile Shop</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Your one-stop destination for the latest and greatest mobile phones.
        </p>
        <a
          href="/products"
          className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-pink-600 transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
