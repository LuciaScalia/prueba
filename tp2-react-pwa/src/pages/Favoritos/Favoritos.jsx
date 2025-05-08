import React, { useEffect, useState } from "react";
import TarjetaReceta from "../../components/TarjetaReceta/TarjetaReceta";
import { useTranslation } from "react-i18next";

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const listaFavs = JSON.parse(localStorage.getItem("favoritos")) || [];
  
    const fetchFavoritos = async () => {
      try {
        const idioma = i18n.language;
        const apiURL = idioma === "es"
          ? "https://68113cbe3ac96f7119a4032e.mockapi.io/api/v1/Recetas"
          : "https://681bd8566ae7c794cf6ff220.mockapi.io/api/v2/recetasIngles";
  
        const response = await fetch(apiURL);
  
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
  
        const data = await response.json();
  
        const recetasFavoritas = data.filter(receta =>
          listaFavs.some(fav => fav.id === receta.id)
        );
  
        setFavoritos(recetasFavoritas);
      } catch (error) {
        console.error("Error al obtener los favoritos:", error);
      }
    };
  
    fetchFavoritos();
  }, [i18n.language]);

  const eliminarFavorito = (id) => {
    const nuevosFavoritos = favoritos.filter((receta) => receta.id !== id);
    setFavoritos(nuevosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-700 font-dancing">{t('favRecipes')}</h1>

        {favoritos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {favoritos.map((receta) => (
              <div key={receta.id} className="relative">
                <TarjetaReceta receta={receta} onToggleFavorito={() => eliminarFavorito(receta.id)} />

              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-500">{t('noFavorites')}</p>
        )}
      </div>
    </div>
  );
};

export default Favoritos;