
getCitiesView = (req, res) => {
    res.render('cities.ejs', {});
}
getParisView = (req,res) => {
    res.render('paris.ejs',{});
}
getRomeView = (req,res) => {
    res.render('rome.ejs',{});
}
/*getBaliView = (req, res) => {
    res.render('bali.ejs',{});
}*/



module.exports = {getCitiesView,getRomeView,getParisView};
