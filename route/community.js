const express = require('express');
const { addCommunity ,getAllCommunities} = require('../controller/community');
const router = express.Router();

// POST route to create a new museum
router.post('/addFeedBack', addCommunity);
// GET route to retrieve all museums
router.get('/getAllFeedBack', getAllCommunities);


module.exports = router;
