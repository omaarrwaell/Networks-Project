
getCitiesView = (req, res) => {
    res.render('cities.ejs', {});
}
getParisView = (req,res) => {
    res.render('paris.ejs',{});
}
getRomeView = (req,res) => {
    res.render('rome.ejs',{});
}



module.exports = {getCitiesView, getRomeView, getParisView};
