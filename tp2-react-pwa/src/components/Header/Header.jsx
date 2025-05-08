import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ROUTES from "../../const/Routes";
import { useTranslation } from "react-i18next";
import i18n from "../../i18";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [idioma, setIdioma] = useState(localStorage.getItem("i18nextLng") || "es");

  const cambiarIdioma = () => {
    const nuevoIdioma = idioma === "es" ? "en" : "es";
    i18n.changeLanguage(nuevoIdioma);
    localStorage.setItem("i18nextLng", nuevoIdioma);
  };

  useEffect(() => {
    i18n.on("languageChanged", (lng) => {
      setIdioma(lng);
    });
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md align-middle">
      <nav className="w-full flex justify-between px-4 py-3">
        <div onClick={() => navigate(ROUTES.home)} className="flex justify-center items-center cursor-pointer">
          <img className="w-16 md:h-10" src="/logo.svg" alt="logo" />
        </div>

        <div className="flex items-center gap-4">
          {location.pathname !== ROUTES.favoritos && (
            <button onClick={() => navigate(ROUTES.favoritos)} className="text-yellow-500 font-semibold text-lg font-semibold">
              ⭐ {t("favorites")}
            </button>
          )}
          <button onClick={cambiarIdioma} className="text-gray-600 text-lg font-medium">
            <img className='w-9 h-6 md:w-10 md:h-7 rounded-sm' src={idioma === "en" ? "/Flag_of_the_United_States.svg.webp" : "/Flag_of_Argentina.svg.png"} alt={t('language')} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
