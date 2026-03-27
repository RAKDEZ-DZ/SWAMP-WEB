"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Navbar, Footer } from "@/components";
import { Shield, Database, Lock, User, RefreshCcw, FileText, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

function LegalContent() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language; 
  const searchParams = useSearchParams();

  const [activeTab, setActiveTab] = useState("conditions");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  const rawPrivacy = t("legal.privacy.sections", { returnObjects: true });
  const rawConditions = t("legal.conditions.articles", { returnObjects: true });

  const privacySections = Array.isArray(rawPrivacy) ? rawPrivacy : [];
  const conditionsArticles = Array.isArray(rawConditions) ? rawConditions : [];

  const conditionsIconsMap: Record<number, JSX.Element> = {
    0: <FileText className="text-[#00A3FF] w-6 h-6" />,
    1: <User className="text-[#00A3FF] w-6 h-6" />,
    2: <Lock className="text-[#00A3FF] w-6 h-6" />,
    3: <Shield className="text-[#00A3FF] w-6 h-6" />,
    4: <Settings className="text-[#00A3FF] w-6 h-6" />
  };

  const privacyIconsMap: Record<number, JSX.Element> = {
    0: <Database className="text-[#00A3FF] w-6 h-6" />,
    1: <Lock className="text-[#00A3FF] w-6 h-6" />,
    2: <Shield className="text-[#00A3FF] w-6 h-6" />,
    3: <User className="text-[#00A3FF] w-6 h-6" />,
    4: <FileText className="text-[#00A3FF] w-6 h-6" />
  };

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-gradient-to-b from-white to-slate-50 pt-32 pb-20 font-roboto"
    >
      <div className="text-center mb-16 px-6">
        <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-[#00A3FF] to-blue-500 bg-clip-text text-transparent">
          {t("legal.hero.title")}
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto">{t("legal.hero.subtitle")}</p>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-1.5 rounded-full flex gap-2 shadow-inner">
            <button
              onClick={() => setActiveTab("conditions")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "conditions"
                  ? "bg-[#00A3FF] text-white shadow-md scale-105"
                  : "text-slate-500 hover:text-black"
              }`}
            >
              {t("legal.tabs.conditions")}
            </button>

            <button
              onClick={() => setActiveTab("confidentialite")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "confidentialite"
                  ? "bg-[#00A3FF] text-white shadow-md scale-105"
                  : "text-slate-500 hover:text-black"
              }`}
            >
              {t("legal.tabs.confidentialite")}
            </button>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 md:p-12 border border-slate-100 mb-10">
          {activeTab === "conditions" && (
            <div className="space-y-10 animate-in fade-in duration-500">
              <h2 className="text-3xl font-black text-center mb-6">{t("legal.conditions.heading")}</h2>
              <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl text-slate-700 italic text-center">
                {t("legal.conditions.intro")}
              </div>

              {conditionsArticles.map((item: any, index: number) => (
                <div key={index} className="p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8">
                    {conditionsIconsMap[index]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#00A3FF] mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "confidentialite" && (
            <div className="space-y-10 animate-in fade-in duration-500">
              <h2 className="text-3xl font-black text-center mb-6">{t("legal.privacy.heading")}</h2>
              <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl text-slate-700 text-center">
                {t("legal.privacy.intro")}
              </div>

              {privacySections.map((item: any, index: number) => (
                <div key={index} className="p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8">
                    {privacyIconsMap[index]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#00A3FF] mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default function LegalPage() {
  const router = useRouter();

 
  useEffect(() => {
    const handleClick = (e: any) => {
      const href = e.target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        router.push(`/${href}`);
      }
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [router]);

  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="pt-40 text-center text-[#00A3FF]">Chargement...</div>}>
        <LegalContent />
      </Suspense>
      <Footer />
    </>
  );
}
