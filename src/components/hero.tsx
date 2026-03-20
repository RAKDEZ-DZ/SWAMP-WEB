// "use client";
// import Image from "next/image";
// import { Button, Typography } from "@material-tailwind/react";
// import { useTranslation } from "react-i18next";

// function PhonesScene() {
//   return (
//     <div className="w-full flex items-end justify-center gap-4 px-2">
//       {/* Téléphone gauche */}
//       <div className="w-[45%] max-w-[180px] lg:max-w-[260px] transform -rotate-6 hover:rotate-0 transition-transform duration-500 drop-shadow-2xl">
//         <Image
//           src="/swamp-left.png"
//           alt="App screen 1"
//           width={300}
//           height={600}
//           className="w-full h-auto object-contain"
//         />
//       </div>

//       {/* Téléphone droit */}
//       <div className="w-[45%] max-w-[180px] lg:max-w-[220px] transform rotate-6 hover:rotate-0 transition-transform duration-500 drop-shadow-2xl mt-6">
//         <Image
//           src="/swamp-portrait.png"
//           alt="App screen 2"
//           width={300}
//           height={600}
//           className="w-full h-auto object-contain"
//         />
//       </div>
//     </div>
//   );
// }
// // Composant pour les boutons de téléchargement
// function DownloadButtons() {
//   const { t } = useTranslation();

//   return (
//     <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" >
//       <Button
//         size="lg"
//         aria-label="app store"
//         className="flex justify-center items-center gap-3 py-4 px-6 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-0"
//       >
//         <Image
//           width={24}
//           height={24}
//           src="/logos/logo-apple.png"
//           alt="app store"
//           className="w-6 h-6"
//           loading="lazy"
//         />
//         <span className="text-sm font-semibold mt-1">{t('Hero.App Store')}</span>
//       </Button>

//       <Button
//         size="lg"
//         aria-label="google store"
//         className="flex justify-center items-center gap-3 py-4 px-6 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-0"
//       >
//         <Image
//           width={24}
//           height={24}
//           src="/logos/logo-google.png"
//           alt="google play"
//           className="w-6 h-6"
//           loading="lazy"
//         />
//         <span className="text-sm font-semibold mt-1">{t('Hero.Google Play')}</span>
//       </Button>
//     </div>
//   );
// }

// export default function Hero() {
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === "ar";

//   const getAlignmentClasses = (centerOnMobile: boolean = true) => {
//     const base = centerOnMobile ? "text-center" : "";
//     const desktop = isRTL ? "lg:text-right" : "lg:text-left";
//     return `${base} ${desktop}`;
//   };

//   const getMarginClasses = () => {
//     return isRTL ? "mx-auto lg:mr-0" : "mx-auto lg:mx-0";
//   };

//   return (
//     <div
//       className="relative min-h-screen w-full overflow-hidden"
//       id="home"
//       dir={isRTL ? "rtl" : "ltr"}
//     >
//       {/* Arrière-plan avec gradient moderne utilisant les nouvelles couleurs */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, #159FD8 86%)",
//         }}
//       />

//       {/* Particules flottantes */}
//       <div className="absolute inset-0 opacity-20">
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${3 + Math.random() * 2}s`
//             }}
//           />
//         ))}
//       </div>

//       <header className="relative z-10 px-4 sm:px-6 lg:px-8 pt-2 lg:pt-0">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen lg:min-h-0">

//             {/* Section contenu */}
//             <div className={`${getAlignmentClasses(true)} space-y-8 order-2 lg:order-1 pb-8 lg:pb-0`}>
//               {/* Badge/Tag */}
//               <div className={`mt-10 mb-0 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20 ${isRTL ? 'flex-row-reverse' : ''}`}>
//                 <span className={`w-2 h-2 bg-green-400 rounded-full animate-pulse ${isRTL ? 'ml-2' : 'mr-2'}`}></span>
//                 {t('Hero.Nouvelle application disponible')}
//               </div>

//               <div className="">
//                 <Typography
//                   variant="h1"
//                   color="white"
//                   className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${isRTL ? 'font-arabic' : ''}`}
//                 >
//                   SWAMP
//                 </Typography>
//                 <div className={`h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full ${getMarginClasses()}`}></div>
//               </div>

