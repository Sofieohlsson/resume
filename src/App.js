import React from 'react';
import {HashRouter, Routes, Route} from "react-router-dom"; 

import './App.css';

import Navbar from "./components/navbar/Navbar"; 
import Footer from "./components/footer/Footer"; 
import Home from "./pages/Home"; 
import Projects from './pages/Projects';
import Goals from './pages/Goals';
import PageNotFound from './pages/PageNotFound';


function App() {
  return (
    <HashRouter> 
      <Navbar />
      <Routes>
        <Route path="cv/" element={<Home />} />
        <Route path="cv/Home" element={<Home />} />
        <Route path="cv/CV" element={<Projects />} />
        <Route path="cv/Goals" element={<Goals />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
