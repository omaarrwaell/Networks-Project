const router = require('express').Router();
registerationView = require('../controllers/registerController');

router.get('/register', registerationView);

module.exports = router;