import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cuisine from './pages/Cuisine';
import Searched from './pages/Searched';

import RecipeDetail from './components/RecipeDetail';

import NavBar from './components/NavBar';
import Footer from './components/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  
);


