getWantToGoView = (req,res) => {
    let places = [
        {name: 'Inca Trail to Machu Picchu',type: 'hiking',link: 'inca'},
        {name: 'Annapurna Circuit ',type: 'hiking', link: 'annapurna'},
        {name: 'Paris',type: 'city', link: 'paris'},
        {name: 'Rome',type: 'city', link: 'rome'},
        {name: 'Bali Island',type: 'island', link: 'bali'},
        {name: 'Santorini Island',type: 'island', link: 'santorini'},
    ]
    res.render('wanttogo.ejs',{places});
}
module.exports = getWantToGoView;