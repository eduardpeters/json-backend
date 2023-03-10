const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/heroesController.js');

router.get('/', heroesController.getList);
router.get('/all', heroesController.getAll);
router.post('/', heroesController.postHero);
router.get('/:id', heroesController.getHero);
router.put('/:id', heroesController.replaceHero);
router.patch('/:id', heroesController.updateHero);
router.delete('/:id', heroesController.deleteHero);

module.exports = router;