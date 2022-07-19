import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
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

import Layout from './components/Layout/Layout'
import PrivateLayout from './components/Layout/PrivateLayout'
import CustomLayout from './components/Layout/CustomLayout';
import { UserContext } from './UserContext';
import { useMemo } from 'react';
import Login from './pages/Login';
import LoginLayout from './components/Layout/LoginLayout';
import Notificaciones from './pages/Notificaciones';


function App() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  

  return (
    
      <BrowserRouter>
        <UserContext.Provider value={value} >
          
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/nosotros' element={<Nosotros />} />
              <Route path='preguntas-frecuentes' element={<PreguntasFrecuentes />} />

              <Route path='libro-reclamaciones' element={<CustomLayout />} >
                <Route index element={<LibroReclamaciones />} />
                <Route path='form' element={<ReclamacionesForm />} />
              </Route>

              <Route path='terminos-y-condiciones' element={<Terminos />} />
              <Route path='/politica-privacidad' element={<PoliticaPrivacidad />} />
              <Route path='/terminos-y-condiciones-doc' element={<TerminosPDF />} />
              <Route path='/politicas-privacidad-doc' element={<PoliticaPDF />} />
              <Route path='/contacto' element={<Contacto />} />
              
              <Route path='/registro' element={<Registro />} />
              <Route path='/registro/:email' element={<Password />} />
              
            </Route>

            <Route path='login' element={<LoginLayout />} >
              <Route index element={<Login />} />
            </Route>
            
            <Route path='/private' element={<PrivateLayout />} >
              <Route index element={<Private />} />
              <Route path='notificaciones' element={<Notificaciones />} />
            </Route>
          </Routes>
  
        </UserContext.Provider>
      </BrowserRouter>
    
  );
}

export default App;
