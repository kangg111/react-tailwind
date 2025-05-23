import React from "react";

function Newsletter() {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Stay Updated on My Latest Projects & Insights
          </h1>
          <p>
            Subscribe to my newsletter to get updates on my latest web
            development projects, and more.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#95c4b8] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{" "}
            <a href="/privacy-policy" className="text-[#95c4b8]">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