//               {/* Sous-titre */}
//               <Typography
//                 variant="lead"
//                 className={`text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl ${getMarginClasses()} ${isRTL ? 'font-arabic' : ''}`}
//               >
//                 {t('Hero.description')}
//                 <span className="text-yellow-300 font-semibold">
//                   ,{' '}{t('Hero.slogan')}
//                 </span>.
//               </Typography>

//               {/* Call to action */}
//               <div className="space-y-1">
//                 <Typography className={`text-white/90 font-medium ${isRTL ? 'font-arabic' : ''}`}>
//                   {t('Hero.Téléchargez l\'application maintenant')}
//                 </Typography>
//                 <div className={`flex flex-col sm:flex-row gap-4`}  >
//                   <DownloadButtons />
//                 </div>
//               </div>
//             </div>

//             {/* Section téléphones */}
//             <div className="order-1 lg:order-2 w-full py-4 lg:py-16 mt-16 lg:mt-0">
//               <div className="w-full">
//                 <PhonesScene />
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Section inférieure avec design moderne */}
//       <div className="relative z-10 mx-4 sm:mx-6 lg:mx-8 -mt-6 lg:-mt-16">
//         <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/20">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center" dir={i18n.language === "ar" ? "rtl" : "ltr"}>

//             {/* Contenu texte */}
//             <div className={`space-y-6 `}>
//               <div className="space-y-4">
//                 <Typography
//                   variant="h3"
//                   color="blue-gray"
//                   className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${getAlignmentClasses(true)} ${isRTL ? 'font-arabic' : ''}`}
//                   style={{ color: "#159FD8" }}
//                 >
//                   {t('Hero.Une seule app, tous vos besoins')}
//                 </Typography>
//               </div>

//               <Typography
//                 variant="paragraph"
//                 className={`text-gray-600 text-base lg:text-lg leading-relaxed ${getAlignmentClasses(false)} ${isRTL ? 'font-arabic text-right' : 'text-justify'}`}
//               >
//                 {t('Hero.Apropos')}
//               </Typography>

//               <div className="grid grid-cols-2 gap-4 pt-1" >
//                 {[
//                   { icon: '📈', text: t('Hero.Suivi et historiques de Consommation') },
//                   { icon: '⚡', text: t('Hero.Statistiques Temps Réel') },
//                   { icon: '🔐', text: t('Hero.100% Sécurisé') },
//                   { icon: '🔔', text: t('Hero.Système Alertes Temps Réel') },
//                   { icon: '📱', text: t('Hero.Interface Intuitive') + ' & ' + t('Hero.Ultra Rapide') },
//                   { icon: '🌍', text: t('Hero.Partout en Algérie') }
//                 ].map((feature, index) => (
//                   <div key={index} className={`flex items-center p-3 rounded-xl transition-colors gap-3`} style={{ backgroundColor: index % 2 === 0 ? '#159FD8' : '#28A9DF', color: 'white' }}>
//                     <span className="text-xl text-white">{feature.icon}</span>
//                     <span className={`text-sm font-medium text-white ${isRTL ? 'font-arabic' : ''}`}>{feature.text}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className={`flex justify-center ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
//               <div className="relative group">

//                 <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//                   <div
//                     className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${isRTL ? "flex-row-reverse font-arabic" : ""}`}
//                     style={{ backgroundColor: "#159FD8", color: "white" }}>
//                     <span className={isRTL ? "ml-1" : "mr-1"}>🚀</span>
//                     {t("Hero.Smart Management")}
//                   </div>
//                 </div>

