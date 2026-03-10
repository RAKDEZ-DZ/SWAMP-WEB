// // "use client";
// // import { Canvas, useFrame } from "@react-three/fiber";
// // import { OrbitControls, useGLTF, useTexture, Html } from "@react-three/drei";
// // import { Suspense, useRef } from "react";
// // import Image from "next/image";
// // import { Button, Typography } from "@material-tailwind/react";

// // // Composant téléphone animé
// // function AnimatedPhoneModel({
// //   modelPath,
// //   texturePath,
// //   position = [0, 0, 0],
// //   baseRotation = [0, 0, 0],
// //   animationSpeed = 1,
// //   scale = [7, 7, 7],
// // }: any) {
// //   const groupRef = useRef<any>(null!);
// //   const { scene, nodes }: any = useGLTF(modelPath);
// //   const texture = useTexture(texturePath) as any;

// //   useFrame((state) => {
// //     if (groupRef.current) {
// //       groupRef.current.rotation.y =
// //         baseRotation[1] +
// //         Math.sin(state.clock.elapsedTime * animationSpeed) * 0.3;
// //       groupRef.current.position.y =
// //         position[1] +
// //         Math.sin(state.clock.elapsedTime * animationSpeed * 0.8) * 0.1;
// //       groupRef.current.rotation.x =
// //         baseRotation[0] +
// //         Math.sin(state.clock.elapsedTime * animationSpeed * 0.5) * 0.05;
// //     }
// //   });

// //   return (
// //     <group
// //       ref={groupRef}
// //       dispose={null}
// //       position={position}
// //       rotation={baseRotation}
// //       scale={scale}
// //     >
// //       <primitive object={scene.clone()} />
// //       {nodes?.Screen && (
// //         <mesh geometry={nodes.Screen.geometry}>
// //           <meshBasicMaterial map={texture} />
// //         </mesh>
// //       )}
// //     </group>
// //   );
// // }

// // // Scène avec les deux téléphones - version responsive
// // function PhonesScene() {
// //   return (
// //     <Canvas
// //       camera={{ position: [0, 0, 7], fov: 45 }}
// //       className="w-full h-full"
// //     >
// //       <ambientLight intensity={0.6} />
// //       <directionalLight position={[3, 3, 3]} intensity={1} />
// //       <directionalLight position={[-3, 2, 2]} intensity={0.7} />
// //       <pointLight position={[0, 2, 0]} intensity={0.5} color="#00ff88" />

// //       <Suspense fallback={
// //         <Html center>
// //           <div className="text-white text-sm">Chargement des modèles 3D...</div>
// //         </Html>
// //       }>
// //         {/* Téléphone gauche - échelle responsive */}
// //         <AnimatedPhoneModel
// //           modelPath="/phone.glb"
// //           texturePath="/back.jpg"
// //           position={[-1.2, -0.2, 0]}
// //           baseRotation={[0, Math.PI / 8, 0]}
// //           animationSpeed={1}
// //           scale={[2, 2, 2]} // Échelle réduite pour mobile
// //         />

// //         {/* Téléphone droit - échelle responsive */}
// //         <AnimatedPhoneModel
// //           modelPath="/phone.glb"
// //           texturePath="/back.jpg"
// //           position={[1.2, -0.2, 0]}
// //           baseRotation={[0, -Math.PI / 8, 0]}
// //           animationSpeed={1}
// //           scale={[2, 2, 2]} // Échelle réduite pour mobile
// //         />
// //       </Suspense>

// //       <OrbitControls
// //         enableZoom={false}
// //         enablePan={false}
// //         autoRotate
// //         autoRotateSpeed={1}
// //       />
// //     </Canvas>
// //   );
// // }

// // export default function Hero() {
// //   return (
// //     <div
// //       className="relative min-h-screen w-full overflow-hidden sm:mb-3"
// //       style={{
// //         background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(80,29,166,1) 86%)",
// //       }}
// //     >
// //       <header className="grid px-4 sm:px-6 lg:px-8">
// //         <div className="container mx-auto grid h-full w-full grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center lg:py-0">

