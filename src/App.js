import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import Nosotros from './pages/Nosotros';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes';
import LibroReclamaciones from './pages/LibroReclamaciones';
import Terminos from './pages/Terminos';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import TerminosPDF from './pages/TerminosPDF';
import Contacto from './pages/Contacto';
import PoliticaPDF from './pages/PoliticaPDF';
import ReclamacionesForm from './pages/ReclamacionesForm';
import Registro from './pages/Registro';
import Password from './components/steps/Password';
import Private from './pages/Private';
import Layout from './components/Layout'
import PrivateLayout from './components/PrivateLayout'

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/preguntas-frecuentes' element={<PreguntasFrecuentes />} />
          <Route path='/libro-reclamaciones' element={<LibroReclamaciones />} />
          <Route path='/terminos-y-condiciones' element={<Terminos />} />
          <Route path='/politica-privacidad' element={<PoliticaPrivacidad />} />
          <Route path='/terminos-y-condiciones-doc' element={<TerminosPDF />} />
          <Route path='/politicas-privacidad-doc' element={<PoliticaPDF />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/reclamaciones-form' element={<ReclamacionesForm />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/password' element={<Password />} />
        </Route>
        <Route path='/private' element={<PrivateLayout />} >
          <Route path='/zone' element={<Private />} />
        </Route>
      </Routes>
      
        
        
      
    </BrowserRouter>
  );
}

export default App;
