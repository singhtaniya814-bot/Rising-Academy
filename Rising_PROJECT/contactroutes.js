const express = require('express');
const router = express.Router();

// Simple save (no MongoDB model needed yet)
router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Form data:', { name, email, message });
  
  res.json({ 
    success: true, 
    message: 'Form submitted successfully!' 
  });
});

module.exports = router;