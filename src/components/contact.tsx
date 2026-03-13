"use client";

import { useState } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language; // "fr" ou "ar"

  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("sending");

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(formData.message);

    const mailtoLink = `mailto:korichi.abderraouf.dev@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, "_blank");

    setTimeout(() => {
      setSubmitStatus("success");
      setTimeout(() => {
        setSubmitStatus("");
        setFormData({ subject: "", message: "" });
        setIsSubmitting(false);
      }, 2500);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <EnvelopeIcon className="w-8 h-8 text-white" />,
      title: t("contact.methods.email.title"),
      info: t("contact.methods.email.info"),
    },
    {
      icon: <PhoneIcon className="w-8 h-8 text-white" />,
      title: t("contact.methods.phone.title"),
      info: t("contact.methods.phone.info"),
    },
  ];

  return (
    <section
      className={`relative min-h-screen py-20 px-4 overflow-hidden -mb-28 ${
        lang === "ar" ? "text-right" : "text-left"
      }`}
      id="contact"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-12 border border-white/20 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side */}
            <div className="text-black space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black text-dark leading-tight">
                  {t("contact.title")}
                </h2>
                <p className="text-xl text-dark/90 leading-relaxed font-medium">
                  {t("contact.subtitle")}
                </p>
              </div>

              {/* Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="group flex items-center space-x-5 p-5 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl border border-white/10 hover:border-white/30"
                    style={{
                      boxShadow:
                        "0 20px 25px -5px rgba(21, 159, 216, 0.2), 0 10px 10px -5px rgba(21, 159, 216, 0.1)",
                    }}
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#159FD8] via-[#28A9DF] to-[#159FD8] rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                      {method.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-dark text-lg group-hover:text-[#28A9DF] transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-dark/80 text-base">{method.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-gray-700 uppercase tracking-wide"
                  >
                    {t("contact.form.subject.label")}
                  </label>
                  <input
                    dir={i18n.language === "ar" ? "rtl" : "ltr"}
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder={t("contact.form.subject.placeholder")}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl outline-none transition-all duration-300"
                    style={{
                      borderColor: "#e5e7eb",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#159FD8";
                      e.target.style.boxShadow =
                        "0 0 0 4px rgba(21, 159, 216, 0.2)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e5e7eb";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-700 uppercase tracking-wide"
                  >
                    {t("contact.form.message.label")}
                  </label>
                  <textarea
                    dir={i18n.language === "ar" ? "rtl" : "ltr"}
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder={t("contact.form.message.placeholder")}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl outline-none transition-all duration-300 resize-none"
                    style={{
                      borderColor: "#e5e7eb"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#159FD8";
                      e.target.style.boxShadow =
                        "0 0 0 4px rgba(21, 159, 216, 0.2)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e5e7eb";
                      e.target.style.boxShadow = "none";
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  aria-label="contact"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full font-bold py-5 px-8 rounded-2xl text-white"
                  style={{
                    background: "linear-gradient(to right, #159FD8, #28A9DF)",
                  }}
                >
                  {t("contact.form.submit")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
