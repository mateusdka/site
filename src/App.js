import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import CalculaAds from './Pages/CalculaAds';

function App() {
  return (
    <Router>
      <Navigation />
        <div className='conteudo p-4'>
          {/* Estabelece todas as rotas */}
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/sobre" element={ <About /> } />
            <Route path="/projetos/calculadora-de-campanhas" element={ <CalculaAds /> } />
          </Routes>
        </div>
      <Footer />
    </Router>
  );
}

export default App;
