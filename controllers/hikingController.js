
getHikingView = (req, res) => {
    res.render('hiking.ejs', {});
}
getIncaView = (req,res) => {
    res.render('inca.ejs',{});
}
getAnnapurnaView = (req,res) => {
    res.render('annapurna.ejs',{});
}

module.exports = {getHikingView, getIncaView, getAnnapurnaView};