// //           {/* 📝 Partie contenu - responsive */}
// //           <div className="text-center lg:text-left z-10 px-2 sm:px-4 lg:px-0 lg:-mt-0 order-2 lg:order-1">
// //             <Typography
// //               variant="h1"
// //               color="white"
// //               className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
// //             >
// //               NCHRIHA
// //             </Typography>

// //             <Typography
// //               variant="lead"
// //               className="mb-6 lg:mb-7 !text-white text-base sm:text-lg md:text-xl px-2 sm:px-0"
// //             >
// //               Achetez, vendez et louer tout ce que vous voulez, quand vous voulez, où que vous soyez.
// //             </Typography>

// //             <Typography
// //               className="mb-4"
// //               color="white"
// //               variant="h6"
// //             >
// //               Obtenez l&apos;application
// //             </Typography>

// //             <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 justify-center lg:justify-start">
// //               <Button
// //                 size="lg"
// //                 color="white"
// //                 className="flex justify-center items-center gap-3 py-3 px-6 text-sm sm:text-base"
// //               >
// //                 <Image
// //                   width={24}
// //                   height={24}
// //                   src="/logos/logo-apple.png"
// //                   alt="app store"
// //                   className="w-5 h-5 sm:w-6 sm:h-6"
// //                 />
// //                 App Store
// //               </Button>

// //               <Button
// //                 size="lg"
// //                 color="white"
// //                 className="flex justify-center items-center gap-3 py-3 px-6 text-sm sm:text-base"
// //               >
// //                 <Image
// //                   width={24}
// //                   height={24}
// //                   src="/logos/logo-google.png"
// //                   alt="google play"
// //                   className="w-5 h-5 sm:w-6 sm:h-6"
// //                 />
// //                 Google Play
// //               </Button>
// //             </div>
// //           </div>

// //           {/* 📱 Partie téléphones 3D - responsive */}
// //           <div className="w-full h-64 sm:h-80 md:h-96 lg:h-screen flex justify-center items-center order-1 lg:order-2 mt-4 lg:mt-10">
// //             <div className="relative w-full h-full max-w-md mx-auto">
// //               <PhonesScene />
// //             </div>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Section blanche en bas - responsive */}
// //       <div className="mx-4 sm:mx-6 lg:mx-16 -mt-12 lg:-mt-24 mt-1 sm:mt-6 rounded-xl bg-white p-4 sm:p-6 md:p-10 lg:p-14 shadow-md">
// //         <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">

// //           {/* Texte à gauche */}
// //           <div className="lg:w-6/12 text-center lg:text-left">
// //             <Typography
// //               variant="h3"
// //               color="blue-gray"
// //               className="mb-3 text-xl sm:text-2xl md:text-3xl"
// //             >
// //               Marketplace App
// //             </Typography>

// //             <Typography
// //               variant="paragraph"
// //               className="font-normal !text-gray-500 text-sm sm:text-base"
// //             >
// //               C&apos;est une application tout-en-un de petites annonces, créée par{" "}
// //               <a
// //                 href="https://innovia-algerie.com"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="text-blue-600 hover:underline font-medium"
// //               >
// //                 Innovia Algérie
// //               </a>
// //               , qui connecte particuliers et professionnels pour l&apos;achat, la vente, la
// //               location ou la recherche d&apos;emploi, le tout sur une seule plateforme
// //               simple et intuitive.
// //             </Typography>

// //           </div>

// //           {/* Image à droite */}
// //           <div className="lg:w-5/12 flex justify-center lg:justify-end">
// //             <Image
// //               src="/sale_cons.gif"
// //               alt="App Preview"
// //               className="w-32 sm:w-40 md:w-48 lg:w-56 object-contain rounded-lg"
// //               width={400}
// //               height={400}
// //               priority
// //             />
// //           </div>
// //         </div>
// //       </div>

// //     </div>
// //   );
// // }


