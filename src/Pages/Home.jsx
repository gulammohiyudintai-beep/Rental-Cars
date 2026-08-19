import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CarsSection from "../component/CarsSection";
import WhyChooseUs from "../component/WhyChooseUs";
import PopularLocations from "../component/PopularLocations ";
import Testimonials from "../component/Testimonials";
import CTABanner from "../component/CTABanner";

import Hero from "../component/Hero";


export default function Home() {
  const { hash } = useLocation();

  // URL mein #local-rental, #luxury-cars, #locations, #offers aaye
  // toh us section tak smooth scroll kar do
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
    <Hero/>
      <CarsSection />
      <WhyChooseUs />
      <PopularLocations />
      <Testimonials />
      <CTABanner />
    </>
  );
}