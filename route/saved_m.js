const express = require('express');
const { deleteSavedMuseumById,
    getSavedMuseumsByUserId,
    saveMuseum } = require('../controller/saved'); // Adjust path accordingly
const router = express.Router();

// POST route to create a new museum
router.delete('/deleteSavedMuseumById/:id', deleteSavedMuseumById);

// GET route to retrieve all museums
router.get('/getSavedMuseumsByUserId/:userId', getSavedMuseumsByUserId);
router.post('/saveMuseum', saveMuseum); // 👈 This is the new route


module.exports = router;
