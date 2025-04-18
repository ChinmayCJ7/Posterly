import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
const posterRoutes = require('./routes/posterRoutes');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', posterRoutes);

// Test route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to Posterly API 🚀' });
});

// Import and use your routes here
// import posterRoutes from './routes/posterRoutes.js';
// app.use('/api/posters', posterRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
