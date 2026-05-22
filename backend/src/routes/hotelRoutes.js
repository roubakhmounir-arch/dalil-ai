const express = require('express');
const router = express.Router();

const hotels = [
  {
    id: 1,
    name: 'Luxury Palace Hotel',
    location: { lat: 48.8566, lng: 2.3522 },
    rating: 4.8,
    price: 250,
    amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant'],
    description: 'A luxury hotel in the heart of Paris',
    image: 'https://via.placeholder.com/300',
  },
];

router.get('/', async (req, res) => {
  try {
    const { location, minPrice, maxPrice, rating, language = 'en' } = req.query;
    let filtered = hotels;
    res.json({
      total: filtered.length,
      hotels: filtered,
      language,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hotel service error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const hotel = hotels.find(h => h.id === parseInt(req.params.id));
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    res.json(hotel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hotel service error' });
  }
});

router.post('/search', async (req, res) => {
  try {
    const { location, checkInDate, checkOutDate, guests, language = 'en' } = req.body;
    res.json({
      location,
      results: hotels,
      language,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hotel search error' });
  }
});

module.exports = router;