const router = require('express').Router();
const wishlist = require('../controllers/wishListController');
const isAuth = require('../controllers/authController')

router.get('/wanttogo', isAuth, wishlist.viewWishList)
router.post('/wanttogo', wishlist.addToWishList)

module.exports = router;