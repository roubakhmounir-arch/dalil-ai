const express = require('express');
const router = express.Router();

const restaurants = [
  {
    id: 1,
    name: 'Le Petit Bistro',
    cuisine: 'French',
    location: { lat: 48.8566, lng: 2.3522 },
    rating: 4.7,
    priceRange: '$$',
    hours: '11:00 - 23:00',
    description: 'Authentic French cuisine',
    image: 'https://via.placeholder.com/300',
  },
];

router.get('/', async (req, res) => {
  try {
    const { location, cuisine, minPrice, maxPrice, rating, language = 'en' } = req.query;
    let filtered = restaurants;
    res.json({
      total: filtered.length,
      restaurants: filtered,
      language,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Restaurant service error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const restaurant = restaurants.find(r => r.id === parseInt(req.params.id));
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    res.json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Restaurant service error' });
  }
});

router.post('/search', async (req, res) => {
  try {
    const { location, cuisine, priceRange, language = 'en' } = req.body;
    res.json({
      location,
      cuisine,
      results: restaurants,
      language,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Restaurant search error' });
  }
});

module.exports = router;