const userDAO = require('../models/userDao')

const addToWishList = (req, res) => {
    let user = req.session.user;
    let saved_places = user.saved_places
    let imageSrc = req.body
    saved_places.push(imageSrc)
    userDAO.updateUserSavedPlaces(user, saved_places)
    req.flash('wishListMessage', 'Added');
    res.redirect('/paris')
}

const viewWishList = (req, res) => {
    res.render('wanttogo');
}

module.exports = {viewWishList, addToWishList};
