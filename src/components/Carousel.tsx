
// "use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";

// const screenshots = [
//   "/feature_phone-removebg.png",
//   "/feature_phone-removebg.png",
//   "/feature_phone-removebg.png",
//   "/feature_phone-removebg.png",
// ];

// export default function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const { t, i18n } = useTranslation();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="relative w-full max-w-6xl mx-auto my-12 px-4">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-2xl sm:text-3xl md:text-6xl font-black text-dark leading-tight mb-6">
//           {t('Carousel.App Interfaces')}
//           <div className="flex justify-center">
//             <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
//           </div>
//         </h2>
//         <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//           {t('Carousel.Découvrez nos écrans dapplication')}
//         </p>
//       </div>

//       <div className="relative group">
//         {/* Container principal */}
//         <div className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl overflow-hidden">

//           {/* Background animated */}
//           <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-blue-50 to-cyan-50 opacity-60"></div>
//           <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-violet-200/30 to-transparent rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full blur-3xl"></div>

//           {/* Zone d'affichage principale */}
//           <div className="relative z-10">
//             {/* <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 shadow-2xl"> */}
//             <div className="relative overflow-hidden rounded-3xl p-1 shadow-2xl">

//               {/* Container des images */}
//               <div className="relative overflow-hidden rounded-[1.4rem]">
//                 <div
//                   className="flex transition-all duration-1000 ease-out"
//                   style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//                 >
//                   {screenshots.map((src, index) => (
//                     <div
//                       key={index}
//                       className="w-full flex-shrink-0 relative group/slide"
//                     >
//                       {/* <Image
//                         src={src}
//                         alt={`Interface ${index + 1}`}
//                         className="w-full h-[500px] md:h-[600px] object-contain"
//                       /> */}
//                       <Image
//                         src={src}
//                         alt={`Interface ${index + 1}`}
//                         width={1200}   
//                         height={800}   
//                         className="w-full h-[500px] md:h-[600px] object-contain"
//                       />


//                       {/* Overlay avec info */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/slide:opacity-100 transition-all duration-500">
//                         <div className={`absolute bottom-6 ${i18n.language === "ar" ? "right-6" : "left-6"} text-white`} dir={i18n.language === "ar" ? "rtl" : "ltr"}>
//                           <h3 className="text-xl font-semibold mb-1">{t("Carousel.interface")} {index + 1}</h3>
//                           <p className="text-white/80 text-sm">{t("Carousel.screen")}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Contrôles de navigation */}
//             <button
//               aria-label="prevSlide"
//               onClick={prevSlide}
//               className="absolute top-1/2 -translate-y-1/2 left-4 w-16 h-16 bg-white/90 hover:bg-white backdrop-blur-md rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center group/btn opacity-0 group-hover:opacity-100 hover:scale-105"
//             >
//               <svg className="w-7 h-7 text-gray-700 transition-transform group-hover/btn:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>

//             <button
//               aria-label="nextSlide"
//               onClick={nextSlide}
//               className="absolute top-1/2 -translate-y-1/2 right-4 w-16 h-16 bg-white/90 hover:bg-white backdrop-blur-md rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center group/btn opacity-0 group-hover:opacity-100 hover:scale-105"
//             >
//               <svg className="w-7 h-7 text-gray-700 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>

//           </div>
//         </div>

//         {/* Éléments décoratifs flottants */}
//         <div className="absolute top-8 right-12 w-3 h-3 bg-violet-400 rounded-full animate-pulse opacity-60"></div>
//         <div className="absolute bottom-16 left-8 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
//         <div className="absolute top-24 left-24 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
//       </div>
//     </div>
//   );
// }


