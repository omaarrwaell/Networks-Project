const router = require('express').Router();
registerationView = require('../controllers/registerController');

router.get('/registration', registerationView);

module.exports = router;