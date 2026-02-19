# WellnessAI Coach - Full Stack Application

A comprehensive full-stack wellness and fitness coaching application powered by AI.

**Stack:**
- React frontend with Vite
- Node.js Express backend
- MongoDB Atlas database
- JWT authentication
- OpenAI integration

## Project Structure

```
WellnessAI-coach/
├── backend/         # Express.js API server
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── package.json
│   └── .env.example
├── frontend/        # React application
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── .env.example
├── .gitignore
└── README.md
```

## Setup Instructions

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your credentials:
   - **MONGODB_URI**: MongoDB Atlas connection string
   - **JWT_SECRET**: Secret key for JWT tokens
   - **OPENAI_API_KEY**: Your OpenAI API key
   - **PORT**: Server port (default: 5000)

5. Start backend server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Ensure `VITE_API_URL` is set to your backend URL (default: `http://localhost:5000/api`)

5. Start frontend development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:3000`

## Features

- **User Authentication**: Register and login with JWT tokens
- **Protected Routes**: Secure pages for authenticated users
- **Dashboard**: User profile and wellness overview
- **AI Coach**: Chat interface with AI-powered wellness recommendations
- **Responsive Design**: Works on desktop, tablet, and mobile
- **API Integration**: Fully connected frontend and backend

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Health
- `GET /api/health` - Server health check

## Technologies

**Frontend:**
- React 18
- Vite
- React Router v6
- Axios
- CSS3

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT authentication
- Bcrypt for password hashing
- OpenAI SDK

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
OPENAI_API_KEY=your_openai_key
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## Running the Project

**Terminal 1 - Backend:**
```bash
cd backend
npm install
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Testing the Application

1. Go to homepage
2. Click "Get Started" or register
3. Create an account with email and password
4. Login with your credentials
5. Access dashboard and AI coach
6. Chat with the AI wellness coach

## Build for Production

**Backend:**
```bash
npm start
```

**Frontend:**
```bash
npm run build
npm run preview
```

## Next Steps for Enhancement

- Integrate OpenAI API for real AI responses
- Create database models for fitness tracking
- Add user profile customization
- Implement workout plans and meal plans
- Add progress analytics and charts
- Setup email notifications
- Add mobile app version

## License

MIT

## Support

For issues or questions, please create an issue in the repository.
