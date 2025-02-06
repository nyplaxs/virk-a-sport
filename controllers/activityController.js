// activityController.js
const Activity = require('../models/Activity');  // Importer le modèle Activity

// Créer une nouvelle activité
exports.createActivity = async (req, res) => {
  try {
    const { title, description, userId } = req.body;  // Récupérer les données de la requête

    // Créer une nouvelle activité avec les données fournies
    const newActivity = new Activity({
      title,
      description,
      userId, // L'ID de l'utilisateur qui a créé l'activité
      date: new Date(),  // La date de création de l'activité
    });

    // Sauvegarder l'activité dans la base de données
    const activity = await newActivity.save();
    res.status(201).json(activity);  // Retourner l'activité créée avec un statut 201
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur de création de l\'activité' });
  }
};

// Récupérer toutes les activités
exports.getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find().sort({ date: -1 });  // Récupérer les activités triées par date (les plus récentes d'abord)
    res.status(200).json(activities);  // Retourner toutes les activités
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur de récupération des activités' });
  }
};

// Récupérer une activité par son ID
exports.getActivityById = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);  // Trouver l'activité par son ID
    if (!activity) {
      return res.status(404).json({ message: 'Activité non trouvée' });
    }
    res.status(200).json(activity);  // Retourner l'activité
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur de récupération de l\'activité' });
  }
};

// Mettre à jour une activité
exports.updateActivity = async (req, res) => {
  try {
    const { title, description } = req.body;
    const updatedActivity = await Activity.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }  // Retourner l'activité mise à jour
    );

    if (!updatedActivity) {
      return res.status(404).json({ message: 'Activité non trouvée' });
    }

    res.status(200).json(updatedActivity);  // Retourner l'activité mise à jour
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur de mise à jour de l\'activité' });
  }
};

// Supprimer une activité
exports.deleteActivity = async (req, res) => {
  try {
    const deletedActivity = await Activity.findByIdAndDelete(req.params.id);  // Supprimer l'activité par son ID
    if (!deletedActivity) {
      return res.status(404).json({ message: 'Activité non trouvée' });
    }
    res.status(200).json({ message: 'Activité supprimée avec succès' });  // Retourner un message de confirmation
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur de suppression de l\'activité' });
  }
};
