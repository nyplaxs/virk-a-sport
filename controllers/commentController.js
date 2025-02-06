// commentController.js
const Comment = require('../models/Comment');

// Ajouter un commentaire
exports.addComment = async (req, res) => {
  try {
    const { postId, userId, text } = req.body;
    const newComment = new Comment({ postId, userId, text, date: new Date() });
    const comment = await newComment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout du commentaire' });
  }
};

// Récupérer les commentaires d'un post
exports.getCommentsForPost = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).sort({ date: -1 });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des commentaires' });
  }
};

// Supprimer un commentaire
exports.deleteComment = async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    if (!deletedComment) {
      return res.status(404).json({ message: 'Commentaire non trouvé' });
    }
    res.status(200).json({ message: 'Commentaire supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du commentaire' });
  }
};
