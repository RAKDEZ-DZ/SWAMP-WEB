
"use client";

import React from "react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export function Faqs() {
  const { t, i18n } = useTranslation();

  const lang = i18n.language; // "fr" ou "ar"
  const faqs = t("faq.list", { returnObjects: true }) as {
    title: string;
    desc: string;
  }[];

  return (
    <section className={`px-8 py-20 ${lang === "ar" ? "text-right" : "text-left"}`}>
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-black text-dark leading-tight mb-6">
            {t("faq.title")}
            <div className="flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            </div>
          </h2>

          <Typography
            variant="lead" className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 ">
            {t("faq.subtitle")}
          </Typography>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {faqs.map(({ title, desc }) => (
            <Card key={title} className="shadow-none bg-transparent" {...({} as any)}>
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="pb-6">
                  {title}
                </Typography>
                <Typography className="text-gray-600 text-justify" dir={i18n.language === "ar" ? "rtl" : "ltr"}>{desc}</Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      <section className="px-8 py-16 bg-gradient-to-r from-gray-900 to-gray-600 text-white rounded-3xl mt-16">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-black text-blue-600 leading-tight mb-6">
            {t("faq.ctaTitle")}
          </h2>
          <p className="text-lg md:text-xl text-blue-500 mb-8">{t("faq.ctaDesc")}</p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${lang === "ar" ? "flex-row-reverse" : ""}`}>
            <Button
              size="lg"
              className="flex justify-center items-center gap-3 py-4 px-6 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-0"
            >
              <Image width={24} height={24} src="/logos/logo-apple.png" alt="app store" className="w-6 h-6" loading="lazy" />
              <span className="text-sm font-semibold mt-1">{t("faq.appStore")}</span>
            </Button>

            <Button
              size="lg"
              className="flex justify-center items-center gap-3 py-4 px-6 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-0"
            >
              <Image width={24} height={24} src="/logos/logo-google.png" alt="google play" className="w-6 h-6" loading="lazy" />
              <span className="text-sm font-semibold mt-1">{t("faq.googlePlay")}</span>
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Faqs;
