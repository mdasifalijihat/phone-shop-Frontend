import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-pink-100 via-purple-100 to-blue-100 py-12 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* ===== About Section ===== */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Mobile Shop</h2>
          <p className="text-gray-700 text-sm">
            Your ultimate destination for smartphones and accessories. Explore
            the latest tech at unbeatable prices!
          </p>
        </div>

        {/* ===== Quick Links ===== */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-pink-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-pink-600 transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-600 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-pink-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* ===== Contact Info ===== */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
          <p className="text-gray-700 text-sm mb-2">123 Main Street, City</p>
          <p className="text-gray-700 text-sm mb-2">+880 123 456 789</p>
          <p className="text-gray-700 text-sm flex items-center gap-2">
            <Mail className="w-4 h-4" /> support@mobileshop.com
          </p>
        </div>

        {/* ===== Newsletter ===== */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-700 text-sm mb-4">
            Subscribe for the latest updates and offers
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-xl border border-gray-300 w-full focus:outline-none"
            />
            <button className="bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600 transition">
              Subscribe
            </button>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="text-gray-700 hover:text-pink-600">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-600 text-sm mt-10 border-t border-gray-300 pt-6">
        &copy; 2025 Mobile Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
