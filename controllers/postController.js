// postController.js
const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const { title, content, userId } = req.body;

  // Code avant
  try {
    const newPost = new Post({
      title,
      content,
      userId,
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création du post' });
  }
};  // Ajout de l'accolade fermante pour la fonction
