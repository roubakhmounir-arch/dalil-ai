import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function Restaurants() {
  const { t } = useTranslation();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/restaurants');
      setRestaurants(response.data.restaurants);
    } catch (err) {
      setError('Failed to fetch restaurants');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="restaurants-page">
      <h1>{t('restaurants.title')}</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="restaurants-grid">
        {restaurants.map(restaurant => (
          <div key={restaurant.id} className="restaurant-card">
            <img src={restaurant.image} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
            <p className="cuisine">{restaurant.cuisine}</p>
            <p className="rating">⭐ {restaurant.rating}</p>
            <p className="hours">{restaurant.hours}</p>
            <button className="btn btn-secondary">Make Reservation</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurants;