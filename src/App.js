import './App.css';
import Header from './components/Header';
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import Nosotros from './pages/Nosotros';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes';
import LibroReclamaciones from './pages/LibroReclamaciones';
import Terminos from './pages/Terminos';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import TerminosPDF from './pages/TerminosPDF';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/preguntas-frecuentes' element={<PreguntasFrecuentes />} />
        <Route path='/libro-de-reclamaciones' element={<LibroReclamaciones />} />
        <Route path='/terminos-y-condiciones' element={<Terminos />} />
        <Route path='/politica-privacidad' element={<PoliticaPrivacidad />} />
        <Route path='/terminos-y-condiciones-doc' element={<TerminosPDF />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
