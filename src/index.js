import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cuisine from './pages/Cuisine';
import Searched from './pages/Searched';
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import RecipeDetail from './components/RecipeDetail';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProfilePage from './pages/ProfilePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);


