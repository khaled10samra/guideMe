const Museum = require('../model/museum'); // Adjust the path as needed

// POST method to create a new museum
const createMuseum = async (req, res) => {
  try {
    const { museumName, museumLocation, museumInfo, museumImage, museumRate, antiquities, hotLine, workTime } = req.body;

    // Create new museum instance
    const newMuseum = new Museum({
      museumName,
      museumLocation,
      museumInfo,
      museumImage,
      museumRate,
      antiquities,
      hotLine,
      workTime
    });

    // Save the new museum to the database
    const savedMuseum = await newMuseum.save();

    return res.status(201).json(savedMuseum); // Return the created museum object
  } catch (error) {
    console.error("Error creating museum:", error);
    return res.status(500).json({ error: "Error creating museum" });
  }
};

// GET method to retrieve all museums
const getAllMuseums = async (req, res) => {
  try {
    const museums = await Museum.find(); // Find all museums
    return res.status(200).json(museums); // Return the list of museums
  } catch (error) {
    console.error("Error retrieving museums:", error);
    return res.status(500).json({ error: "Error retrieving museums" });
  }
};

// GET method to get one museum by ID
const getMuseumById = async (req, res) => {
    try {
      const museumId = req.params.id;
  
      const museum = await Museum.findById(museumId);
  
      if (!museum) {
        return res.status(404).json({ message: "Museum not found" });
      }
  
      return res.status(200).json(museum);
    } catch (error) {
      console.error("Error fetching museum by ID:", error);
      return res.status(500).json({ error: "Server error" });
    }
  };
  



  
  module.exports = {
    createMuseum,
    getAllMuseums,
    getMuseumById
  };
  
 