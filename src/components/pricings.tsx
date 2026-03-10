"use client";
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Variant {
  id: number;
  key: string;
  prix: number;
  dure: number;
}

interface Pack {
  name: string;
  reel: number;
  point: number;
  vitrine: boolean;
  website: boolean;
  variants: Variant[];
}

const PricingSection = () => {
  const [data, setData] = useState<Pack[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();
  const [error, seterror] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://197.140.7.9/api/payment/getAllPricings");
        setData(res.data);
      } catch (err) {
        console.log(err)
        seterror(true)
      } finally {
        setLoading(false);
      }
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
        <h2 className="text-4xl font-bold mb-4 text-gray-900">{t("packs.title")}</h2>
        <Typography
          variant="lead" className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 ">
          {t("packs.subtitle")}
        </Typography>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((pack) => (
            <div
              key={pack.name}
              className="relative bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform"
            >
              {pack.point > 250 && (
                <div className="absolute top-0 right-4 bg-yellow-400 text-white font-bold px-3 py-1 rounded-full text-sm">
                  {t("packs.Recomander")}
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{pack.name}</h3>

              <div className="flex items-center justify-center gap-4 mt-6 mb-6">
                <div className="text-center">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                      <svg className="w6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-md font-bold text-purple-600">{pack.reel}</div>
                  <div className="text-sm text-gray-600">{t("packs.reels")}</div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                <div className="text-center">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-md font-bold text-purple-600">{pack.point}</div>
                  <div className="text-sm text-gray-600">{t("packs.points")}</div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                <div className="text-center">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3 9l1-5h16l1 5H3zm18 2v9a1 1 0 01-1 1h-4v-6H8v6H4a1 1 0 01-1-1v-9h18z" />
                      </svg>
                    </div>
                    {pack.vitrine ? (
                      <div className="absolute -top-1 right-2 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        {/* Check icon */}
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="absolute -top-1 right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        {/* Cross icon */}
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}

                  </div>
                  <div className="text-sm text-gray-600">{t("packs.vitrine")}</div>
                </div>

                <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                <div className="text-center">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 
       2 0 01-2-2V6a2 2 0 012-2zm0 2v2h16V6H4zm0 
       4v8h16v-8H4z"
                        />
                      </svg>
                    </div>
                    {pack.website ? (
                      <div className="absolute -top-1 right-2 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        {/* Check icon */}
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="absolute -top-1 right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        {/* Cross icon */}
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}

                  </div>
                  <div className="text-sm text-gray-600">{t("packs.website")}</div>
                </div>
              </div>

              <div className="space-y-3">
                {pack.variants.map((v) => (
                  <div
                    key={v.id}
                    className="flex justify-between items-center bg-gray-100 rounded-lg p-3 hover:bg-purple-50 transition-colors"
                  >
                    <span className="text-gray-700 font-medium">{t("packs.duration", { count: v.dure })}</span>
                    <span className="text-gray-900 font-bold">{t("packs.price", { value: v.prix.toLocaleString() })}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
                className=" font-bold py-5 px-8 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white"
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
