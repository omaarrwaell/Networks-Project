getWantToGoView = (req,res) => {
    arr = req.session.user.saved_places
    let places = [
        {name: 'Inca Trail to Machu Picchu',type: 'hiking',link: 'inca'},
        {name: 'Annapurna Circuit ',type: 'hiking', link: 'annapurna'},
        {name: 'Paris',type: 'city', link: 'paris'},
        {name: 'Rome',type: 'city', link: 'rome'},
        {name: 'Bali Island',type: 'island', link: 'bali'},
        {name: 'Santorini Island',type: 'island', link: 'santorini'},
    ]
    const placesQuery = []
    places.forEach(place => {
        if(arr.includes(place.link)){
            placesQuery.push( place);
        }
    });
    console.log(placesQuery)
    res.render('wanttogo.ejs',{placesQuery});
}
module.exports = getWantToGoView;