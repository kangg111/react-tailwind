import React from "react";
import backgroundImg from "../assets/makeup-background.jpg";

const categories = [
  {
    name: "Makeup",
    image:
      "https://image-optimizer.production.sephora-asia.net/dam/5LKHyOllxSx2td7T8gAvWp/image/web-en-1741664352811-image(38).png",
  },
  {
    name: "Skincare",
    image:
      "https://image-optimizer.production.sephora-asia.net/dam/6V1ibHDNJOmyd0XkUmUts9/image/web-en-1741060589572-image(39).png",
  },
  {
    name: "Fragrance",
    image:
      "https://image-optimizer.production.sephora-asia.net/dam/4icwkaAFXuWvzhNJ60rKPZ/image/web-en-1741060564843-image(36).png",
  },
  {
    name: "Hair",
    image:
      "https://image-optimizer.production.sephora-asia.net/dam/7L2FHt7VSPQ42DuMhTa2MV/image/web-en-1741060580188-image(37).png",
  },
  {
    name: "Tools & Brushes",
    image:
      "https://image-optimizer.production.sephora-asia.net/dam/2Jqzvbwbvv2OsL6ZcM1IMb/image/web-en-1741799153074-image(40).png",
  },
  {
    name: "Bath & Body",
    image:
      "https://image-optimizer.production.sephora-asia.net/dam/5QvbZzaF8PKNmi1RI4cW29/image/web-en-1741060542576-image(35).png",
  },
];

const CategorySection = () => {
  return (
    <div className="w-full px-4 py-20 bg-[#5e3b3f]">
      {/* Inner container with background image over base color */}
      <div className="relative max-w-[1240px] mx-auto">
        {/* Background image layer inside content container */}
        <img
          src={backgroundImg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-15 rounded-lg"
        />

        {/* Content layer */}
        <div className="relative z-10 grid md:grid-cols-2 gap-10 p-6 rounded-lg text-white">
          {/* Left Column - Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold mb-4">
              Featured Categories
            </h2>
            <p className="text-lg leading-relaxed max-w-md">
              From hair to fragrance, and everything in between. Explore top
              beauty categories picked just for you.
            </p>
          </div>

          {/* Right Column - Category Cards */}
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl p-4 h-40 flex flex-col justify-between overflow-hidden shadow hover:shadow-xl transition-all group"
              >
                <h3 className="text-base font-semibold z-10 text-[#5e3b3f] group-hover:text-[#a46066]">
                  {category.name}
                </h3>
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute bottom-2 right-2 w-20 h-20 object-contain z-0 opacity-80 group-hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
