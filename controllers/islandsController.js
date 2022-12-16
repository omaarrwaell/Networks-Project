let wishListMessage;
const initialWishListMessage = "Add to Want-to-Go List";
getIslandsView = (req, res) => {
    wishListMessage = req.flash('wishListMessage')
    req.flash('wishListMessage', initialWishListMessage)
    res.render('islands.ejs', {wishListMessage: wishListMessage});
}
getBaliView = (req,res) => {
    wishListMessage = req.flash('wishListMessage')
    req.flash('wishListMessage', initialWishListMessage)
    res.render('bali.ejs',{wishListMessage: wishListMessage});
}
getSantoriniView = (req,res) => {
    wishListMessage = req.flash('wishListMessage')
    req.flash('wishListMessage', initialWishListMessage)
    res.render('santorini.ejs',{wishListMessage: wishListMessage});
}

module.exports = {getIslandsView, getBaliView, getSantoriniView};
