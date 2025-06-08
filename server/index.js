const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const newsRoutes = require('./routes/news');

// 1. Load environment variables FIRST
dotenv.config();

// 2. Configure CORS for security
const allowedOrigins = [
  'https://catnews-frontend.onrender.com', // Production frontend
  'http://localhost:5173', // Local development
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      const msg = `CORS blocked for ${origin}`;
      console.warn(msg);
      return callback(new Error(msg));
    }
  },
  methods: ['GET'] // Only allow GET requests
}));

// 3. Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4. Routes
app.use('/api/news', newsRoutes);

// 5. Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 6. Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode`);
  console.log(`Listening on port ${PORT}`);
});