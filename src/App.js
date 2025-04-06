import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import Calculadora from './Pages/Calculadora/Calculadora';
import Cartas from './Pages/Cartas/Cartas';

function App() {
  return (
    <Router>
      <Navigation />
        <div className='conteudo p-4'>
          {/* Estabelece todas as rotas */}
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/sobre" element={ <About /> } />
            <Route path="/projetos/calculadora-de-campanhas" element={ <Calculadora /> } />
            <Route path="/projetos/cartas-de-tarot" element={ <Cartas /> } />
          </Routes>
        </div>
      <Footer />
    </Router>
  );
}

export default App;