// "use client";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF, useTexture, Html } from "@react-three/drei";
// import { Suspense, useRef, useEffect, useState } from "react";
// import Image from "next/image";
// import { Button, Typography } from "@material-tailwind/react";
// import { useTranslation } from "react-i18next";

// // Composant téléphone animé optimisé
// function AnimatedPhoneModel({
//   modelPath,
//   texturePath,
//   position = [0, 0, 0],
//   baseRotation = [0, 0, 0],
//   animationSpeed = 1,
//   scale = [7, 7, 7],
// }: any) {
//   const groupRef = useRef<any>(null!);
//   const { scene, nodes }: any = useGLTF(modelPath);
//   const texture = useTexture(texturePath) as any;

//   useFrame((state) => {
//     if (groupRef.current) {
//       const time = state.clock.elapsedTime;
//       groupRef.current.rotation.y = baseRotation[1] + Math.sin(time * animationSpeed) * 0.2;
//       groupRef.current.position.y = position[1] + Math.sin(time * animationSpeed * 0.8) * 0.08;
//       groupRef.current.rotation.x = baseRotation[0] + Math.sin(time * animationSpeed * 0.5) * 0.03;
//     }
//   });

//   return (
//     <group
//       ref={groupRef}
//       dispose={null}
//       position={position}
//       rotation={baseRotation}
//       scale={scale}
//     >
//       <primitive object={scene.clone()} />
//       {nodes?.Screen && (
//         <mesh geometry={nodes.Screen.geometry}>
//           <meshBasicMaterial map={texture} />
//         </mesh>
//       )}
//     </group>
//   );
// }

// // Hook pour détecter la taille de l'écran
// function useResponsiveScale() {
//   const { t, i18n } = useTranslation();

//   const [scale, setScale] = useState([2.5, 2.5, 2.5]);
//   const [spacing, setSpacing] = useState(1.4);

//   useEffect(() => {
//     const updateScale = () => {
//       const width = window.innerWidth;
//       if (width < 640) { // mobile
//         // setScale([1.8, 1.8, 1.8]);
//         setScale([3, 3, 3]);
//         setSpacing(0.4);
//       } else if (width < 768) { // tablet
//         setScale([2.2, 2.2, 2.2]);
//         setSpacing(0.4);
//       } else if (width < 1024) { // desktop small
//         setScale([2.5, 2.5, 2.5]);
//         setSpacing(0.4);
//       } else { // desktop large
//         setScale([3, 3, 3]);
//         setSpacing(0.4);
//       }

//     };

//     updateScale();
//     window.addEventListener('resize', updateScale);
//     return () => window.removeEventListener('resize', updateScale);
//   }, []);

//   return { scale, spacing };
// }

// // Scène avec les deux téléphones - version responsive optimisée
// function PhonesScene() {
//   const { scale, spacing } = useResponsiveScale();

//   return (
//     <Canvas
//       camera={{ position: [0, 0, 6], fov: 45 }}
//       className="w-full h-full"
//       gl={{ antialias: true, alpha: true }}
//     >
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
//       <directionalLight position={[-3, 3, 2]} intensity={0.8} />
//       <pointLight position={[0, 3, 2]} intensity={0.6} color="#6366f1" />
//       <pointLight position={[2, -2, 3]} intensity={0.4} color="#8b5cf6" />

//       <Suspense fallback={
//         <Html center>
//           <div className="flex items-center justify-center">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
//             {/* <span className="text-white text-sm ml-3">Chargement...</span> */}
//           </div>
//         </Html>
//       }>
//         {/* Téléphone gauche */}
//         <AnimatedPhoneModel
//           modelPath="/phone.glb"
//           texturePath="/back.jpg"
//           position={[-spacing, -0.3, 0]}
//           baseRotation={[0.1, Math.PI / 6, 0]}
//           animationSpeed={0.8}
//           scale={scale}
//         />

