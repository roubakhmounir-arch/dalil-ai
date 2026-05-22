import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaHotel, FaUtensils, FaRobot } from 'react-icons/fa';

function Home() {
  const { t } = useTranslation();
  const features = [
    { icon: FaRobot, title: 'AI Assistant', description: 'Get personalized travel advice', path: '/chat' },
    { icon: FaHotel, title: 'Hotels', description: 'Find and compare hotels', path: '/hotels' },
    { icon: FaUtensils, title: 'Restaurants', description: 'Discover great dining options', path: '/restaurants' },
    { icon: FaMapMarkerAlt, title: 'Recent Places', description: 'Track your favorite locations', path: '/places' },
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <h1>{t('home.welcome')}</h1>
        <p>{t('home.subtitle')}</p>
        <Link to="/chat" className="btn btn-primary">{t('home.get_started')}</Link>
      </section>
      <section className="features">
        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link key={index} to={feature.path} className="feature-card">
                <Icon className="feature-icon" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;