import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/Mainlayout';
import RecipeDetail from './components/RecipeDetail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>

      <Route element={<MainLayout />}>
          <Route path='/' element={<App />} />
          <Route path='/search/:recipeId' element={<RecipeDetail />} />
      </Route>
      
    </Routes>
  </BrowserRouter>
);

