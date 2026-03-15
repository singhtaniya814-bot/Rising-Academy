const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Form data:', { name, email, message });
  res.json({ success: true, message: 'Form submitted!' });
});

module.exports = router;