
'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import '../app/globals.css';

interface SplashScreenProps {
  onFinish?: () => void;
}

export function Loading3D({ onFinish }: SplashScreenProps) {
  const [animationStage, setAnimationStage] = useState<number>(0);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setAnimationStage(1), 600),   
      setTimeout(() => setAnimationStage(2), 1200),  
      setTimeout(() => setAnimationStage(3), 1800),  
      setTimeout(() => setAnimationStage(4), 2400),  
      setTimeout(() => setAnimationStage(5), 3000),  
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 6000) 
    ];

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [onFinish]);

  if (animationStage == 0) { return <div className="splash-container"> </div>};

  return (
    <div className="splash-container">
      {/* Logo centré */}
      <div className="logo-container">
        <div className="logo">
           <div className="logo-circle w-44 h-44 bg-white rounded-full flex items-center justify-center shadow-inner">
            <Image
              src="/logo.png"
              alt="logo splash"
              width={150}
              height={150}
              className="rounded-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
       
      </div>


      {/* Ligne d'icônes animées */}
      <div className="icons-row">
        <div className={`icon shoe ${animationStage >= 1 ? 'animate' : ''}`}>
          <div className="icon-content">👟</div>
        </div>
        <div className={`icon tshirt ${animationStage >= 2 ? 'animate' : ''}`}>
          <div className="icon-content">👕</div>
        </div>
        <div className={`icon tv ${animationStage >= 3 ? 'animate' : ''}`}>
          <div className="icon-content">📺</div>
        </div>
        <div className={`icon desk ${animationStage >= 4 ? 'animate' : ''}`}>
          <div className="icon-content">🏢</div>
        </div>
        <div className={`icon cupcake ${animationStage >= 5 ? 'animate' : ''}`}>
          <div className="icon-content">🚗</div>
        </div>
      </div>

      <style jsx>{`
        .splash-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #501da6 0%, #6c2db8 50%, #501da6 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          overflow: hidden;
        }

        .logo-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .logo {
          margin-bottom: 40px;
          animation: logoFadeIn 1s ease-out;
        }

        .logo-circle {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ffffff20, #ffffff40);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 2px 8px rgba(255, 255, 255, 0.2);
        }

        .logo-text {
          font-size: 24px;
          font-weight: bold;
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .signature-container {
          position: absolute;
          top: 140px;
          right: -30px;
          transform: rotate(-10deg);
        }

        .signature-text {
          color: #e8bd9b;
          font-style: italic;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 1px;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .icons-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
          margin-bottom: 80px;
          margin-top: -300px;
        }

        .icon {
          width: 48px;
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transform: scale(0) rotate(0deg);
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .icon.animate {
          opacity: 1;
          transform: scale(1) rotate(0deg);
          animation: 
            iconPulse 0.9s ease-in-out,
            iconRotate 1.2s ease-in-out 0.3s,
            iconGlow 2s ease-in-out infinite 1s;
        }

        .icon-content {
          font-size: 32px;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
          transition: transform 0.3s ease;
        }

        .icon.animate .icon-content {
          transform: scale(1.1);
        }

        @keyframes logoFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes iconPulse {
          0% { opacity: 0; transform: scale(0); }
          50% { opacity: 0.7; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes iconRotate {
          0% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(15deg) scale(1.1); }
          50% { transform: rotate(-15deg) scale(0.9); }
          75% { transform: rotate(10deg) scale(1.05); }
          100% { transform: rotate(0deg) scale(1); }
        }

        @keyframes iconGlow {
          0%, 100% { 
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) brightness(1);
          }
          50% { 
            filter: drop-shadow(0 6px 12px rgba(255, 213, 2, 0.4)) brightness(1.2);
          }
        }

        /* Effet de particules flottantes */
        .splash-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 40%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 60% 80%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 90% 20%, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          animation: particleFloat 6s ease-in-out infinite;
        }

        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .logo-circle {
            width: 140px;
            height: 140px;
          }
          
          .logo-text {
            font-size: 20px;
          }
          
          .signature-text {
            font-size: 9px;
          }
          
          .icons-row {
            gap: 16px;
            margin-top: -200px;
          }
          
          .icon {
            width: 40px;
            height: 40px;
          }
          
          .icon-content {
            font-size: 28px;
          }
        }

        @media (max-width: 480px) {
          .icons-row {
            flex-wrap: wrap;
            max-width: 300px;
            gap: 12px;
          }
          
          .icon {
            width: 36px;
            height: 36px;
          }
          
          .icon-content {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}

export default Loading3D;