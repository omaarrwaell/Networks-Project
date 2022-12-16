let wishListMessage;
const initialWishListMessage = "Add to Want-to-Go List"
getCitiesView = (req, res) => {
    wishListMessage = req.flash('wishListMessage')
    req.flash('wishListMessage', initialWishListMessage)
    res.render('cities.ejs', {wishListMessage});
}
getParisView = (req,res) => {
    wishListMessage = req.flash('wishListMessage')
    req.flash('wishListMessage', initialWishListMessage)
    res.render('paris.ejs',{wishListMessage});
}
getRomeView = (req,res) => {
    wishListMessage = req.flash('wishListMessage')
    req.flash('wishListMessage', initialWishListMessage)
    res.render('rome.ejs',{wishListMessage});
}



module.exports = {getCitiesView, getRomeView, getParisView};
