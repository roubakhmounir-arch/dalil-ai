# 🏛️ Turath-AI: Moroccan Cultural & Heritage Explorer

An AI-powered web application that celebrates Moroccan cultural heritage through interactive experiences, traditional architecture visualization, and intelligent mosaic analysis.

## ✨ Features

### 🎨 Zellige AI Scanner
- Upload and analyze Moroccan mosaic images
- AI-powered identification of mosaic styles (Tetouani, Fassi, Andalusian)
- Geometric composition breakdown
- Visual feedback with authentic Moroccan design

### 🗺️ Heritage GIS & Water Network Map
- Interactive map of all Moroccan provinces (including southern regions)
- Toggleable layers showing historical points of interest
- Traditional water fountains ("Seqqayas") locations
- Historical Medina water distribution networks
- Real-time exploration of cultural landmarks

### 🏘️ Moroccan Design System
- **Zellige Patterns**: Authentic geometric SVG backgrounds
- **Moorish Architecture**: Custom arch-inspired border-radius utilities
- **Traditional Colors**: Majorelle Blue, Terracotta, Desert Sand, Mint Green
- **Arabic Typography**: Modern + decorative fonts for authentic feel

## 🏗️ Tech Stack

### Frontend
- **Framework**: Next.js 14+ (React)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Maps**: Leaflet + React-Leaflet
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: Mock JSON (extensible to MongoDB/PostgreSQL)
- **Middleware**: CORS, Morgan logging
- **Environment**: dotenv

## 📦 Project Structure

```
turath-ai/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── scanner/
│   │   │   │   └── page.tsx
│   │   │   └── map/
│   │   │       └── page.tsx
│   │   ├── components/
│   │   │   ├── ZelligeBackground.tsx
│   │   │   ├── MoorArch.tsx
│   │   │   ├── HeritageMaps.tsx
│   │   │   └── ZelligeScanner.tsx
│   │   ├── styles/
│   │   │   └── globals.css
│   │   └── utils/
│   │       └── api.ts
│   ├── public/
│   ├── next.config.js
│   ├── tailwind.config.js
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── server.js
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── data/
│   │   └── middleware/
│   ├── .env
│   └── package.json
├── .gitignore
├── .env.example
└── package.json
```

## 🚀 Quick Start

```bash
# Clone and setup
git clone https://github.com/roubakhmounir-arch/dalil-ai.git
cd dalil-ai
git checkout turath-ai

# Install dependencies
npm install

# Start development
npm run dev
```

Frontend: http://localhost:3000
Backend: http://localhost:5000

## 🎨 Design System

**Colors:**
- Primary: Majorelle Blue (#1A5F7A)
- Secondary: Terracotta (#E2725B)
- Background: Desert Sand (#F9F6F0)
- Accent: Mint Green (#3EB489)

**Typography:**
- Body: Modern sans-serif (Inter, Poppins)
- Headings: Arabic-inspired decorative (Amiri, Cairo)

## 📝 License

MIT - Made with ❤️ for Moroccan Heritage
