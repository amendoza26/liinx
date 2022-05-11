import './App.css';
import Header from './components/Header';
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import Nosotros from './pages/Nosotros';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes';
import LibroReclamaciones from './pages/LibroReclamaciones';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/preguntas-frecuentes' element={<PreguntasFrecuentes />} />
        <Route path='/libro-de-reclamaciones' element={<LibroReclamaciones />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
