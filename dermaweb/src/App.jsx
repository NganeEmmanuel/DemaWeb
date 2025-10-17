// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Docs from './pages/Docs';
import Contact from './pages/Contact';
import { Toaster } from "react-hot-toast";
import DownloadPage from './pages/DownloadPage';

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/docs' element={<Docs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/download' element={<DownloadPage />} />
        </Routes>
      </MainLayout>
      <Toaster position="top-right" />
    </BrowserRouter>
  );
}
