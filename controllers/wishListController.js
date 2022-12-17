const userDAO = require('../models/userDao')

const addToWishList = (req, res) => {
    let user = req.session.user;
    let saved_places = user.saved_places
    let place = {saved_places: req.body.place};
    userDAO.updateUserSavedPlaces(user, place)
    req.flash('wishListMessage', 'Added');
    res.redirect('/paris')
}

const viewWishList = (req, res) => {
    res.render('wanttogo');
}

module.exports = {viewWishList, addToWishList};
