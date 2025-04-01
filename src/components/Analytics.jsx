import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4 transform transition-all duration-500 ease-in-out hover:scale-105"
          src={Laptop}
          alt="Laptop"
        />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#95c4b8] font-bold">
            Web Development Portfolio
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Showcasing My Web Development Projects
          </h1>
          <p>
            I'm a passionate web developer with a focus on building clean and
            efficient web applications. This section showcases my most recent
            projects that demonstrate my skills in React, JavaScript, and web
            development.
          </p>

          <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
