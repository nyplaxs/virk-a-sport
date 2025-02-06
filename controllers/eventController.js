// eventController.js
const Event = require('../models/Event');

// Créer un événement
exports.createEvent = async (req, res) => {
  try {
    const { title, description, location, date, userId } = req.body;
    const newEvent = new Event({ title, description, location, date, userId });
    const event = await newEvent.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de l\'événement' });
  }
};

// Récupérer tous les événements
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des événements' });
  }
};

// Récupérer un événement par son ID
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Événement non trouvé' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de l\'événement' });
  }
};

// Mettre à jour un événement
exports.updateEvent = async (req, res) => {
  try {
    const { title, description, location, date } = req.body;
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { title, description, location, date },
      { new: true }
    );
    if (!updatedEvent) {
      return res.status(404).json({ message: 'Événement non trouvé' });
    }
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'événement' });
  }
};

// Supprimer un événement
exports.deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ message: 'Événement non trouvé' });
    }
    res.status(200).json({ message: 'Événement supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'événement' });
  }
};
