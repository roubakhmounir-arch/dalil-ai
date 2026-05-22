import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function Hotels() {
  const { t } = useTranslation();
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/hotels');
      setHotels(response.data.hotels);
    } catch (err) {
      setError('Failed to fetch hotels');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hotels-page">
      <h1>{t('hotels.title')}</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="hotels-grid">
        {hotels.map(hotel => (
          <div key={hotel.id} className="hotel-card">
            <img src={hotel.image} alt={hotel.name} />
            <h3>{hotel.name}</h3>
            <p className="rating">⭐ {hotel.rating}</p>
            <p className="price">${hotel.price}/night</p>
            <p>{hotel.description}</p>
            <button className="btn btn-secondary">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;