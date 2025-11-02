import React from "react";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button"; // যদি আপনার ui folder থাকে
// যদি না থাকে, তাহলে নিচে থাকা Button টা সাধারণ <button> দিয়ে নিন

const sampleProducts = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    price: 1299,
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/bd/sm-s928bzahxxu/gallery/bd-galaxy-s24-ultra-s928-sm-s928bzahxxu-thumb-539173619?$172_172_PNG$",
    rating: 4.9,
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    price: 1499,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=470&hei=556&fmt=png-alpha&.v=1692893391444",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Xiaomi 14 Pro",
    price: 899,
    image:
      "https://i02.appmifile.com/635_operator_in/21/10/2023/8c2f6224be2a0877bde8a839fc0b8936.png",
    rating: 4.7,
  },
  {
    id: 4,
    name: "OnePlus 12",
    price: 999,
    image:
      "https://image01.oneplus.net/ebp/202312/12/1-m00-45-45-cpgm7whgzoaagdzyaabsj2ud2tk561.png",
    rating: 4.6,
  },
];

const Products = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-16 px-6">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Our <span className="text-pink-600">Products</span>
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            Explore the latest smartphones with powerful performance, stunning
            design, and great deals.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sampleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white/90 backdrop-blur-md border border-pink-100 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-contain p-4 hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="px-5 py-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex justify-center gap-1 text-yellow-500 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < Math.round(product.rating) ? "currentColor" : "none"}
                    />
                  ))}
                </div>

                <p className="text-pink-600 font-bold text-xl mt-3">
                  ${product.price}
                </p>

                <Button className="mt-4 w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white rounded-xl py-2 transition">
                  <ShoppingCart size={18} /> Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
