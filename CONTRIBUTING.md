# Contributing to Dalil AI

Thank you for your interest in contributing to Dalil AI!

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Setup

1. Clone: `git clone https://github.com/roubakhmounir-arch/dalil-ai.git && cd dalil-ai`
2. Install: `npm install`
3. Configure: `cp .env.example .env`
4. Start: `npm run dev`

## Project Structure

```
dalil-ai/
├── backend/    # Express.js API
├── frontend/   # React web app
└── docs/       # Documentation
```

## Code Standards

- Use 2-space indentation
- Follow ESLint rules
- Write meaningful comments
- Keep functions focused

## Commit Messages

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation
- `style:` Code style
- `refactor:` Refactoring
- `test:` Tests

## PR Process

1. Create branch: `git checkout -b feature/name`
2. Commit changes
3. Push: `git push origin feature/name`
4. Open PR with clear description

## Multi-language Support

Add strings to all language files:
- `frontend/src/locales/en.json`
- `frontend/src/locales/fr.json`
- `frontend/src/locales/ar.json`

## License

Contributions are licensed under MIT License.
