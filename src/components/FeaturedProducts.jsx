import React, { useState } from "react";
import backgroundImg from "../assets/makeup-background.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    name: "Product 1",
    description:
      "A long-lasting foundation that gives you a flawless matte finish all day.",
    price: "$199.99",
    rating: 4,
  },
  {
    name: "Product 2",
    description:
      "Enhance your natural glow with this lightweight, dewy highlighter.",
    price: "$149.99",
    rating: 5,
  },
  {
    name: "Product 3",
    description:
      "A hydrating lip tint with rich pigment and a comfortable wear.",
    price: "$99.99",
    rating: 3,
  },
  {
    name: "Product 4",
    description:
      "Complete your look with this all-in-one eyeshadow palette of warm neutrals.",
    price: "$249.99",
    rating: 5,
  },
  {
    name: "Product 5",
    description:
      "Keep your makeup fresh for hours with this setting spray infused with aloe.",
    price: "$129.99",
    rating: 4,
  },
  {
    name: "Product 6",
    description:
      "A volumizing mascara that lifts, separates, and defines every lash.",
    price: "$299.99",
    rating: 5,
  },
];

function FeaturedProducts() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 5 < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleProducts = products.slice(startIndex, startIndex + 5);

  return (
    <div className="w-full bg-white py-11 px-3 sm:px-4 relative">
      {/* Left Arrow */}
      {startIndex > 0 && (
        <button
          type="button"
          onClick={handlePrev}
          className="absolute z-10 left-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-200 rounded-full p-2 sm:p-3 shadow"
        >
          <FaChevronLeft size={20} />
        </button>
      )}

      {/* Right Arrow */}
      {startIndex + 5 < products.length && (
        <button
          type="button"
          onClick={handleNext}
          className="absolute z-10 right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-200 rounded-full p-2 sm:p-3 shadow"
        >
          <FaChevronRight size={20} />
        </button>
      )}

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {visibleProducts.map((product, index) => (
          <div
            key={index}
            className="bg-gray-100 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 relative group flex flex-col"
          >
            <img
              src={backgroundImg}
              alt={product.name}
              className="w-full h-32 sm:h-40 object-cover rounded"
            />

            {/* Add to Cart Button - Show on Hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
              <button className="w-full bg-red-500 text-white py-2 sm:py-2.5 hover:bg-red-600 text-sm sm:text-base">
                Add to Cart
              </button>
            </div>

            <h2 className="text-base sm:text-lg font-semibold mt-4">
              {product.name}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              {product.description}
            </p>
            <p className="text-sm sm:text-md font-bold mt-2">{product.price}</p>
            <div className="mt-2 text-yellow-500 text-sm sm:text-base">
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
