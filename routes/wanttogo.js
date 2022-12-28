const router = require('express').Router()
const wantToGoView  = require('../controllers/wantToGoController');


router.get('/wantToGo', wantToGoView);
router.post('/wantToGo', wantToGoView);

module.exports = router;