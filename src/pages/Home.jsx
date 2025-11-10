import React from "react";
import PromoBanner from "../components/PromoBanner";
import FeaturedProducts from "../components/FeaturedProducts";
import CategorySection from "../components/CategorySection";
import PromoCards from "../components/PromoCards";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <PromoBanner />
      <FeaturedProducts />
      <CategorySection />
      <PromoCards />
      <Footer />
    </div>
  );
};

export default Home;
