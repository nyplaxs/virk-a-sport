const express = require('express');
const router = express.Router();

// Importer toutes les routes
const activityRoutes = require('./activityRoutes');
const challengeRoutes = require('./challengeRoutes');
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');
const searchRoutes = require('./searchRoutes');
const userRoutes = require('./userRoutes');

// Configurer les routes
router.use('/activities', activityRoutes);
router.use('/challenges', challengeRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/search', searchRoutes);
router.use('/users', userRoutes);

module.exports = router;
