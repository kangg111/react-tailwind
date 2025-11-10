import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can integrate EmailJS or send to backend

    console.log("Form Submitted:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-24 px-4 min-h-screen bg-[#fdfdfd] text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div
          className={`
        transform transition-all duration-700 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
        >
          <h1 className="text-4xl font-bold mb-2 text-center mt-7">
            Contact Us
          </h1>
        </div>
        <p className="text-center text-gray-600 mb-12">
          We'd love to hear from you! Fill out the form or reach out using the
          contact info below.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <p className="text-gray-600">contact@example.com</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Phone</h2>
              <p className="text-gray-600">+1 (234) 567-8901</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Address</h2>
              <p className="text-gray-600">123 Main St, New York, NY 10001</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Working Hours</h2>
              <p className="text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white shadow-md rounded-lg p-8 transition-all duration-300"
          >
            {submitted && (
              <div className="p-4 mb-4 bg-green-100 border border-green-400 text-green-700 rounded">
                ✅ Your message has been sent!
              </div>
            )}
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5e3b3f]"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5e3b3f]"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5e3b3f]"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#5e3b3f] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#47292c] transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
