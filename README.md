# Dalil AI - Travel Assistant App

🌍 **Dalil AI** is a modern travel application featuring an AI-powered assistant, hotel and restaurant discovery, and personalized recent places tracking. It supports multiple languages: **French**, **Arabic**, and **English**.

## Features

✨ **AI Travel Assistant** - Get personalized travel recommendations and answers to your questions
🏨 **Hotel Discovery** - Find and compare hotels with ratings and amenities
🍽️ **Restaurant Guide** - Browse restaurants by cuisine and location
📍 **Recent Places** - Track and revisit your favorite locations
🌐 **Multi-language Support** - French, Arabic, and English interfaces

## Tech Stack

- **Frontend**: React (Web) & React Native (Mobile)
- **Backend**: Node.js/Express
- **AI Integration**: OpenAI API
- **Database**: PostgreSQL/MongoDB
- **Real-time**: WebSocket/Socket.io
- **Styling**: CSS3 with Responsive Design

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/roubakhmounir-arch/dalil-ai.git
cd dalil-ai

# Install dependencies
npm install

# Configure environment
cp .env.example .env

# Start development
npm run dev
```

This will start:
- Backend: http://localhost:5000
- Frontend: http://localhost:3000

## API Endpoints

### AI Assistant
- `POST /api/ai/chat` - Chat with AI assistant
- `POST /api/ai/recommendations` - Get travel recommendations

### Hotels
- `GET /api/hotels` - List hotels with filters
- `GET /api/hotels/:id` - Get hotel details
- `POST /api/hotels/search` - Search hotels

### Restaurants
- `GET /api/restaurants` - List restaurants with filters
- `GET /api/restaurants/:id` - Get restaurant details
- `POST /api/restaurants/search` - Search restaurants

### Places
- `GET /api/places` - Get recent places
- `POST /api/places` - Add a place
- `GET /api/places/:id` - Get place details
- `DELETE /api/places/:id` - Delete a place

## Languages Supported

- 🇬🇧 English
- 🇫🇷 Français (French)
- 🇸🇦 العربية (Arabic)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT License - See [LICENSE](LICENSE) file for details.

## Author

**Roubakh Mounir**
- GitHub: [@roubakhmounir-arch](https://github.com/roubakhmounir-arch)

---
Made with ❤️ for travelers everywhere