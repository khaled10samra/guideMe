




const SavedMuseum = require('../model/saved_museum'); 

const saveMuseum = async (req, res) => {
  try {
    const { User, Museum } = req.body;

    const saved = new SavedMuseum({ User, Museum });
    const result = await saved.save();

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error saving museum', error });
  }
};


const deleteSavedMuseumById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await SavedMuseum.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Saved museum not found' });
    }

    res.status(200).json({ message: 'Saved museum deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting saved museum', error });
  }
};



const getSavedMuseumsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    const savedMuseums = await SavedMuseum.find({ User: userId })
      .populate('Museum') // Populate museum data
      .populate('User', 'userName email _id'); // Optional: populate user info (only name and email)

    res.status(200).json(savedMuseums);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching saved museums', error });
  }
};


  
  module.exports = {
    deleteSavedMuseumById,
getSavedMuseumsByUserId,
    saveMuseum
  };
  