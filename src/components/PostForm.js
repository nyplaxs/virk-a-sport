import React, { useState } from 'react';

const PostForm = ({ onPostSubmit }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  // Fonction pour gérer les changements de contenu
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // Fonction pour gérer les changements d'image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification que le contenu n'est pas vide
    if (!content.trim()) {
      alert("Le contenu ne peut pas être vide.");
      return;
    }

    // Création des données du post
    const postData = {
      content,
      image,
      timestamp: new Date().toISOString(),
    };

    // Appel de la fonction de soumission (provenant des props)
    onPostSubmit(postData);

    // Réinitialisation des champs après soumission
    setContent('');
    setImage(null);
  };

  return (
    <div className="post-form">
      <h2>Créer un nouveau post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            placeholder="Écrivez quelque chose..."
            value={content}
            onChange={handleContentChange}
            required
          ></textarea>
        </div>
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Publier</button>
      </form>
    </div>
  );
};

export default PostForm;
