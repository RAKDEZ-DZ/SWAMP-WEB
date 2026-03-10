// import { useState } from 'react';
// import { EnvelopeIcon } from "@heroicons/react/24/solid";
// import { PhoneIcon } from "@heroicons/react/24/solid";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState('');

//   const handleInputChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus('sending');

//     const subject = encodeURIComponent(formData.subject);
//     const body = encodeURIComponent(formData.message);

//     const mailtoLink = `mailto:contact@innovia-algerie.com?subject=${subject}&body=${body}`;
//     window.open(mailtoLink, "_blank");

//     // Simulation d'envoi
//     setTimeout(() => {
//       setSubmitStatus('success');
//       setTimeout(() => {
//         setSubmitStatus('');
//         setFormData({ name: '', email: '', subject: '', message: '' });
//         setIsSubmitting(false);
//       }, 2500);
//     }, 1500);
//   };

//   const contactMethods = [
//     {
//       icon: <EnvelopeIcon className="w-8 h-8 text-white" />,
//       title: 'Email',
//       info: 'contact@innovia-algerie.com',
//     },
//     {
//       icon: <PhoneIcon className="w-8 h-8 text-white" />,
//       title: 'Téléphone',
//       info: '+33 1 23 45 67 89',
//     }
//   ];

//   return (
//     <section className="relative min-h-screen py-20 px-4 overflow-hidden -mb-28" id="contact">
//       {/* Floating background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 rounded-full animate-bounce opacity-60"></div>
//         {/* <div className="absolute top-1/2 right-16 w-32 h-32 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 rounded-full animate-pulse"></div> */}
//         {/* <div className="absolute top-10 left-10 w-16 h-16bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 rounded-full animate-ping"></div> */}
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Main container with glassmorphism */}
//         <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-12 border border-white/20 shadow-2xl">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">

//             {/* Left side - Contact Info */}
//             <div className="text-black space-y-8">
//               <div className="space-y-6">
//                 <h2 className="text-4xl md:text-6xl font-black  text-dark leading-tight">
//                   Contactez-nous
//                 </h2>
//                 <p className="text-xl text-dark/90 leading-relaxed font-medium text-justify">
//                   Une question sur notre application ? Notre équipe d&apos;experts vous accompagne dans votre transformation digitale !
//                 </p>
//               </div>

//               {/* Contact methods */}
//               <div className="space-y-6">
//                 {contactMethods.map((method, index) => (
//                   <div
//                     key={index}
//                     className="group flex items-center space-x-5 p-5 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 border border-white/10 hover:border-white/30"
//                   >
//                     <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br text-white from-purple-600 via-blue-600 to-indigo-800 rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
//                       {method.icon}
//                     </div>
//                     <div className="flex-grow">
//                       <h3 className="font-bold text-dark text-lg group-hover:text-purple-200 transition-colors duration-300">
//                         {method.title}
//                       </h3>
//                       <p className="text-dark/80 text-base group-hover:text-dark transition-colors duration-300">
//                         {method.info}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right side - Contact Form */}
//             <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 relative overflow-hidden">
//               {/* Form background decoration */}
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full -translate-y-16 translate-x-16"></div>
//               <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-500/10 to-blue-500/10 rounded-full translate-y-12 -translate-x-12"></div>

//               <div className="space-y-6 relative z-10">
//                 {/* <div className="space-y-2">
//                   <label htmlFor="name" className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
//                     Nom complet
//                   </label>
//                   <input 
//                     type="text" 
//                     id="name" 
//                     name="name" 
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 outline-none bg-white/90 hover:bg-white focus:bg-white transform focus:-translate-y-1 hover:shadow-lg font-medium"
//                     placeholder="Votre nom complet"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="email" className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
//                     Adresse email
//                   </label>
//                   <input 
//                     type="email" 
//                     id="email" 
//                     name="email" 
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 outline-none bg-white/90 hover:bg-white focus:bg-white transform focus:-translate-y-1 hover:shadow-lg font-medium"
//                     placeholder="votre@email.com"
//                   />
//                 </div> */}

//                 <div className="space-y-2">
//                   <label htmlFor="subject" className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
//                     Sujet
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 outline-none bg-white/90 hover:bg-white focus:bg-white transform focus:-translate-y-1 hover:shadow-lg font-medium"
//                     placeholder="Sujet de votre message"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="message" className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={5}
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="Décrivez votre demande en détail..."
//                     className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 outline-none resize-none bg-white/90 hover:bg-white focus:bg-white transform focus:-translate-y-1 hover:shadow-lg font-medium"
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   aria-label="contact"
//                   onClick={handleSubmit}
//                   disabled={isSubmitting}
//                   className={`w-full font-bold py-5 px-8 rounded-2xl transform hover:-translate-y-1 transition-all duration-300 focus:ring-4 focus:ring-purple-500/50 outline-none relative overflow-hidden group shadow-xl text-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:shadow-2xl `}
//                 >
//                     {/* ${submitStatus === 'sending'
//                       ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
//                       : submitStatus === 'success'
//                         ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
//                         : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:shadow-2xl'
//                     } */}
//                   <span className="relative z-10 flex items-center justify-center space-x-2">
//                     {/* {submitStatus === 'sending' ? (
//                       <>
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         <span>Envoi en cours...</span>
//                       </>
//                     ) : submitStatus === 'success' ? (
//                       <>
//                         <span>✓</span>
//                         <span>Message envoyé !</span>
//                       </>
//                     ) : (
//                       <>
//                         <span>Envoyer</span>
//                         <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//                         </svg>
//                       </>
//                     )} */}
//                      <>
//                         <span>Envoyer</span>
//                         <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//                         </svg>
//                       </>
//                   </span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language; // "fr" ou "ar"

  const [formData, setFormData] = useState({
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("sending");

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(formData.message);

    const mailtoLink = `mailto:contact@innovia-algerie.com?subject=${subject}&body=${body}`;
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
      info: t("contact.methods.email.info")
    },
    {
      icon: <PhoneIcon className="w-8 h-8 text-white" />,
      title: t("contact.methods.phone.title"),
      info: t("contact.methods.phone.info")
    }
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
                    className="group flex items-center space-x-5 p-5 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 border border-white/10 hover:border-white/30"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                      {method.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-dark text-lg group-hover:text-purple-200 transition-colors duration-300">
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
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
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
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
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
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  aria-label="contact"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full font-bold py-5 px-8 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white"
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
