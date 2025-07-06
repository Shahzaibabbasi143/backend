const express = require('express');
const router = express.Router();
const { sendContactForm } = require('../controllers/contactController');

router.post('/contact', sendContactForm); // ✅ yeh hona chahiye

module.exports = router;
