// controllers/communityController.js
const Community = require('../model/community'); // Adjust the path as needed

// Get all community feedbacks
const getAllCommunities = async (req, res) => {
    try {
        const communities = await Community.find().populate({
            path: 'personName',
            select: '-password' // Explicitly include password
        });
        res.status(200).json(communities);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};




// Add new community feedback
const addCommunity = async (req, res) => {
    try {
        const { personName, museumInfo, feedBackText, museumRate, museumImage } = req.body;

        const newCommunity = new Community({
            personName,
            museumInfo,
            feedBackText,
            museumRate,
            museumImage,

        });

        const savedCommunity = await newCommunity.save();
        res.status(201).json(savedCommunity);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    getAllCommunities, addCommunity
}

