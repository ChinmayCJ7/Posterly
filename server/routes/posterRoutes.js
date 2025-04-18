const express = require('express');
const multer = require('multer');
const path = require('path');
const { generatePoster } = require('../utils/aiPoster');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/generate-poster', upload.single('image'), async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const imagePath = req.file.path;

    const generatedImageUrl = await generatePoster(imagePath, prompt); // Use AI API
    res.json({ generatedImageUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Poster generation failed' });
  }
});

module.exports = router;
