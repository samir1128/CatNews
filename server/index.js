

// index.js
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

//internal import
const newsRoutes = require('./routes/news')

// Load env variables first
dotenv.config();

const PORT = process.env.PORT || 3000;

//
// const cors = require("cors");
// app.use(cors({ origin: "https://your-frontend.onrender.com" })); // Update after deploying

// Middleware to parse JSON
app.use(express.json());

// CORS configuration for production
const allowedOrigins = [
  'https://your-frontend-domain.com', // ✅ Replace with your actual frontend domain
  'http://localhost:5173' // 👈 Optional: allow local dev
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  })
);

//middleware to handle api calls to gnews
app.use('/api/news', newsRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





