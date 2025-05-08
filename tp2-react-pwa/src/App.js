import { BrowserRouter, Routes, Route } from "react-router-dom"
import ROUTES from './const/Routes'
import Home from './pages/Home/Home'
import Detalles from './pages/Detalles/Detalles';
import Favoritos from './pages/Favoritos/Favoritos';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.detalles} element={<Detalles />} />
          <Route path={ROUTES.favoritos} element={<Favoritos />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App
