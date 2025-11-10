import React from "react";
import { ReactTyped } from "react-typed";
import backgroundImg from "../assets/makeup-background.jpg";

const PromoBanner = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center text-white pt-24"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Overlay Layer */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[900px] w-full h-full mx-auto text-center flex flex-col justify-center">
        <p className="text-[#95c4b8] font-bold p-2 uppercase">
          First Purchase Offer
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Get 10% Off*
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            What We Have:
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={[
              "Eyeshadow",
              "Lipstick",
              "Foundation",
              "Concealer",
              "Eyeliner",
              "Mascara",
              "Setting spray",
              "Blush",
              "Highlighter",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <div className="text-3xl mb-5">
          <p>Get a discount on your first purchase with a promo code!</p>
        </div>
        <p className="md:text-2xl text-xl text-gray-300 mb-5">
          Use Code '<strong>BUYNOW111</strong>'
        </p>
        <button className="bg-red-500 w-[200px] font-medium my-6 mx-auto py-3 text-whit">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
