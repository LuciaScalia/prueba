import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '../../const/Routes';
import { useNavigate } from "react-router-dom";

const Detalles = () => {
  const {id} = useParams();  
  const [recetaEnVista, setRecetaEnVista] = useState();
  const { i18n, t } = useTranslation();
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const detallesReceta = async () => {
      try {
          const detallesRecetaResult = await fetch(i18n.language === "es" ? `https://68113cbe3ac96f7119a4032e.mockapi.io/api/v1/Recetas/${id}` : `https://681bd8566ae7c794cf6ff220.mockapi.io/api/v2/recetasIngles/${id}`);
          if (!detallesRecetaResult.ok) {
            setNotFound(true);
            return;
          }
          const detallesRecetaResultParsed = await detallesRecetaResult.json();
          if (!detallesRecetaResultParsed || Object.keys(detallesRecetaResultParsed).length === 0) {
            setNotFound(true);
            return;
          }
          setRecetaEnVista(detallesRecetaResultParsed);
      } catch (error) {
          console.log("Error al recuperar los datos: " + error);
      }
    }; 
    detallesReceta();
  }, [id, i18n.language]);

  if (notFound) {
    return (
      <div>
        <div className="min-h-screen flex items-center justify-center bg-[#131e3a]">
          <div className="relative">
            <img src="/404.jpg" alt="404 Error" className="w-full max-w-lg mb-40" />

            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-[#e94f1d] text-lg sm:text-xl md:text-2xl font-semibold ml-1 mb-40">
              {t('notFound404')}
            </div>
            <button
              button onClick={() => navigate(ROUTES.home)} 
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded shadow-md ml-1 mb-40  " 
            >
              {t('backHome')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!recetaEnVista) return <h1 className="text-center text-lg">{t('loading')}</h1>;

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-center content-center'>
        <div className='flex flex-col md:flex-row justify-center border bg-white border-gray-500 content-center sm:w-full md:w-3/4 max-w-full md:rounded-md md:shadow-md md:m-10'>
          <div className='w-full md:w-1/2'>
            <img src={recetaEnVista.imagen} alt={recetaEnVista.nombre} className='md:rounded-tl-md'/>
            <div className='p-8 pt-4'>
              <h4 className='text-center font-dancing text-4xl'>{recetaEnVista.nombre}</h4>
              <div className='mt-5 text-gray-600'>
                <div className='p-1'>{t('countryOfOrigin')}: {recetaEnVista.pais}</div>
                <div className='p-1'>{t('totalTime')}: {recetaEnVista.tiempo}</div>
              </div>
              <h2 className='text-center font-dancing text-3xl p-6 pb-0'>{t('description')}</h2>
              <p className='pt-4 pl-1 text-gray-600'>{recetaEnVista.descripcion}</p>
            </div>
          </div>

          <div className='w-full md:w-1/2 p-8 md:border-l border-gray-500 p-6'>
            <h2 className='text-center font-dancing text-3xl p-6 pt-1'>{t('ingredients')}</h2>
              <ol className='list-disc pl-6'>
                {recetaEnVista.ingredientes.map((ingrediente, index) => (
                  <li key={index} className='m-4 text-gray-600'>{ingrediente}</li>
                ))}
              </ol>
            <h2 className='text-center font-dancing text-3xl p-3 pb-2'>{t('steps')}</h2>
            <div>
              <ol className='list-decimal pl-6'>
                {recetaEnVista.pasos.map((paso, index) => (
                  <li key={index} className='m-4 text-gray-600'>{paso}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalles;