# WellnessAI Coach Backend

Node.js Express backend for WellnessAI Coach application.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Update `.env` with your credentials:
   - MongoDB connection string
   - JWT secret
   - OpenAI API key

4. Run in development mode:
```bash
npm run dev
```

5. Run in production mode:
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

## Project Structure
```
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── package.json
└── .env.example
```
