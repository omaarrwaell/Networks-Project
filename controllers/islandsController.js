
getIslandsView = (req, res) => {
    res.render('islands.ejs', {});
}
getBaliView = (req,res) => {
    res.render('bali.ejs',{});
}
getSantoriniView = (req,res) => {
    res.render('santorini.ejs',{});
}


module.exports = {getIslandsView,getBaliView,getSantoriniView};
