"use client";
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Pricing {
  id: string;
  key: string;
  name: string;
  prix: number;
  dure: number;
}

const PricingSection = () => {
  const [data, setData] = useState<Pricing[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();
  const [error, seterror] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      axios.post("https://swamp-backend-gegx.onrender.com/graphql", { query: `mutation { getPricings }` })
        .then((res) => {
          const result = res.data?.data?.getPricings;
          if (Array.isArray(result)) setData(result);
          else seterror(true);
        })
        .catch((err) => {
          console.log(err);
          seterror(true);
        })
        .finally(() => setLoading(false));
    };

    fetchData();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
    </div>
  }

  if (error) {
    return null
  }

  return (
    <section className="" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-6xl font-black text-dark leading-tight mb-6">
            {t("packs.title")}
            <div className="flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            </div>
          </h2>

        <Typography
          variant="lead" className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 ">
          {t("packs.subtitle")}
        </Typography>

        <div className="flex flex-wrap justify-center gap-8 w-100 mt-6">
          {data.map((pricing, index) => {
            const gradients = [['#3B82F6', '#2563EB'], ['#8B5CF6', '#6D28D9'], ['#10B981', '#059669'], ['#F59E0B', '#D97706']];
            const gradient = gradients[index % gradients.length];
            const planIcons = ["⭐", "🚀", "👑", "💎", "⚡"];
            const icon = planIcons[index % planIcons.length];
            return (
              <div
                key={pricing.id}
                className="relative bg-white rounded-3xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 w-96"
                style={{ border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
              >
                <div style={{ height: 8, backgroundColor: gradient[0], width: '100%' }} />

                {index === 1 && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 text-white text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#10B981', boxShadow: '0 4px 12px rgba(16,185,129,0.4)' }}>
                    ⚡ {t("packs.recommended")}
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ backgroundColor: gradient[0] + '20' }}>
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold" style={{ color: gradient[0] }}>{pricing.name}</h3>
                      <div className="flex items-center gap-1 mt-1" style={{ color: '#6B7280' }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M12 6v6l4 2"/>
                        </svg>
                        <span className="text-sm">{t("packs.duration", { count: pricing.dure })}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 py-4">
                    <span className="text-5xl font-black" style={{ color: gradient[0] }}>
                      {pricing.prix.toLocaleString()}
                    </span>
                    <span className="text-lg mb-2" style={{ color: '#9CA3AF' }}>{t("packs.currency")}</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      t("packs.features.allAccess"),
                      t("packs.features.unlimitedUsage"),
                      t("packs.features.prioritySupport"),
                      t("packs.features.enhancedSecurity"),
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: gradient[0] + '18' }}>
                          <svg className="w-4 h-4" fill="none" stroke={gradient[0]} strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                          </svg>
                        </div>
                        <span className="text-sm" style={{ color: '#4B5563' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>       

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t("packs.help.title")}
            </h3>
            <p className="text-gray-600 mb-6">
              {t("packs.help.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Typography
                as="a"
                href="#contact"
                color="white"
                className="font-bold py-5 px-8 rounded-2xl text-white bg-blue-500"
                onClick={(e: any) => handleScroll(e, "#contact")}
              >
                {t("packs.help.contact")}   </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;