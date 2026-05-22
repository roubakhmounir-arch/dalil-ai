const express = require('express');
const router = express.Router();

const recentPlaces = [
  {
    id: 1,
    name: 'Eiffel Tower',
    type: 'landmark',
    location: { lat: 48.8584, lng: 2.2945 },
    visitedAt: new Date('2024-01-15'),
    notes: 'Amazing view from the top',
    image: 'https://via.placeholder.com/300',
  },
];

router.get('/', async (req, res) => {
  try {
    const { userId, limit = 10, language = 'en' } = req.query;
    res.json({
      places: recentPlaces,
      total: recentPlaces.length,
      language,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Places service error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { userId, name, type, location, notes, language = 'en' } = req.body;
    const newPlace = {
      id: Math.max(...recentPlaces.map(p => p.id), 0) + 1,
      name, type, location, notes,
      visitedAt: new Date(),
      image: 'https://via.placeholder.com/300',
    };
    recentPlaces.push(newPlace);
    res.status(201).json({
      message: 'Place added successfully',
      place: newPlace,
      language,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add place' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const place = recentPlaces.find(p => p.id === parseInt(req.params.id));
    if (!place) {
      return res.status(404).json({ error: 'Place not found' });
    }
    res.json(place);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Places service error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const index = recentPlaces.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).json({ error: 'Place not found' });
    }
    const deleted = recentPlaces.splice(index, 1);
    res.json({
      message: 'Place deleted successfully',
      place: deleted[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete place' });
  }
});

module.exports = router;