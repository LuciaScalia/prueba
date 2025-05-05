import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        details: "Details",
        language: "English",
        favorites: "Favorites",
        totalTime: "Total time",
        countryOfOrigin: "Country of origin",
        loading: "Loading...",
        steps: "Steps",
        description: "Description",
        ingredients: "Ingredients",
        search: "Search by name or ingredient...",
        tittle: "List of Recipes",
        favRecipes: "My favorite recipes",
        noResultsFound: "No results found",
        noFavorites: "There are no recipes",
        notFound404: "Page not Found",
        backHome: "Back to Home"
      }
    },
    es: {
      translation: {
        details: "Detalles",
        language: "Español",
        favorites: "Favoritos",
        totalTime: "Tiempo de preparación",
        countryOfOrigin: "País de origen",
        loading: "Cargando...",
        steps: "Pasos",
        description: "Descripción",
        ingredients: "Ingredientes",
        search: "Buscar por nombre o ingrediente...",
        tittle: "Lista de Recetas",
        favRecipes: "Mis recetas favoritas",
        noFavorites: "No hay recetas",
        noResultsFound: "No se encontraron resultados",
        notFound404: "Pagina no Encontrada",
        backHome: "Volver al inicio"
      }
    }
  },
  lng: localStorage.getItem("i18nextLng"), // Idioma por defecto
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