//         {/* Téléphone droit */}
//         <AnimatedPhoneModel
//           modelPath="/phone.glb"
//           texturePath="/back.jpg"
//           position={[spacing, -0.1, -0.5]}
//           baseRotation={[-0.05, -Math.PI / 6, 0]}
//           animationSpeed={1.2}
//           scale={scale}
//         />
//       </Suspense>

//       <OrbitControls
//         enableZoom={false}
//         enablePan={false}
//         autoRotate
//         autoRotateSpeed={0.5}
//         maxPolarAngle={Math.PI / 2}
//         minPolarAngle={Math.PI / 3}
//       />
//     </Canvas>
//   );
// }

// // Composant pour les boutons de téléchargement
// function DownloadButtons() {
//   return (
//     <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//       <Button
//         size="lg"
//         aria-label="google store"
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
//         <span className="text-sm font-semibold mt-1">App Store</span>
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
//         <span className="text-sm font-semibold mt-1">Google Play</span>
//       </Button>
//     </div>
//   );
// }

// export default function Hero() {
//   const { t, i18n } = useTranslation();

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden" id="home" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
//       {/* Arrière-plan avec gradient moderne */}
//       <div
//         className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900"
//         style={{
//           background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(80,29,166,1) 86%)",
//         }}
//       />

//       {/* Particules flottantes (optionnel) */}
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
//             <div className="text-center lg:text-left space-y-8 order-2 lg:order-1 pb-8 lg:pb-0">
//               {/* Badge/Tag */}
//               <div dir={i18n.language === "ar" ? "ltr" : "ltr"} className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
//                 <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
//                 {t('Hero.Nouvelle application disponible')}
//               </div>

//               {/* Titre principal */}
//               <div className="space-y-4">
//                 <Typography
//                   variant="h1"
//                   color="white"
//                   className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
//                 >
//                   {t('Hero.NCHRIHA')}
//                 </Typography>
//                 <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto lg:mx-0 rounded-full"></div>
//               </div>

//               {/* Sous-titre */}
//               <Typography
//                 variant="lead"
//                 className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl mx-auto lg:mx-0"
//               >
//                 {t('Hero.Achetez, vendez et louez tout ce que vous voulez, quand vous voulez,')}
//                 <span className="text-yellow-300 font-semibold">{t('Hero.où que vous soyez')}</span>.
//               </Typography>

//               {/* Features rapides */}
//               {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-white text-sm">
//                 {['💰 Achat/Vente', '🏠 Location', '💼 Emploi'].map((feature, index) => (
//                   <div key={index} className="flex items-center justify-center lg:justify-start space-x-2 bg-white/5 backdrop-blur-sm rounded-lg py-2 px-3">
//                     <span>{feature}</span>
//                   </div>
//                 ))}
//               </div> */}

//               {/* Call to action */}
//               <div className="space-y-4">
//                 <Typography className="text-white/90 font-medium">
//                   Téléchargez l&apos;application maintenant
//                 </Typography>
//                 <DownloadButtons />
//               </div>

//               {/* Stats ou social proof */}
//               {/* <div className="flex justify-center lg:justify-start space-x-8 text-white/80 text-sm pt-8">
//                 <div className="text-center">
//                   <div className="font-bold text-lg">10K+</div>
//                   <div>Utilisateurs</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="font-bold text-lg">500+</div>
//                   <div>Annonces/jour</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="font-bold text-lg">4.8⭐</div>
//                   <div>Note App</div>
//                 </div>
//               </div> */}
//             </div>

//             {/* Section téléphones 3D */}
//             <div className="order-1 lg:order-2 h-64 sm:h-80 md:h-96 lg:h-[600px] w-full pt-32">
//               <div className="relative w-full h-full">
//                 <PhonesScene />
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Section inférieure avec design moderne */}
//       <div className="relative z-10 mx-4 sm:mx-6 lg:mx-8 -mt-6 lg:-mt-16">
//         <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/20">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

//             {/* Contenu texte */}
//             <div className="space-y-6">
//               <div className="space-y-4">
//                 <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
//                   🚀 Marketplace Innovant
//                 </div>

