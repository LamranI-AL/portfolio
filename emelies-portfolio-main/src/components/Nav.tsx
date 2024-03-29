import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

  const toggleLanguage = () => {
    setCurrentLang((lang) => (lang === "en" ? "sv" : "en"));
  };

  const linkClass =
    "relative cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left after:rounded-full font-semibold";

  return (
    <nav className="flex gap-8 justify-end items-center">
      <RouterLink to="/" className={linkClass}>
        {/* OM MIG */}
        {t("nav.home").toUpperCase()}
      </RouterLink>

      {location.pathname === "/" ? (
        <ScrollLink
          to="project"
          smooth={true}
          offset={-50}
          duration={500}
          className={linkClass}
        >
          {t("nav.project").toUpperCase()}
        </ScrollLink>
      ) : (
        <RouterLink to="/#project" className={linkClass}>
          {t("nav.project").toUpperCase()}
        </RouterLink>
      )}

      <RouterLink to="/resume" className={linkClass}>
        {t("nav.resume").toUpperCase()}
      </RouterLink>

      {location.pathname === "/" ? (
        <ScrollLink
          to="contact"
          smooth={true}
          offset={-50}
          duration={500}
          className={linkClass}
        >
          {t("nav.contact").toUpperCase()}
        </ScrollLink>
      ) : (
        <RouterLink to="/#contact" className={linkClass}>
          {t("nav.contact").toUpperCase()}
        </RouterLink>
      )}

      {/* If the flag is supposed to change the language or navigate somewhere, use the appropriate Link component */}
      {/* <div className={linkClass}>🇺🇸</div> */}
      {/* Flag buttons for language toggle */}
      {/* <div className={linkClass} onClick={toggleLanguage}>
        {currentLang === 'en' ? '🇸🇪' : '🇺🇸'}
      </div> */}
    </nav>
  );
};

export default Nav;
