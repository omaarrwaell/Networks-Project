const userDAO = require('../models/userDao')

function postWishList(imageSrc) {
    console.log("button clicked");
    $.post( "addWishlist", {imageSrc: imageSrc}, addToWishList)
}

const addToWishList = (req, res) => {
    let user = req.session.user;
    let saved_places = user.saved_places
    let imageSrc = req.body.imageSrc
    saved_places.push(imageSrc)
    userDAO.updateUserSavedPlaces(user, saved_places)
    req.flash('wishListMessage', 'Delete from Want-to-Go List');
}