"use client";
import { Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const screenshots = [
  "/feature_phone-removebg.png",
  "/feature_phone-removebg.png",
  "/feature_phone-removebg.png",
  "/feature_phone-removebg.png",
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
      {/* Header avec effet de flottement */}
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
      {/* Container principal avec effet 3D */}
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Fond avec effet de profondeur */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20 rounded-[3rem] blur-3xl transform rotate-1 scale-105"></div>

        {/* Container principal */}
        <div className="relative backdrop-blur-2xl rounded-2xl p-0 shadow-2xl overflow-hidden transform hover:rotateY-2 hover:rotateX-1 transition-all duration-700 preserve-3d">
{/* opacity-0 group-hover:opacity-100 transition-opacity duration-300 */}
          {/* Éléments de fond animés */}
          <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-400/30 via-pink-400/20 to-transparent rounded-full blur-3xl animate-pulse transform translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-400/30 via-cyan-400/20 to-transparent rounded-full blur-3xl animate-pulse transform -translate-x-20 translate-y-20"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl animate-spin-slow transform -translate-x-32 -translate-y-32"></div>
          </div>

          {/* Zone d'affichage principale avec perspective 3D */}
          <div className="relative z-10 transform preserve-3d">
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl transform hover:scale-[1.00] sm:hover:scale-[1.00] transition-all duration-700 preserve-3d">

              {/* Container des images avec effet 3D */}
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
                      {/* Cadre avec effet holographique */}
                      <div className="relative h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-2 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 rounded-2xl animate-pulse"></div>

                        <img
                          src={src}
                          alt={`Interface ${index + 1}`}
                          className="w-full h-full object-contain rounded-xl"
                        />

                        {/* Reflets et éclairage */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20 rounded-xl pointer-events-none"></div>
                        <div className="absolute top-4 left-4 w-16 h-16 bg-white/30 rounded-full blur-xl"></div>

                        {/* Info overlay avec effet néon */}
                        {isActive && (
                          <div className={`absolute bottom-6 ${i18n.language === "ar" ? "right-6" : "left-6"} text-white `}>
                            {/* opacity-0 group-hover:opacity-100 transition-opacity duration-300 */}
                            <div className={`p-4`} dir={i18n.language === "ar" ? "rtl" : "ltr"}>
                              <h3 className="text-xl font-bold mb-1">{t("Carousel.interface")} {index + 1}</h3>
                              <p className="text-white/90 text-sm">{t("Carousel.screen")}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contrôles de navigation futuristes */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -translate-y-1/2 left-4 w-12 h-12 bg-gradient-to-r from-purple-600/90 to-pink-600/90 hover:from-purple-500 hover:to-pink-500 backdrop-blur-xl rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group/btn opacity-80 hover:opacity-100 hover:scale-110 transform hover:-translate-x-1 preserve-3d border border-white/20"
            >
              <svg className="w-5 h-5 text-white transition-transform group-hover/btn:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
              <div className="absolute inset-0 bg-white/20 rounded-full blur opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 -translate-y-1/2 right-4 w-12 h-12 bg-gradient-to-r from-purple-600/90 to-pink-600/90 hover:from-purple-500 hover:to-pink-500 backdrop-blur-xl rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group/btn opacity-80 hover:opacity-100 hover:scale-110 transform hover:translate-x-1 preserve-3d border border-white/20"
            >
              <svg className="w-5 h-5 text-white transition-transform group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
              <div className="absolute inset-0 bg-white/20 rounded-full blur opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Indicateurs avec effet 3D */}
        <div className="flex justify-center mt-6 space-x-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-3 h-3 rounded-full transition-all duration-500 transform hover:scale-125 ${index === currentIndex
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50 scale-110'
                : 'bg-gray-400/50 hover:bg-gray-300'
                }`}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping"></div>
              )}
            </button>
          ))}
        </div>

        {/* Éléments décoratifs flottants avec animation 3D */}
        <div className="absolute top-12 right-16 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-bounce transform rotate-45"></div>
        <div className="absolute bottom-20 left-12 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60 animate-ping transform rotate-12"></div>
        <div className="absolute top-32 left-32 w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-60 animate-pulse transform -rotate-12"></div>
        <div className="absolute top-20 right-32 w-5 h-5 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-40 animate-spin-slow"></div>

        {/* Particules flottantes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full animate-float"
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