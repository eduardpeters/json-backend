const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/heroesController.js');

router.get('/', heroesController.getAll);

module.exports = router;