'use client'
import React, { useEffect, useState } from "react";
import { Navbar, Footer } from "@/components";
import VideoIntro from "@/components/video-intro";
import Feature from "@/components/feature";
import Faqs from "@/components/faqs";
import Hero from "@/components/hero";
import Contact from "@/components/contact";
import Carousel from "@/components/Carousel";
import PricingSection from "@/components/pricings";

export default function Campaign() {

  return (
    <>
      <Navbar />
      <Hero  />
      <VideoIntro />
      <Feature />
      <Carousel/>
      <Faqs />
      <PricingSection/>
      <Contact/>
      <Footer />
    </>
  );
}