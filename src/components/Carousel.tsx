"use client";
import { Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const screenshots = [
  "/swamp-left.png",
  "/swamp-portrait.png",
];

export default function ModernCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-8 px-4 perspective-1000">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-6xl font-black text-dark leading-tight mb-6">
          {t('Carousel.App Interfaces')}
          <div className="flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
          </div>
        </h2>
        <Typography
          variant="lead" className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 ">
           {t('Carousel.Découvrez nos écrans dapplication')}
        </Typography>
      </div>

      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#159FD8]/20 via-[#28A9DF]/20 to-[#159FD8]/20 rounded-[3rem] blur-3xl transform rotate-1 scale-105"></div>

        <div className="relative backdrop-blur-2xl rounded-2xl p-0 shadow-2xl overflow-hidden transform hover:rotateY-2 hover:rotateX-1 transition-all duration-700 preserve-3d">

          <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#159FD8]/30 via-[#28A9DF]/20 to-transparent rounded-full blur-3xl animate-pulse transform translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#28A9DF]/30 via-[#159FD8]/20 to-transparent rounded-full blur-3xl animate-pulse transform -translate-x-20 translate-y-20"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#159FD8]/20 to-[#28A9DF]/20 rounded-full blur-2xl animate-spin-slow transform -translate-x-32 -translate-y-32"></div>
          </div>

          <div className="relative z-10 transform preserve-3d">
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl transform hover:scale-[1.00] sm:hover:scale-[1.00] transition-all duration-700 preserve-3d">

              <div className="relative h-[400px] md:h-[480px] perspective-1000">
                {screenshots.map((src, index) => {
                  const offset = index - currentIndex;
                  const isActive = index === currentIndex;

                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ease-out preserve-3d group ${isActive ? 'z-20' : 'z-10'
                        }`}
                      style={{
                        transform: `
                          translateX(${offset * 300}px)
                          rotateY(${offset * 25}deg)
                          scale(${isActive ? 1 : 0.8})
                          translateZ(${isActive ? 50 : -100}px)
                        `,
                        opacity: Math.abs(offset) > 1 ? 0 : (isActive ? 1 : 0.6),
                        filter: isActive ? 'blur(0px)' : 'blur(2px)'
                      }}
                    >
                      <div className="relative h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-2 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#159FD8]/20 via-transparent to-[#28A9DF]/20 rounded-2xl animate-pulse"></div>

                        <img
                          src={src}
                          alt={`Interface ${index + 1}`}
                          className="w-full h-full object-contain rounded-xl"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20 rounded-xl pointer-events-none"></div>
                        <div className="absolute top-4 left-4 w-16 h-16 bg-[#159FD8]/30 rounded-full blur-xl"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute top-1/2 -translate-y-1/2 left-4 w-12 h-12 bg-gradient-to-r from-[#159FD8] to-[#28A9DF] hover:from-[#28A9DF] hover:to-[#159FD8] backdrop-blur-xl rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group/btn opacity-80 hover:opacity-100 hover:scale-110 transform hover:-translate-x-1 preserve-3d border border-white/20"
            >
              <svg className="w-5 h-5 text-white transition-transform group-hover/btn:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
              <div className="absolute inset-0 bg-white/20 rounded-full blur opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 -translate-y-1/2 right-4 w-12 h-12 bg-gradient-to-r from-[#159FD8] to-[#28A9DF] hover:from-[#28A9DF] hover:to-[#159FD8] backdrop-blur-xl rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group/btn opacity-80 hover:opacity-100 hover:scale-110 transform hover:translate-x-1 preserve-3d border border-white/20"
            >
              <svg className="w-5 h-5 text-white transition-transform group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
              <div className="absolute inset-0 bg-white/20 rounded-full blur opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Indicateurs avec effet 3D - couleurs bleues */}
        <div className="flex justify-center mt-6 space-x-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-3 h-3 rounded-full transition-all duration-500 transform hover:scale-125 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-[#159FD8] to-[#28A9DF] shadow-lg shadow-[#159FD8]/50 scale-110'
                  : 'bg-gray-400/50 hover:bg-gray-300'
              }`}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#159FD8] to-[#28A9DF] rounded-full animate-ping"></div>
              )}
            </button>
          ))}
        </div>

        {/* Éléments décoratifs flottants - tons bleus */}
        <div className="absolute top-12 right-16 w-6 h-6 bg-gradient-to-r from-[#159FD8] to-[#28A9DF] rounded-full opacity-60 animate-bounce transform rotate-45"></div>
        <div className="absolute bottom-20 left-12 w-4 h-4 bg-gradient-to-r from-[#28A9DF] to-[#159FD8] rounded-full opacity-60 animate-ping transform rotate-12"></div>
        <div className="absolute top-32 left-32 w-3 h-3 bg-gradient-to-r from-[#159FD8] to-[#28A9DF] rounded-full opacity-60 animate-pulse transform -rotate-12"></div>
        <div className="absolute top-20 right-32 w-5 h-5 bg-gradient-to-r from-[#28A9DF] to-[#159FD8] rounded-full opacity-40 animate-spin-slow"></div>

        {/* Particules flottantes - tons bleus */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-[#159FD8]/40 to-[#28A9DF]/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .text-shadow { text-shadow: 0 2px 4px rgba(0,0,0,0.3); }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(90deg); }
          50% { transform: translateY(-5px) rotate(180deg); }
          75% { transform: translateY(-15px) rotate(270deg); }
        }
        
        .rotateY-2 { transform: rotateY(2deg); }
        .rotateX-1 { transform: rotateX(1deg); }
      `}</style>
    </div>
  );
}