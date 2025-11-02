import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X, LogOut } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Example: user info (you can replace it with your auth logic)
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // ===== Logout Handler =====
  const handleLogout = () => {
    localStorage.removeItem("user"); // remove token/user data
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md border-b border-pink-100 z-50">
      <div className="container mx-auto px-5 py-3 flex items-center justify-between">
        {/* ===== Logo ===== */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3446/3446367.png"
            alt="logo"
            className="w-10 h-10"
          />
          <span className="text-xl font-bold text-pink-600">Mobile Shop</span>
        </Link>

        {/* ===== Desktop Menu ===== */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-pink-600 font-medium transition"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-gray-700 hover:text-pink-600 font-medium transition"
          >
            Products
          </Link>
          {user && (
            <Link
              to="/dashboard"
              className="text-gray-700 hover:text-pink-600 font-medium transition"
            >
              Dashboard
            </Link>
          )}
          <Link
            to="/cart"
            className="relative flex items-center text-gray-700 hover:text-pink-600 transition"
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>

          {/* ===== Conditional Login / Logout ===== */}
          {user ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-gray-100 text-pink-600 px-4 py-2 rounded-xl hover:bg-gray-200 transition"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* ===== Mobile Menu Button ===== */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ===== Mobile Menu ===== */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-pink-100 px-5 py-4 space-y-3 shadow-lg">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-pink-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-pink-600 font-medium"
          >
            Products
          </Link>
          {user && (
            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-pink-600 font-medium"
            >
              Dashboard
            </Link>
          )}
          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-gray-700 hover:text-pink-600 font-medium"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Cart (0)</span>
          </Link>

          {/* ===== Mobile Login / Logout ===== */}
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="w-full bg-gray-100 text-pink-600 py-2 rounded-xl hover:bg-gray-200 transition flex items-center justify-center gap-2"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block bg-pink-500 text-white text-center py-2 rounded-xl hover:bg-pink-600 transition"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
