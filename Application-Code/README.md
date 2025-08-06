# DevSecOps Application Setup Guide

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas Account or Local MongoDB
- npm or yarn package manager

## Backend Setup

### 1. Configure Environment Variables

Create a `.env` file in the backend directory:

```env
MONGO_CONN_STR=your_mongodb_connection_string
MONGO_USERNAME=your_username
MONGO_PASSWORD=your_password
USE_DB_AUTH=true
PORT=3500
```

### 2. Install Dependencies

```bash
cd backend
npm install
```

### 3. Start Backend Server

```bash
npm start
```

The server will start on http://localhost:3500

## Frontend Setup

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Configure API Endpoint

Create a `.env` file in the frontend directory:

```env
REACT_APP_API_URL=http://localhost:3000
```

### 3. Start Frontend Application

```bash
npm start
```

The application will start on http://localhost:3000

## API Endpoints

- GET /api/tasks - Fetch all tasks
- POST /api/tasks - Create new task
- PUT /api/tasks/:id - Update task
- DELETE /api/tasks/:id - Delete task

## Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## Build for Production

```bash
# Backend
cd backend
npm run build

# Frontend
cd frontend
npm run build
```

## Docker Support

```bash
# Build images
docker-compose build

# Run services
docker-compose up
```

## Troubleshooting

1. Database Connection Issues:

   - Verify MongoDB connection string
   - Check network connectivity
   - Ensure proper credentials

2. Frontend API Connection:
   - Verify backend is running
   - Check CORS configuration
   - Validate API endpoint in frontend
