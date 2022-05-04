import './App.css';
import Header from './components/Header';
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        
          <Route path='/' element={<Home />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
