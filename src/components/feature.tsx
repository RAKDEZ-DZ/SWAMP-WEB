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
          src="/Messaging.gif"
          alt={t('Features.Expérience Interactive')}
          width={144}
          height={144}
          className="rounded-3xl object-cover"
          loading="lazy"
        />
      ),
      title: t('Features.Expérience Interactive'),
      children: t('Features.Expérience Interactive Description'),
    },
    {
      icon: (
        <Image
          src="/Preferences.gif"
          alt={t('Features.Suivi Personnalisé')}
          width={144}
          height={144}
          className="rounded-3xl object-cover"
          loading="lazy"
        />
      ),
      title: t('Features.Suivi Personnalisé'),
      children: t('Features.Suivi Personnalisé Description'),
    },
    {
      icon: (
        <Image
          src="/Online report.gif"
          alt={t('Features.Rapports Automatiques')}
          width={144}
          height={144}
          className="rounded-3xl object-cover"
          loading="lazy"
        />
      ),
      title: t('Features.Rapports Automatiques'),
      children: t('Features.Rapports Automatiques Description'),
    },
    {
      icon: (
        <Image
          src="/E-Wallet.gif"
          alt={t('Features.Paiement Abonnement')}
          width={144}
          height={144}
          className="rounded-3xl object-cover"
          loading="lazy"
        />
      ),
      title: t('Features.Paiement Abonnement'),
      children: t('Features.Paiement Abonnement Description'),
    },
  ];

  return (
    <section className="py-28 px-4 relative overflow-hidden" id="about" dir={isRTL ? "rtl" : "ltr"}>
      {/* Background bubbles */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-32 left-10 w-10 h-10 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 rounded-full animate-bounce opacity-20"></div>
        <div className="absolute top-32 right-10 w-10 h-10 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 rounded-full animate-bounce opacity-20"></div>
      </div>

      <div className="container mx-auto mb-20 text-center relative z-10">
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
