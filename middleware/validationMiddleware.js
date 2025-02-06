const Joi = require('joi');

// Exemple de schéma de validation pour l'enregistrement d'un utilisateur
const registerSchema = Joi.object({
  username: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Le nom d\'utilisateur doit être une chaîne de caractères.',
    'string.min': 'Le nom d\'utilisateur doit comporter au moins 3 caractères.',
    'string.max': 'Le nom d\'utilisateur ne peut pas dépasser 30 caractères.',
    'any.required': 'Le nom d\'utilisateur est requis.'
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'L\'email doit être une chaîne de caractères.',
    'string.email': 'L\'email doit être valide.',
    'any.required': 'L\'email est requis.'
  }),
  password: Joi.string().min(6).required().messages({
    'string.base': 'Le mot de passe doit être une chaîne de caractères.',
    'string.min': 'Le mot de passe doit comporter au moins 6 caractères.',
    'any.required': 'Le mot de passe est requis.'
  })
});

// Middleware de validation
const validationMiddleware = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body); // Validation des données du body

    if (error) {
      return res.status(400).json({
        message: 'Erreur de validation',
        details: error.details.map(err => err.message) // Affiche les erreurs sous forme de liste
      });
    }
    
    next(); // Si la validation réussit, passe au middleware suivant
  };
};

// Exemple d'utilisation avec le schéma d'enregistrement
const registerValidationMiddleware = validationMiddleware(registerSchema);

module.exports = {
  validationMiddleware,
  registerValidationMiddleware
};
