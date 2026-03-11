"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import FeatureCard from "../components/feature-card";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export function Features() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const FEATURES = [
    {
      icon: (
        <Image
          src="/Cash_Payment.gif"
          alt={t('Features.Vendeurs Vérifiés') || "Vendeurs Vérifiés"}
          width={144}
          height={144}
          className="rounded-3xl object-cover"
          loading="lazy"
        />
      ),
      title: t('Features.Vendeurs Vérifiés') || "Vendeurs Vérifiés",
      children: t('Features.Vendeurs Vérifiés Description') || "Faites confiance à une communauté fiable. Nos vendeurs sont vérifiés pour garantir des transactions sécurisées et une expérience sans stress.",
    },
    {
      icon: (
        <Image
          src="/Messaging.gif"
          alt={t('Features.Expérience Interactive') || "Expérience Interactive"}
          width={144}
          height={144}
          className="rounded-3xl object-cover"
          loading="lazy"
        />
      ),
      title: t('Features.Expérience Interactive') || "Expérience Interactive",
      children: t('Features.Expérience Interactive Description') || "Discutez directement avec les acheteurs et vendeurs grâce à notre système de messagerie intégré. Négociez, posez vos questions et concluez vos affaires en toute transparence.",
    },
    {
      icon: (
        <Image
          src="/suivi_personaliser.gif"
          alt={t('Features.Suivi Personnalisé') || "Suivi Personnalisé"}
          width={144}
          height={144}
          className="rounded-3xl object-cover"
          loading="lazy"
        />
      ),
      title: t('Features.Suivi Personnalisé') || "Suivi Personnalisé",
      children: t('Features.Suivi Personnalisé Description') || "Suivez vos annonces et vos ventes en temps réel. Recevez des notifications pour rester informé de chaque nouvelle opportunité.",
    },
    {
      icon: (
        <Image
          src="/vitrine_pro.gif"
          alt={t('Features.Vitrines Professionnelles') || "Vitrines Professionnelles"}
          width={144}
          height={144}
          className="rounded-3xl object-cover"
          loading="lazy"
        />
      ),
      title: t('Features.Vitrines Professionnelles') || "Vitrines Professionnelles",
      children: t('Features.Vitrines Professionnelles Description') || "Donnez de la visibilité à votre entreprise grâce à votre vitrine professionnelle personnalisée. Présentez vos produits, vos services et vos offres spéciales directement sur la marketplace pour toucher une audience ciblée et augmenter vos ventes.",
    },
  ];

  const getTextAlignment = () => {
    return isRTL ? "text-center lg:text-right" : "text-center lg:text-left";
  };

  const getContainerDirection = () => {
    return isRTL ? "lg:flex-row-reverse" : "";
  };
  return (
    <section className="py-28 px-4 relative overflow-hidden" id="about" dir={isRTL ? "rtl" : "ltr"}>
      {/* Background bubbles */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-32 left-10 w-10 h-10 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 rounded-full animate-bounce opacity-20"></div>
        <div className="absolute top-32 right-10 w-10 h-10 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 rounded-full animate-bounce opacity-20"></div>
      </div>

      <div className="container mx-auto mb-20 text-center relative z-10">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          {t('Features.Votre Marketplace App')}
        </Typography>
        <h2 className="text-4xl md:text-6xl font-black text-dark leading-tight mb-6">
          {t('Features.Diverse Resources')}
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
          </div>
        </h2>

        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          {t('Features.Description')}
        </Typography>
      </div>

      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <div
            key={idx}
            className="transform hover:-translate-y-3 hover:scale-105 transition-all duration-500"
          >
            <FeatureCard {...props} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
