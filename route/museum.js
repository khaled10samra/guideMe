const express = require('express');
const { createMuseum, getAllMuseums, getMuseumById } = require('../controller/museum'); // Adjust path accordingly
const router = express.Router();

// POST route to create a new museum
router.post('/createMuseum', createMuseum);

// GET route to retrieve all museums
router.get('/getAllMuseum', getAllMuseums);
router.get('/getOneMuseum/:id', getMuseumById); // 👈 This is the new route


module.exports = router;
