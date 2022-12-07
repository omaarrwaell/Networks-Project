const router = require('express').Router();
const home = require('../controllers/homeController');

router.get('/home', home.getHomeView);


module.exports = router;