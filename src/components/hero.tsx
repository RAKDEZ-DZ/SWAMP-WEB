"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture, Html } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

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
      <pointLight position={[0, 3, 2]} intensity={0.6} color="#159FD8" />
      <pointLight position={[2, -2, 3]} intensity={0.4} color="#28A9DF" />

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
        <span className="text-sm font-semibold mt-1">{t('Hero.App Store')}</span>
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
        <span className="text-sm font-semibold mt-1">{t('Hero.Google Play')}</span>
      </Button>
    </div>
  );
}

export default function Hero() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

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
      {/* Arrière-plan avec gradient moderne utilisant les nouvelles couleurs */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, #159FD8 86%)",
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
                {t('Hero.Nouvelle application disponible')}
              </div>

              <div className="space-y-4">
                <Typography
                  variant="h1"
                  color="white"
                  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${isRTL ? 'font-arabic' : ''}`}
                >
                  SWAMP
                </Typography>
                <div className={`h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full ${getMarginClasses()}`}></div>
              </div>

              {/* Sous-titre */}
              <Typography
                variant="lead"
                className={`text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl ${getMarginClasses()} ${isRTL ? 'font-arabic' : ''}`}
              >
                {t('Hero.description')}
                <span className="text-yellow-300 font-semibold">
                  ,{' '}{t('Hero.slogan')}
                </span>.
              </Typography>

              {/* Call to action */}
              <div className="space-y-4">
                <Typography className={`text-white/90 font-medium ${isRTL ? 'font-arabic' : ''}`}>
                  {t('Hero.Téléchargez l\'application maintenant')}
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
                <div className={`inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium ${isRTL ? 'flex-row-reverse font-arabic' : ''}`} style={{ backgroundColor: "#159FD8", color: "white" }}>
                  <span className={isRTL ? 'ml-1' : 'mr-1'}>🚀</span>
                  {t('Hero.Smart Management')}
                </div>

                <Typography
                  variant="h3"
                  color="blue-gray"
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${getAlignmentClasses(true)} ${isRTL ? 'font-arabic' : ''}`}
                  style={{ color: "#159FD8" }}
                >
                  {t('Hero.Une seule app, tous vos besoins') }
                </Typography>
              </div>

              <Typography
                variant="paragraph"
                className={`text-gray-600 text-base lg:text-lg leading-relaxed ${getAlignmentClasses(false)} ${isRTL ? 'font-arabic text-right' : 'text-justify'}`}
              >
                {t('Hero.Apropos')}         
              </Typography>

              <div className="grid grid-cols-2 gap-4 pt-1" >
                {[
                  { icon: '💰', text: t('Hero.Achat/Vente') },
                  { icon: '💼', text: t('Hero.Emploi') || 'Emploi' },
                  { icon: '🔐', text: t('Hero.100% Sécurisé') || '100% Sécurisé' },
                  { icon: '⚡', text: t('Hero.Ultra Rapide') || 'Ultra Rapide' },
                  { icon: '📱', text: t('Hero.Interface Intuitive') || 'Interface Intuitive' },
                  { icon: '🌍', text: t('Hero.Partout en Algérie') || 'Partout en Algérie' }
                ].map((feature, index) => (
                  <div key={index} className={`flex items-center p-3 rounded-xl transition-colors gap-3`} style={{ backgroundColor: index % 2 === 0 ? '#159FD8' : '#28A9DF', color: 'white' }}>
                    <span className="text-xl text-white">{feature.icon}</span>
                    <span className={`text-sm font-medium text-white ${isRTL ? 'font-arabic' : ''}`}>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visuel/GIF */}
            <div className={`flex justify-center ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="relative group">
                <div className="absolute -inset-4 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" style={{ background: "linear-gradient(to right, #159FD8, #28A9DF)" }}></div>
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