import React from "react";

const About = () => {
  return (
    <div className="relative w-full min-h-screen text-white font-sans">
      {/* Background Video */}
      <iframe
        className="fixed w-full h-full -z-20"
        src="https://www.youtube.com/embed/LLJSfU8oD60?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&disablekb=1&playsinline=1&showinfo=0&loop=1&playlist=LLJSfU8oD60"
        title="About Us Video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      {/* Overlay for readability */}
      <div className="fixed w-full h-full bg-black/60 backdrop-blur-sm -z-10"></div>

      {/* Page Content */}
      <div className="relative max-w-4xl mx-auto px-6 py-40 space-y-6 text-xl">
        <p>
          Welcome to <strong>Web.</strong>, where innovation meets dedication.
          Since our founding in 2020, we have been committed to delivering
          high-quality products that not only meet but exceed the expectations
          of our clients.
        </p>
        <p>
          Our mission is to provide solutions that drive success, create value,
          and inspire growth. What sets us apart is our passion for excellence
          and our unwavering focus on customer satisfaction.
        </p>
        <p>
          Our team is made up of experienced professionals who bring creativity,
          expertise, and a results-driven mindset to everything we do. Whether
          it's a specific service or product, we take pride in every detail and
          strive to build long-term relationships with our clients.
        </p>
        <p>
          At Web., we believe in transparency, integrity, and continuous
          improvement. We are always evolving to stay ahead of industry trends,
          embracing new technologies and ideas to better serve our customers and
          community. Thank you for being a part of our journey.
        </p>
      </div>
    </div>
  );
};

export default About;
