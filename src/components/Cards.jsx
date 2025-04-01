import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">UI/UX Design</h2>
          <p className="text-center text-4xl font-bold">3+ Designs Completed</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Wireframing & Prototyping</p>
            <p className="py-2 border-b mx-8">User Research & Testing</p>
            <p className="py-2 border-b mx-8">UI/UX Design for Web & Mobile</p>
          </div>
          <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3">
            View Design
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">UI/UX Design</h2>
          <p className="text-center text-4xl font-bold">3+ Designs Completed</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Wireframing & Prototyping</p>
            <p className="py-2 border-b mx-8">User Research & Testing</p>
            <p className="py-2 border-b mx-8">UI/UX Design for Web & Mobile</p>
          </div>
          <button className="bg-[#95c4b8] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            View Design
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">UI/UX Design</h2>
          <p className="text-center text-4xl font-bold">3+ Designs Completed</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Wireframing & Prototyping</p>
            <p className="py-2 border-b mx-8">User Research & Testing</p>
            <p className="py-2 border-b mx-8">UI/UX Design for Web & Mobile</p>
          </div>
          <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3">
            View Design
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
