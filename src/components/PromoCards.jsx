import React from "react";
import backgroundImg from "../assets/makeup-background.jpg";
import { FaChevronRight } from "react-icons/fa";

function Card({ image, alt, title, description }) {
  return (
    <div className="w-full shadow-xl flex flex-col p-6 rounded-lg hover:scale-105 duration-300">
      <img
        src={image}
        alt={alt}
        className="rounded-md mb-4 w-full h-64 object-cover"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <button className="text-black w-full font-medium py-3 text-left flex items-center gap-2">
        SHOP NOW <FaChevronRight size={15} />
      </button>
    </div>
  );
}

function PromoCards() {
  const cardData = [
    {
      alt: "Holiday",
      title: "Holiday Arrives Early",
      description: "Get first dibs on this year’s new Holiday collection.",
    },
    {
      alt: "Foundation",
      title: "BEST SKIN EVER",
      description:
        "Enjoy buildable coverage and all-day comfort with Sephora Collection's NEW foundation.",
    },
    {
      alt: "Lipstick",
      title: "Luxe Lips for Less",
      description:
        "Swipe on vibrant color with our latest lipstick must-haves.",
    },
  ];

  return (
    <div className="w-full py-20 px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={backgroundImg}
            alt={card.alt}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default PromoCards;