//                 <Typography
//                   variant="h3"
//                   color="blue-gray"
//                   className="text-2xl sm:text-3xl lg:text-4xl font-bold"
//                 >
//                   Une seule app, tous vos besoins
//                 </Typography>
//               </div>

//               <Typography
//                 variant="paragraph"
//                 className="text-gray-600 text-base text-justify lg:text-lg leading-relaxed"
//               >
//                 C&apos;est une application tout-en-un de petites annonces, créée par{" "}
//                 <a
//                   href="https://innovia-algerie.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-purple-600 hover:text-purple-800 font-semibold hover:underline transition-colors"
//                 >
//                   Innovia Algérie
//                 </a>
//                 , qui connecte particuliers et professionnels pour l&apos;achat, la vente, la
//                 location ou la recherche d&apos;emploi, le tout sur une seule plateforme
//                 simple et intuitive.
//               </Typography>

//               <div className="grid grid-cols-2 gap-4 pt-1">
//                 {[
//                   { icon: '💰', text: "Achat/Vente" },
//                   { icon: '💼', text: 'Emploi' },
//                   { icon: '🔐', text: '100% Sécurisé' },
//                   { icon: '⚡', text: 'Ultra Rapide' },
//                   { icon: '📱', text: 'Interface Intuitive' },
//                   { icon: '🌍', text: 'Partout en Algérie' }
//                 ].map((feature, index) => (
//                   <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors">
//                     <span className="text-xl">{feature.icon}</span>
//                     <span className="text-sm font-medium text-gray-700">{feature.text}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Visuel/GIF */}
//             <div className="flex justify-center">
//               <div className="relative group">
//                 <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
//                 <div className="relative">
//                   <Image
//                     src="/sale_cons.gif"
//                     alt="App Preview"
//                     className="w-48 sm:w-56 lg:w-64 object-contain rounded-2xl shadow-2xl"
//                     width={400}
//                     height={400}
//                     loading="lazy"
//                   />
//                 </div>
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
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture, Html } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

// Composant téléphone animé optimisé
function AnimatedPhoneModel({
  modelPath,
  texturePath,
  position = [0, 0, 0],
  baseRotation = [0, 0, 0],
  animationSpeed = 1,
  scale = [7, 7, 7],
}: any) {
  const groupRef = useRef<any>(null!);
  const { scene, nodes }: any = useGLTF(modelPath);
  const texture = useTexture(texturePath) as any;

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      groupRef.current.rotation.y = baseRotation[1] + Math.sin(time * animationSpeed) * 0.2;
      groupRef.current.position.y = position[1] + Math.sin(time * animationSpeed * 0.8) * 0.08;
      groupRef.current.rotation.x = baseRotation[0] + Math.sin(time * animationSpeed * 0.5) * 0.03;
    }
  });

  return (
    <group
      ref={groupRef}
      dispose={null}
      position={position}
      rotation={baseRotation}
      scale={scale}
    >
      <primitive object={scene.clone()} />
      {nodes?.Screen && (
        <mesh geometry={nodes.Screen.geometry}>
          <meshBasicMaterial map={texture} />
        </mesh>
      )}
    </group>
  );
}

// Hook pour détecter la taille de l'écran
function useResponsiveScale() {
  const [scale, setScale] = useState([2.5, 2.5, 2.5]);
  const [spacing, setSpacing] = useState(1.4);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width < 640) { // mobile
        setScale([4, 3.5, 4]);
        setSpacing(0.6);
      } else if (width < 768) { // tablet
        setScale([2.2, 2.2, 2.2]);
        setSpacing(0.4);
      } else if (width < 1024) { // desktop small
        setScale([2.5, 2.5, 2.5]);
        setSpacing(0.4);
      } else { // desktop large
        setScale([3, 3, 3]);
        setSpacing(0.4);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return { scale, spacing };
}

