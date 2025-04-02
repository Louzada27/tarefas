const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// About page
router.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// Contact page
router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

// Handle contact form submission
router.post('/contact', (req, res) => {
    // Here you would typically handle the contact form submission
    // For now, we'll just redirect back to the contact page
    res.redirect('/contact');
});

module.exports = router;