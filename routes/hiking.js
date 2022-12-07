const router = require('express').Router();

const hiking = require('../controllers/hikingController');
router.get('/hiking', hiking.getHikingView);
router.get('/inca',hiking.getIncaView);
router.get('/annapurna',hiking.getAnnapurnaView);



module.exports = router;