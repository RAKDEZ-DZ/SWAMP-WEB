
'use client'

import React, { useEffect, useState } from "react";
import { Navbar, Footer } from "@/components";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import Faqs from "./faqs";
import { Loading3D } from "@/components/loading3D";
import Hero from "./hero";
import Contact from "@/components/contact";
import Carousel from "@/components/Carousel";
import PricingSection from "@/components/pricings";

export default function Campaign() {
  const [showContent, setShowContent] = useState(false);
  const [heroPreloaded, setHeroPreloaded] = useState(false);

  useEffect(() => {
    const handlePreloading = async () => {
      const minLoadingTime = new Promise(resolve => 
        setTimeout(resolve, 5000)
      );

      const preloadResources = new Promise<void>(resolve => {
        const img = new Image();
        img.onload = () => setHeroPreloaded(true);
        img.onerror = () => setHeroPreloaded(true);
        
        setTimeout(() => {
          setHeroPreloaded(true);
          resolve();
        }, 100);
      });

      await Promise.all([minLoadingTime, preloadResources]);
      
      setShowContent(true);
    };
    handlePreloading();
  }, []);

  if (!showContent) {
    return (
      <div>
        <Loading3D />
        <div style={{ 
          position: 'absolute', 
          left: '-9999px', 
          visibility: 'hidden',
          pointerEvents: 'none'
        }}>
          <Hero />
        </div>
      </div>
    );
  }

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