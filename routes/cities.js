const router = require('express').Router();

const cities = require('../controllers/citiesController');
router.get('/cities', cities.getCitiesView);
router.get('/paris',cities.getParisView);
router.get('/rome',cities.getRomeView);



module.exports = router;