//                 <Image
//                   src="/imageAcceuille.png"
//                   alt="App Preview"
//                   className="object-contain rounded-2xl shadow-[0_0_40px_rgba(21,159,216,0.7)]"
//                   width={500}
//                   height={500}
//                   loading="lazy"
//                 />

//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       <div className="h-16 lg:h-24"></div>
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

function PhonesScene() {
  return (
    <div className="w-full flex items-end justify-center gap-3 sm:gap-6 px-2">
      {/* Left phone */}
      <div className="w-[44%] max-w-[150px] sm:max-w-[200px] lg:max-w-[260px] transform -rotate-6 hover:rotate-0
        transition-transform duration-500 drop-shadow-2xl ">
        <Image src="/swamp-left.png" alt="App screen 1" width={300}
          height={600} className="w-full h-auto object-contain" priority />
      </div>

      {/* Right phone */}
      <div className="
        w-[44%] max-w-[130px] sm:max-w-[175px] lg:max-w-[220px]
        transform rotate-6 hover:rotate-0
        transition-transform duration-500
        drop-shadow-2xl mt-6
      ">
        <Image
          src="/swamp-portrait.png"
          alt="App screen 2"
          width={300}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}

function DownloadButtons() {
  const { t } = useTranslation();

  const btnClass = `
    flex justify-center items-center gap-3
    py-3 px-5 sm:py-4 sm:px-6
    bg-white text-gray-900
    hover:bg-gray-100
    transition-all duration-300
    shadow-lg hover:shadow-xl
    transform hover:scale-105
    border-0 rounded-xl
  `;

  return (
    <div className="flex flex-row gap-3 justify-center lg:justify-start flex-wrap">
      <Button size="lg" aria-label="app store" className={btnClass}>
        <Image
          src="/logos/logo-apple.png"
          alt="app store"
          width={22}
          height={22}
          className="w-5 h-5 sm:w-6 sm:h-6"
          loading="lazy"
        />
        <span className="text-xs sm:text-sm font-semibold">{t("Hero.App Store")}</span>
      </Button>

      <Button size="lg" aria-label="google store" className={btnClass}>
        <Image
          src="/logos/logo-google.png"
          alt="google play"
          width={22}
          height={22}
          className="w-5 h-5 sm:w-6 sm:h-6"
          loading="lazy"
        />
        <span className="text-xs sm:text-sm font-semibold">{t("Hero.Google Play")}</span>
      </Button>
    </div>
  );
}

interface Feature {
  icon: string;
  key: string;
  key2?: string;
}

const FEATURES: Feature[] = [
  { icon: "📈", key: "Hero.Suivi et historiques de Consommation" },
  { icon: "⚡", key: "Hero.Statistiques Temps Réel" },
  { icon: "🔐", key: "Hero.100% Sécurisé" },
  { icon: "🔔", key: "Hero.Système Alertes Temps Réel" },
  { icon: "📱", key: "Hero.Interface Intuitive", key2: "Hero.Ultra Rapide" },
  { icon: "🌍", key: "Hero.Partout en Algérie" },
];

export default function Hero() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const align = (centerMobile = true) =>`${centerMobile ? "text-center" : ""} ${isRTL ? "lg:text-right" : "lg:text-left"}`;
  const marginX = () => (isRTL ? "mx-auto lg:mr-0" : "mx-auto lg:mx-0");

  return (
    <div id="home" dir={isRTL ? "rtl" : "ltr"} className="relative w-full overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, #159FD8 86%)" }}
      />

      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[
          [5,8],[18,25],[32,60],[47,15],[61,78],[75,42],[89,20],
          [12,88],[28,50],[55,35],[70,90],[83,65],[95,10],[40,70],[22,40]
        ].map(([l, t], i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{left: `${l}%`,
              top: `${t}%`,
              animationDelay: `${(i * 0.4) % 3}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-8 pb-4">
        <div className="container mx-auto max-w-7xl">
          <div className="
            grid grid-cols-1 lg:grid-cols-2
            gap-4 lg:gap-16
            items-center
            min-h-[calc(100svh-72px)] lg:min-h-[90vh]
          ">

            <div className="order-1 lg:order-2 w-full pt-2 lg:py-12">
              <PhonesScene />
            </div>

            <div className={`${align(true)} space-y-4 sm:space-y-6 order-2 lg:order-1 pb-4 lg:pb-0`}>

              <div className={`
                inline-flex items-center gap-2
                px-3 py-1.5 sm:px-4 sm:py-2 rounded-full
                bg-white/15 backdrop-blur-sm
                text-white text-xs sm:text-sm
                border border-white/25
                ${isRTL ? "flex-row-reverse" : ""}
              `}>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                {t("Hero.Nouvelle application disponible")}
              </div>

              <div>
                <h1 className={`
                  text-5xl sm:text-6xl lg:text-7xl
                  font-extrabold leading-none tracking-tight text-white
                  ${isRTL ? "font-arabic" : ""}
                `}>
                  SWAMP
                </h1>
                <div className={`h-1 w-20 sm:w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-3 ${marginX()}`} />
              </div>

              <p className={`
                text-sm sm:text-lg lg:text-xl
                text-gray-100 leading-relaxed
                max-w-xl ${marginX()}
                ${isRTL ? "font-arabic" : ""}
              `}>
                {t("Hero.description")}
                <span className="text-yellow-300 font-semibold">
                  {", "}{t("Hero.slogan")}
                </span>.
              </p>

              <div className="space-y-2">
                <p className={`text-white/85 text-xs sm:text-sm font-medium ${isRTL ? "font-arabic" : ""}`}>
                  {t("Hero.Téléchargez l'application maintenant")}
                </p>
                <DownloadButtons />
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="relative z-10 mx-3 sm:mx-5 lg:mx-8 -mt-2 sm:-mt-6 lg:-mt-16">
        <div className="bg-white/96 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 shadow-2xl border border-white/20">
          <div
            dir={isRTL ? "rtl" : "ltr"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >

            <div className="space-y-4 sm:space-y-6">
              <h2
                className={`text-xl sm:text-3xl lg:text-4xl font-bold ${align(true)} ${isRTL ? "font-arabic" : ""}`}
                style={{ color: "#159FD8" }}
              >
                {t("Hero.Une seule app, tous vos besoins")}
              </h2>

              <p className={`
                text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed
                ${isRTL ? "font-arabic text-right" : "text-justify"}
              `}>
                {t("Hero.Apropos")}
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1">
                {FEATURES.map(({ icon, key, key2 }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl transition-all hover:-translate-y-0.5"
                    style={{ backgroundColor: i % 2 === 0 ? "#159FD8" : "#28A9DF" }}
                  >
                    <span className="text-base sm:text-xl flex-shrink-0">{icon}</span>
                    <span className={`text-xs sm:text-sm font-medium text-white leading-tight ${isRTL ? "font-arabic" : ""}`}>
                      {t(key)}{key2 ? ` & ${t(key2)}` : ""}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`flex justify-center mt-6 lg:mt-0 ${isRTL ? "lg:order-1" : "lg:order-2"}`}>
              <div className="relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg ${isRTL ? "flex-row-reverse font-arabic" : ""}`}
                    style={{ backgroundColor: "#159FD8", color: "white" }}
                  >
                    🚀 {t("Hero.Smart Management")}
                  </span>
                </div>

                <Image
                  src="/imageAcceuille.png"
                  alt="App Preview"
                  width={500}
                  height={500}
                  loading="lazy"
                  className="
                    w-full max-w-[260px] sm:max-w-[380px] lg:max-w-[460px]
                    object-contain rounded-2xl
                    shadow-[0_0_40px_rgba(21,159,216,0.6)]
                  "
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="h-10 sm:h-16 lg:h-24" />
    </div>
  );
}