// Scène avec les deux téléphones - version responsive optimisée
function PhonesScene() {
  const { scale, spacing } = useResponsiveScale();

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      className="w-full h-full"
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <directionalLight position={[-3, 3, 2]} intensity={0.8} />
      <pointLight position={[0, 3, 2]} intensity={0.6} color="#6366f1" />
      <pointLight position={[2, -2, 3]} intensity={0.4} color="#8b5cf6" />

      <Suspense fallback={
        <Html center>
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        </Html>
      }>
        {/* Téléphone gauche */}
        <AnimatedPhoneModel
          modelPath="/phone.glb"
          texturePath="/back.jpg"
          position={[-spacing, -0.7, 0]}
          baseRotation={[0.1, Math.PI / 6, 0]}
          animationSpeed={0.8}
          scale={scale}
        />

        {/* Téléphone droit */}
        <AnimatedPhoneModel
          modelPath="/phone.glb"
          texturePath="/back.jpg"
          position={[spacing, -0.5, -0.5]}
          baseRotation={[-0.05, -Math.PI / 6, 0]}
          animationSpeed={1.2}
          scale={scale}
        />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
}

// Composant pour les boutons de téléchargement
function DownloadButtons() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" >
      <Button
        size="lg"
        aria-label="app store"
        className="flex justify-center items-center gap-3 py-4 px-6 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-0"
      >
        <Image
          width={24}
          height={24}
          src="/logos/logo-apple.png"
          alt="app store"
          className="w-6 h-6"
          loading="lazy"
        />
        <span className="text-sm font-semibold mt-1">{t('Hero.App Store') || 'App Store'}</span>
      </Button>

      <Button
        size="lg"
        aria-label="google store"
        className="flex justify-center items-center gap-3 py-4 px-6 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-0"
      >
        <Image
          width={24}
          height={24}
          src="/logos/logo-google.png"
          alt="google play"
          className="w-6 h-6"
          loading="lazy"
        />
        <span className="text-sm font-semibold mt-1">{t('Hero.Google Play') || 'Google Play'}</span>
      </Button>
    </div>
  );
}

