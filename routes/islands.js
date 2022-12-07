const router = require('express').Router();

const islands = require('../controllers/islandsController');
router.get('/islands', islands.getIslandsView);
router.get('/bali',islands.getBaliView);
router.get('/santorini',islands.getSantoriniView);



module.exports = router;