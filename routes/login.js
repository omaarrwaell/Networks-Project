const router = require('express').Router();
const loginView = require('../controllers/loginController');

router.get('/', loginView);

module.exports = router;