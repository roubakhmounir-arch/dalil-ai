import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function Places() {
  const { t } = useTranslation();
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { fetchPlaces(); }, []);

  const fetchPlaces = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/places');
      setPlaces(response.data.places);
    } catch (err) {
      setError('Failed to fetch places');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deletePlace = async (id) => {
    try {
      await axios.delete(`/api/places/${id}`);
      setPlaces(places.filter(p => p.id !== id));
    } catch (err) {
      setError('Failed to delete place');
      console.error(err);
    }
  };

  return (
    <div className="places-page">
      <h1>{t('places.title')}</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {places.length === 0 ? (
        <p>{t('places.empty')}</p>
      ) : (
        <div className="places-list">
          {places.map(place => (
            <div key={place.id} className="place-card">
              <img src={place.image} alt={place.name} />
              <div className="place-info">
                <h3>{place.name}</h3>
                <p className="type">{place.type}</p>
                <p className="notes">{place.notes}</p>
                <small>Visited: {new Date(place.visitedAt).toLocaleDateString()}</small>
                <button className="btn btn-danger" onClick={() => deletePlace(place.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Places;