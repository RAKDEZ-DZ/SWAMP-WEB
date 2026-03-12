import React, { useEffect, useRef, useState } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = href?.replace('#', '');
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        onClick={handleClick}
        variant="small"
        className="font-medium cursor-pointer"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const { t, i18n } = useTranslation();

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [lang, setLang] = useState("fr");
  useEffect(() => {
    const loadLang = () => {
      const storedLang = localStorage.getItem("appLanguage");
      if (storedLang) {
        setLang(storedLang);
        i18n.changeLanguage(storedLang);
        if (lang == "ar") {
          setSelected({ code: "ar", label: "عر", flag: "/algeria.png" })
        }
        if (lang == "fr") {
          setSelected({ code: "fr", label: "Fr", flag: "/france.png" })
        }
      }
    };
    loadLang();
  }, [i18n, lang]);

  const handleLangChange = (newLang: string) => {
    setLang(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("appLanguage", newLang);
  };

  const languages = [
    { code: "fr", label: "Fr", flag: "/france.png" },
    { code: "ar", label: "عر", flag: "/algeria.png" },
  ];

  const [selected, setSelected] = useState(languages[0]);
  const [openLang, setOpenLang] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);


  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      className="fixed top-0 z-50 border-0"
      style={{ backgroundColor: isScrolling ? "rgba(255,255,255,0.9)" : "#159FD8" }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="bg-white rounded-lg px-2 ">
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="object-contain"
            loading="lazy"
          />
        </div>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${isScrolling ? "text-gray-900" : "text-white"
            }`}
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
        >
          <NavItem href="#home">{t('Navbar.home')}</NavItem>
          <NavItem href="#about">{t('Navbar.about')}</NavItem>
          <NavItem href="#contact">{t('Navbar.contact')}</NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
            onClick={() => window.open("https://www.tiktok.com/@nchriha_by_innovia", "_blank")}
          >
            <i className="fa-brands fa-tiktok text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
            onClick={() => window.open("https://www.facebook.com/share/175RmdCeS4/", "_blank")}
          >
            <i className="fa-brands fa-facebook text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
            onClick={() => window.open("https://www.instagram.com/nchriha_by_innovia_algerie", "_blank")}
          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>

          <div ref={dropdownRef} style={{ position: "relative", width: 90, fontFamily: "sans-serif" }}>
            <button
              onClick={() => setOpenLang(!openLang)}
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 8,
                border: "1px solid #fff",
                backgroundColor: "#28A9DF",
                display: "flex",
                alignItems: "center",
                gap: 10,
                cursor: "pointer",
                fontWeight: "600",
                color: "white"
              }}
            >
              <img src={selected.flag} alt={selected.label} style={{ width: 24, height: 16, objectFit: "cover" }} loading="lazy" />
              {selected.label}
              <span style={{ marginLeft: "auto" }}>▼</span>
            </button>

            {openLang && (
              <ul
                style={{
                  position: "absolute",
                  top: "calc(100% + 6px)",
                  width: "100%",
                  maxHeight: 150,
                  overflowY: "auto",
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: 8,
                  padding: 0,
                  margin: 0,
                  listStyle: "none",
                  zIndex: 1000,
                }}
              >
                {languages.map(({ code, label, flag }) => (
                  <li
                    key={code}
                    onClick={() => {
                      handleLangChange(code)
                      setSelected({ code, label, flag });
                      setOpenLang(false);
                    }}
                    style={{
                      padding: "8px 12px",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      cursor: "pointer",
                      color: "black",
                      backgroundColor: selected.code === code ? "#eee" : "transparent",
                    }}
                  >
                    <img src={flag} alt={label} style={{ width: 24, height: 16, objectFit: "cover" }} loading="lazy" />
                    {label}
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto flex flex-col items-center justify-center mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900 items-center">
            <div ref={dropdownRef} style={{ position: "relative", width: 90, fontFamily: "sans-serif" }}>
              <button
                onClick={() => setOpenLang(!openLang)}
                style={{
                  width: "100%",
                  padding: 10,
                  borderRadius: 8,
                  border: "1px solid #fff",
                  backgroundColor: "#28A9DF",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  cursor: "pointer",
                  fontWeight: "600",
                  color: "white"
                }}
              >
                <img src={selected.flag} alt={selected.label} style={{ width: 24, height: 16, objectFit: "cover" }} loading="lazy" />
                {selected.label}
                <span style={{ marginLeft: "auto" }}>▼</span>
              </button>

              {openLang && (
                <ul
                  style={{
                    position: "absolute",
                    top: "calc(100% + 6px)",
                    width: "100%",
                    maxHeight: 150,
                    overflowY: "auto",
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: 8,
                    padding: 0,
                    margin: 0,
                    listStyle: "none",
                    zIndex: 1000,
                  }}
                >
                  {languages.map(({ code, label, flag }) => (
                    <li
                      key={code}
                      onClick={() => {
                        handleLangChange(code)
                        setSelected({ code, label, flag });
                        setOpenLang(false);
                      }}
                      style={{
                        padding: "8px 12px",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        cursor: "pointer",
                        color: "black",
                        backgroundColor: selected.code === code ? "#159FD8" : "transparent",
                        color: selected.code === code ? "white" : "black",
                      }}
                    >
                      <img src={flag} alt={label} style={{ width: 24, height: 16, objectFit: "cover" }} loading="lazy" />
                      {label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <NavItem href="#home">{t('Navbar.home')}</NavItem>
            <NavItem href="#about">{t('Navbar.about')}</NavItem>
            <NavItem href="#contact">{t('Navbar.contact')}</NavItem>
          </ul>
          <div className="mt-4 flex items-center justify-center gap-2">
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-tiktok text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>

          </div>
        </div>
      </Collapse>

    </MTNavbar>
  );
}

export default Navbar;