export default function Hero() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  // Classes conditionnelles pour RTL/LTR
  const getAlignmentClasses = (centerOnMobile: boolean = true) => {
    const base = centerOnMobile ? "text-center" : "";
    const desktop = isRTL ? "lg:text-right" : "lg:text-left";
    return `${base} ${desktop}`;
  };

  const getFlexClasses = () => {
    return isRTL ? "justify-center lg:justify-end" : "justify-center lg:justify-start";
  };

  const getMarginClasses = () => {
    return isRTL ? "mx-auto lg:mr-0" : "mx-auto lg:mx-0";
  };

  return (
    <div 
      className="relative min-h-screen w-full overflow-hidden" 
      id="home" 
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Arrière-plan avec gradient moderne */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900"
        style={{
          background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(80,29,166,1) 86%)",
        }}
      />

      {/* Particules flottantes */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <header className="relative z-10 px-4 sm:px-6 lg:px-8 pt-2 lg:pt-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen lg:min-h-0">

            {/* Section contenu */}
            <div className={`${getAlignmentClasses(true)} space-y-8 order-2 lg:order-1 pb-8 lg:pb-0`}>
              {/* Badge/Tag */}
              <div className={`inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className={`w-2 h-2 bg-green-400 rounded-full animate-pulse ${isRTL ? 'ml-2' : 'mr-2'}`}></span>
                {t('Hero.Nouvelle application disponible') || 'Nouvelle application disponible'}
              </div>

              {/* Titre principal */}
              <div className="space-y-4">
                <Typography
                  variant="h1"
                  color="white"
                  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${isRTL ? 'font-arabic' : ''}`}
                >
                  {t('Hero.NCHRIHA') || 'NCHRIHA'}
                </Typography>
                <div className={`h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full ${getMarginClasses()}`}></div>
              </div>

              {/* Sous-titre */}
              <Typography
                variant="lead"
                className={`text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl ${getMarginClasses()} ${isRTL ? 'font-arabic' : ''}`}
              >
                {t('Hero.Achetez, vendez et louez tout ce que vous voulez, quand vous voulez,') || 'Achetez, vendez et louez tout ce que vous voulez, quand vous voulez,'}
                <span className="text-yellow-300 font-semibold">
                  {' '}{t('Hero.où que vous soyez') || 'où que vous soyez'}
                </span>.
              </Typography>

              {/* Call to action */}
              <div className="space-y-4">
                <Typography className={`text-white/90 font-medium ${isRTL ? 'font-arabic' : ''}`}>
                  {t('Hero.Téléchargez l\'application maintenant') || 'Téléchargez l\'application maintenant'}
                </Typography>
                <div className={`flex flex-col sm:flex-row gap-4`}  >
                  <DownloadButtons />
                </div>
              </div>
            </div>

            {/* Section téléphones 3D */}
            <div className="order-1 lg:order-2 h-64 sm:h-80 md:h-96 lg:h-[600px] w-full pt-32">
              <div className="relative w-full h-full">
                <PhonesScene />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section inférieure avec design moderne */}
      <div className="relative z-10 mx-4 sm:mx-6 lg:mx-8 -mt-6 lg:-mt-16">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center" dir={i18n.language === "ar" ? "rtl" : "ltr"}>

            {/* Contenu texte */}
            <div className={`space-y-6 `}>
              <div className="space-y-4">
                <div className={`inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium ${isRTL ? 'flex-row-reverse font-arabic' : ''}`}>
                  <span className={isRTL ? 'ml-1' : 'mr-1'}>🚀</span>
                  {t('Hero.Marketplace Innovant') || 'Marketplace Innovant'}
                </div>

                <Typography
                  variant="h3"
                  color="blue-gray"
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${getAlignmentClasses(true)} ${isRTL ? 'font-arabic' : ''}`}
                >
                  {t('Hero.Une seule app, tous vos besoins') || 'Une seule app, tous vos besoins'}
                </Typography>
              </div>

              <Typography
                variant="paragraph"
                className={`text-gray-600 text-base lg:text-lg leading-relaxed ${getAlignmentClasses(false)} ${isRTL ? 'font-arabic text-right' : 'text-justify'}`}
              >
                {t('Hero.Description') || "C'est une application tout-en-un de petites annonces, créée par"}{" "}
                <a
                  href="https://innovia-algerie.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 font-semibold hover:underline transition-colors"
                >
                  Innovia Algérie
                </a>
                {t('Hero.Description suite') || ", qui connecte particuliers et professionnels pour l'achat, la vente, la location ou la recherche d'emploi, le tout sur une seule plateforme simple et intuitive."}
              </Typography>

              <div className="grid grid-cols-2 gap-4 pt-1" >
                {[
                  { icon: '💰', text: t('Hero.Achat/Vente') || "Achat/Vente" },
                  { icon: '💼', text: t('Hero.Emploi') || 'Emploi' },
                  { icon: '🔐', text: t('Hero.100% Sécurisé') || '100% Sécurisé' },
                  { icon: '⚡', text: t('Hero.Ultra Rapide') || 'Ultra Rapide' },
                  { icon: '📱', text: t('Hero.Interface Intuitive') || 'Interface Intuitive' },
                  { icon: '🌍', text: t('Hero.Partout en Algérie') || 'Partout en Algérie' }
                ].map((feature, index) => (
                  <div key={index} className={`flex items-center p-3 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors gap-3`}>
                    <span className="text-xl">{feature.icon}</span>
                    <span className={`text-sm font-medium text-gray-700 ${isRTL ? 'font-arabic' : ''}`} >{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visuel/GIF */}
            <div className={`flex justify-center ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                  <Image
                    src="/sale_cons.gif"
                    alt="App Preview"
                    className="w-48 sm:w-56 lg:w-64 object-contain rounded-2xl shadow-2xl"
                    width={400}
                    height={400}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="h-16 lg:h-24"></div>
    </div>
  );
}