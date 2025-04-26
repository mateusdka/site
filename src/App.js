// Arquivo principal do projeto
// Este arquivo é responsável por renderizar o componente principal do aplicativo
// e configurar as rotas utilizando o React Router.
// Ele também importa os componentes de navegação e rodapé, além de estilos globais.
// O componente App é o ponto de entrada do aplicativo e encapsula toda a lógica de roteamento.
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import Calculadora from './Pages/Calculadora/Calculadora';
import Cartas from './Pages/Cartas/Cartas';
import Clima from './Pages/Clima/Clima';
import Precos from './Pages/Precos/Precos';

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
            <Route path="/projetos/precos" element={ <Precos /> } />
            <Route path="/projetos/cartas-de-tarot" element={ <Cartas /> } />
            <Route path="/projetos/clima" element={ <Clima /> } />
          </Routes>
        </div>
      <Footer />
    </Router>
  );
}

export default App;
