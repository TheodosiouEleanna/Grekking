"use client";

import React from "react";
import BannerCarousel from "./components/BannerCarousel";
import InfoSection from "./components/IconSection";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <div className=''>
      <div className='h-4 bg-gray-200'></div>
      <BannerCarousel />
      <InfoSection />
      <MainContent />
    </div>
  );
}
