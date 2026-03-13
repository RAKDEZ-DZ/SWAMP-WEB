'use client';
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { useTranslation , Trans} from "react-i18next";
import React from "react";

export function Footer() {
  const { t, i18n } = useTranslation();
  const LINKS = [
    { label: t('Navbar.home'), href: "#home" },
    { label: t('Navbar.about'), href: "#about" },
    { label: t('Navbar.contact'), href: "#contact" },
  ];
  const CURRENT_YEAR = new Date().getFullYear();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="px-8 pt-44"
      style={{ background: "linear-gradient(0deg, #159FD8 0%, rgba(255,255,255,1) 100%)" }}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">

          <div className={`text-center ${i18n.language == "ar" ? " md:text-right" : " md:text-left"}`}>
            <h5 className="text-lg md:text-2xl font-black text-white leading-tight mt-3">
              <Image
                src="/logo.png"
                alt="logo_remove footer"
                width={40}
                height={40}
                className="inline-block rounded rounded-3 mb-3"
                loading="lazy"
              />
              {t('Footer.NCHRIHA')}
            </h5>
            <div className="flex items-center gap-3 mb-5">
              <MapPinIcon className="w-6 h-6 text-white" />
              <Typography color="white" className="font-normal">
                {t('Footer.Résidence Lina, Cité Adrar, 05000 Béjaïa, Algérie')}
              </Typography>
            </div>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Typography
                    as="a"
                    href={href}
                    color="white"
                    className="py-1 px-3 font-medium cursor-pointer transition-colors hover:text-gray-200"
                    onClick={(e: any) => handleScroll(e, href)}
                  >
                    {label}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 w-full md:mt-0 md:w-auto">
            <Typography variant="h6" color="white" className="mb-3 flex items-center justify-center">
              {t('Footer.getApp')}
            </Typography>
            <div className="flex flex-col gap-2">
              <Button 
                aria-label="App Store"
                className="flex items-center justify-center"
                style={{ backgroundColor: "#fff", color: "black" }}
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  className="-mt-0.5 mx-2 h-6 w-6"
                  alt="ios"
                  loading="lazy"
                />
                {t('Footer.App Store')}
              </Button>
              <Button 
                aria-label="Google Play" 
                className="flex items-center justify-center"
                style={{ backgroundColor: "#fff", color: "black" }}
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  className="-mt-0.5 mx-2 h-6 w-6"
                  alt="android"
                  loading="lazy"
                />
                {t('Footer.Google Play')}
              </Button>
            </div>
          </div>

        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-white/30 py-4 md:justify-between">
           <Typography color="white" className="text-center font-bold opacity-75">
          <Trans
            i18nKey="Footer.text"
            values={{ year: CURRENT_YEAR }}
            components={{
              link: (
                <a
                  href="https://korichi-abderraouf.netlify.app/"
                  target="_blank"
                  className="underline"
                  style={{ color: "#28A9DF" }}
                />
              ),
            }}
          />
        </Typography>

        <div className="flex gap-2">
          <IconButton 
            variant="text" 
            color="white"
            onClick={() => window.open("https://korichi-abderraouf.netlify.app/", "_blank")}
            className="hover:bg-[#28A9DF]/20"
          >
            <i className="fa-brands fa-tiktok text-2xl opacity-75"></i>
          </IconButton>
          <IconButton 
            variant="text" 
            color="white"
            onClick={() => window.open("https://korichi-abderraouf.netlify.app/", "_blank")}
            className="hover:bg-[#159FD8]/20"
          >
            <i className="fa-brands fa-facebook text-2xl opacity-75"></i>
          </IconButton>
          <IconButton 
            variant="text" 
            color="white"
            onClick={() => window.open("https://korichi-abderraouf.netlify.app/", "_blank")}
            className="hover:bg-[#28A9DF]/20"
          >
            <i className="fa-brands fa-instagram text-2xl opacity-75"></i>
          </IconButton>
        </div>
      </div>
    </div>
    </footer >
  );
}

export default Footer;