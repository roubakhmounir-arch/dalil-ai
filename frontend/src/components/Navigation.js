import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaHome, FaHotel, FaUtensils, FaMapMarkerAlt, FaRobot } from 'react-icons/fa';

function Navigation() {
  const { t } = useTranslation();
  const navItems = [
    { icon: FaHome, label: t('nav.home'), path: '/' },
    { icon: FaHotel, label: t('nav.hotels'), path: '/hotels' },
    { icon: FaUtensils, label: t('nav.restaurants'), path: '/restaurants' },
    { icon: FaMapMarkerAlt, label: t('nav.places'), path: '/places' },
    { icon: FaRobot, label: t('nav.chat'), path: '/chat' },
  ];

  return (
    <nav className="navigation">
      <ul className="nav-list">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index}>
              <Link to={item.path} className="nav-link">
                <Icon className="nav-icon" />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;