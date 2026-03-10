// "use client";

// import React from "react";
// import { Typography, Card, CardBody } from "@material-tailwind/react";
// import Image from "next/image";
// import { Button } from "@material-tailwind/react";

// const FAQS = [
//   {
//     title: "Comment commencer sur l’application ?",
//     desc: "Il suffit de télécharger l’application, créer un compte gratuit et commencer à mettre en vente vos articles ou à parcourir les annonces disponibles.",
//   },
//   {
//     title: "L'application est-elle gratuite ?",
//     desc: "À l’inscription, vous recevez 20 points offerts pour tester l’application et publier vos premières annonces. Une fois ces points utilisés, vous pouvez acheter des packs de points pour continuer à vendre ou accéder aux différentes fonctionnalités.",
//   },
//   {
//     title: "Comment mettre un article en vente ?",
//     desc: "Prenez une photo de votre article, ajoutez une description, fixez un prix et publiez votre annonce en quelques secondes directement depuis votre téléphone.",
//   },
//   {
//     title: "Comment se passent les paiements ?",
//     desc: "Les paiements sont sécurisés via notre système intégré. L’argent est transféré une fois la transaction confirmée, afin de protéger à la fois l’acheteur et le vendeur.",
//   },
//   {
//     title: "Puis-je supprimer ou modifier mon annonce ?",
//     desc: "Oui, vous pouvez à tout moment modifier le prix, la description, ou supprimer votre annonce depuis votre espace personnel.",
//   },
//   {
//     title: "Que faire si j’ai un problème technique ?",
//     desc: "Notre équipe support est disponible pour vous aider. Vous pouvez nous contacter directement via l’application (chat ou e-mail).",
//   },
// ];

// export function Faqs() {
//   return (
//     <section className="px-8 py-20">
//       <div className="container max-w-6xl mx-auto">
//         <div className="text-center">
//           <h2 className="text-2xl  sm:text-3xl md:text-6xl font-black text-dark leading-tight mb-6">
//             Questions fréquentes
//             <div className="flex justify-center">
//             <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
//           </div>
//           </h2>

//           <p className="mx-auto mb-24 text-lg text-gray-500 lg:w-3/5">
//             Voici les réponses aux questions que les nouveaux utilisateurs se posent le plus souvent avant d’acheter ou vendre sur notre application.
//           </p>
//         </div>

//         <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
//           {FAQS.map(({ title, desc }) => (
//             <Card key={title} className="shadow-none bg-transparent" {...({} as any)}>
//               <CardBody>
//                 <Typography variant="h4" color="blue-gray" className="pb-6">
//                   {title}
//                 </Typography>
//                 <Typography className="text-gray-600 text-justify">{desc}</Typography>
//               </CardBody>
//             </Card>
//           ))}
//         </div>
//       </div>

//       <section className="px-8 py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-3xl">
//         <div className="container max-w-5xl mx-auto text-center">
//           <h2 className="text-2xl  sm:text-3xl md:text-6xl font-black text-dark leading-tight mb-6">
//             Commencez dès aujourdl&apos;hui
//           </h2>
//           <p className="text-lg md:text-xl mb-8">
//             Inscrivez-vous maintenant et bénéficiez de{" "}
//             <span className="font-semibold">20 points offerts</span> pour publier vos premières annonces
//             et découvrir toutes les fonctionnalités de notre marketplace.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               aria-label="app store"
//               size="lg"
//               className="flex justify-center items-center gap-3 py-4 px-6 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-0"
//             >
//               <Image
//                 width={24}
//                 height={24}
//                 src="/logos/logo-apple.png"
//                 alt="app store"
//                 className="w-6 h-6"
//                 loading="lazy"
//               />
//               <span className="text-sm font-semibold mt-1">App Store</span>
//             </Button>

//             <Button
//               size="lg"
//               aria-label="google store"
//               className="flex justify-center items-center gap-3 py-4 px-6 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-0"
//             >
//               <Image
//                 width={24}
//                 height={24}
//                 src="/logos/logo-google.png"
//                 alt="google play"
//                 className="w-6 h-6"
//                 loading="lazy"
//               />
//               <span className="text-sm font-semibold mt-1">Google Play</span>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }

// export default Faqs;

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

      <section className="px-8 py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-3xl mt-16">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-black text-dark leading-tight mb-6" >
            {t("faq.ctaTitle")}
          </h2>
          <p className="text-lg md:text-xl mb-8">{t("faq.ctaDesc")}</p>
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
