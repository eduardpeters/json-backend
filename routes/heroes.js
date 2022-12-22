const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/heroesController.js');

router.get('/', heroesController.getAll);
router.post('/', heroesController.postHero);
router.get('/:id', heroesController.getHero);
router.put('/:id', heroesController.replaceHero);
router.delete('/:id', heroesController.deleteHero);

module.exports = router;