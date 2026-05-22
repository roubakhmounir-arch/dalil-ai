import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo"><h1>{t('app_title')}</h1></Link>
        <div className="language-selector">
          <button className={i18n.language === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')}>EN</button>
          <button className={i18n.language === 'fr' ? 'active' : ''} onClick={() => changeLanguage('fr')}>FR</button>
          <button className={i18n.language === 'ar' ? 'active' : ''} onClick={() => changeLanguage('ar')}>AR</button>
        </div>
      </div>
    </header>
  );
}

export default Header;