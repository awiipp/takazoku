import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Activity from './pages/Activity';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Activities from './pages/Activities';
import ScrollToTop from './functions/ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 300, once: true, delay: 200 });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activity/:slug" element={<Activity />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
