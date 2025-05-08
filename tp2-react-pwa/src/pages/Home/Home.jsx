import React, { useEffect, useState } from 'react';
import TarjetaReceta from '../../components/TarjetaReceta/TarjetaReceta';
import { useTranslation } from "react-i18next";

const Home = () => {
  const [recetas, setRecetas] = useState();
  const [busqueda, setBusqueda] = useState('');
  const [recetasFiltradas, setRecetasFiltradas] = useState([]);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const obtenerRecetas = async () => {
      try {
        const response = await fetch(i18n.language === "es" ? 'https://68113cbe3ac96f7119a4032e.mockapi.io/api/v1/Recetas' : "https://681bd8566ae7c794cf6ff220.mockapi.io/api/v2/recetasIngles");
        if (!response.ok) throw new Error(`Error en la solicitud: ${response.status}`);
        const data = await response.json();
        setRecetas(data);
      } catch (error) {
        console.error("Error al obtener las recetas:", error);
      }
    };
    obtenerRecetas();
  }, [i18n.language]);
  
  useEffect(() => {
    if (!recetas) return;
    const texto = busqueda.toLowerCase();
    const filtradas = recetas.filter((receta) => {
      const nombreCoincide = receta.nombre.toLowerCase().includes(texto);
      const ingredientesCoinciden = receta.ingredientes?.some((ing) =>
        ing.toLowerCase().includes(texto)
      );
      return nombreCoincide || ingredientesCoinciden;
    });
    setRecetasFiltradas(filtradas);
  }, [busqueda, recetas]);

  if (!recetas) return <h1 className="text-center text-lg">{t('loading')}</h1>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-700 font-dancing">{t('tittle')}</h1>
        
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder={t('search') }
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recetasFiltradas?.length > 0 ? (
            recetasFiltradas.map((receta) => (
            <TarjetaReceta key={receta.id} receta={receta} />
          ))
          ) : (
            <div className="flex justify-center items-center col-span-3">
              <p className="text-center text-gray-500 text-lg">{t('noResultsFound')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;