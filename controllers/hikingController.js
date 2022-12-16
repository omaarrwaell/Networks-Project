let wishListMessage;
const initialWishListMessage = "Add to Want-to-Go List";
getHikingView = (req, res) => {
    wishListMessage = req.flash('wishListMessage')
    req.flash('wishListMessage', initialWishListMessage)
    res.render('hiking.ejs', {wishListMessage: wishListMessage});
}
getIncaView = (req,res) => {
    wishListMessage = req.flash('wishListMessage')
    req.flash('wishListMessage', initialWishListMessage)
    res.render('inca.ejs',{wishListMessage: wishListMessage});
}
getAnnapurnaView = (req,res) => {
    wishListMessage = req.flash('wishListMessage')
    req.flash('wishListMessage', initialWishListMessage)
    res.render('annapurna.ejs',{wishListMessage: wishListMessage});
}

module.exports = {getHikingView, getIncaView, getAnnapurnaView};
