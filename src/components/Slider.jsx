

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

// Core Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Swiper Modules
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

export default function Slider() {
  
const navigator = useNavigate();
  const slidesData = [
    { id: 1, src: "/images/slide1.png", tag: "ELITE CORPORATE FUNCTIONS.", title: "SEAMLESS EXECUTIVE HOSPITALITY" },
    { id: 2, src: "/images/slide2.png", tag: "THE FAIRYTALE WEDDING.", title: "CRAFTING SPECTACULAR MARRIAGES" },
    { id: 3, src: "/images/slide7.png", tag: "PRE-WEDDING CELEBRATIONS.", title: "HIGH-ENERGY DJ LIGHT SYSTEM" },
    { id: 4, src: "/images/slide4.png", tag: "CULTURAL & FESTIVE GALAS.", title: "AUTHENTIC GATHERINGS IN HIMACHAL" },
  ];

  return (
    /* 1. FIXED HEIGHT WRAPPER: Dictates explicit canvas space boundaries underneath your top header navigation bar */
    <div className="w-full min-h-[60vh] lg:h-[88vh] relative bg-black font-sans overflow-hidden">
      
      <Swiper 
        autoplay={{ delay: 4000, disableOnInteraction: false }} 
        loop={true}  
        navigation={true} 
        effect={'fade'} /* Dissolves background background structures smoothly smoothly */
        crossFade={true}
        modules={[Navigation, Autoplay, EffectFade]}
        className="w-full h-full"
      >
        {slidesData.map((slide) => (
          /* 🛠️ FIXED: Removed flex-center layout logic which was bunching up files against left margins */
          <SwiperSlide key={slide.id} className="w-full h-full relative bg-black overflow-hidden block">
            
            {/* 2. BACKGROUND TEXTURE LAYER: Blurred mirror backdrop stretching edge-to-edge across screen bounds */}
            <img 
              className="absolute inset-0 w-full h-full object-cover blur-xl opacity-25 scale-110 select-none pointer-events-none z-0" 
              src={slide.src} 
              alt="" 
            />
            
            {/* Dark contrast masking veil safeguarding text readability levels */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/40 to-black/70 z-10 pointer-events-none" />

            {/* ─── 🛠️ THE NEW DUAL COLUMN CONTAINER (Splits laptop layout perfectly 50/50) ─── */}
<div className="relative z-20 w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 lg:px-16 py-8">
              
              {/* 📸 LEFT half (50%): Dedicated container keeping your real mobile image perfectly uncropped */}
       <div className="w-full lg:w-1/2 h-auto lg:h-full flex justify-center items-center p-4 lg:p-6">
                <img 
                 className="w-[85%] max-w-[450px] h-auto object-contain rounded-md shadow-2xl border border-white/10
" 
                  src={slide.src} 
                  alt={slide.title} 
                />
              </div>

              {/* ✍️ RIGHT half (50%): Beautiful editorial left-aligned typography block matching your image blueprint */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 lg:pl-16 lg:pr-8 mt-6 lg:mt-0">
                <p className="text-white/80 text-[11px] font-bold tracking-[3px] uppercase mb-4 drop-shadow-sm">
                  {slide.tag}
                </p>
                
                <h1 className="font-serif text-white text-3xl xl:text-4xl font-bold leading-snug tracking-wide mb-8 drop-shadow-md max-w-[500px]">
                  {slide.title}
                </h1>
                
                {/* Action button trigger linked to down-page anchor target identifiers */}
                <a 
                onClick={() => navigator("/services")}
                  href="services"
                  className="bg-[#D4AF37] hover:bg-[#b8932e] text-white font-bold text-[11px] tracking-widest uppercase px-8 py-4 rounded-sm shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Explore Our Services
                </a>
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


