import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Restaurants from './pages/Restaurants';
import Places from './pages/Places';
import Chat from './pages/Chat';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
    document.documentElement.lang = savedLanguage;
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
  }, [i18n]);

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/places" element={<Places />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </main>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;