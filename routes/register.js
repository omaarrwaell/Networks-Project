const router = require('express').Router();
<<<<<<< HEAD
registerationView = require('../controllers/registerController');

router.get('/registration', registerationView);

=======

const registeration = require('../controllers/registerController');

router.get('/registration', registeration.getRegistrationView);

router.post('/register', registeration.registerUser);
>>>>>>> main
module.exports = router;