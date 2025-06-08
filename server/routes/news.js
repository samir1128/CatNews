
const express = require('express');
// const fetch = require('node-fetch');
const router = express.Router();

router.get('/top-headlines', async (req, res) => {
  const { category = 'general', lang = 'en', page = 1 } = req.query;
  const apiKey = process.env.GNEWS_API_KEY;

  try {
    const gnewsRes = await fetch(
      `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&page=${page}&apikey=${apiKey}`
    );
    const data = await gnewsRes.json();
    res.json(data);
  } catch (err) {
    console.error('Error fetching from GNews:', err.message);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

module.exports = router;
