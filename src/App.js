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
        <Route path="/" component={<Home />} />
        <Route path="/Home" component={<Home />} />
        <Route path="/CV" component={<Projects />} />
        <Route path="/Goals" component={<Goals />} />
        <Route path="*" component={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
