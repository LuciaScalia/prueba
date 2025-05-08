import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../const/Routes';
import { useTranslation } from 'react-i18next';

const TarjetaReceta = ({ receta, onToggleFavorito }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [esFavorito, setEsFavorito] = useState(false);

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    setEsFavorito(favoritos.some((fav) => fav.id === receta.id));
  }, [receta.id]);

  const toggleFavorito = () => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (esFavorito) {
      const nuevosFavoritos = favoritos.filter((fav) => fav.id !== receta.id);
      localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
      setEsFavorito(false);

      if (onToggleFavorito) {
        onToggleFavorito();
      }
    } else {
      favoritos.push(receta);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      setEsFavorito(true);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex-col">
      <div className="h-48 bg-gray-300 cursor-pointer overflow-hidden" onClick={() => navigate(ROUTES.detalles.replace(":id", receta.id))}>
        <img src={receta.imagen} alt={receta.nombre} className="w-full h-full object-cover" />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{receta.nombre}</h3>
        <p className="text-sm text-gray-500">
          <strong>{t('countryOfOrigin')}:</strong> {receta.pais}
        </p>
        <p className="text-sm text-gray-500">
          <strong>{t('totalTime')}:</strong> {receta.tiempo}
        </p>
        <p className="text-sm text-gray-700">{receta.descripcion}</p>

        <div className="mt-4 flex justify-end">
          <button onClick={toggleFavorito} className="focus:outline-none transition-colors duration-300">
            <span className={`text-4xl ${esFavorito ? 'text-red-500 hover:text-gray-500' : 'text-gray-500 hover:text-red-500'}`}>
              ♥
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TarjetaReceta;