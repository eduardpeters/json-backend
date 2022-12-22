const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/heroesController.js');

router.get('/', heroesController.getAll);
router.get('/:id', heroesController.getID);

module.exports = router;