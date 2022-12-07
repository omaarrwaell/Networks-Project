const userDAO = require('../models/userDao');


getRegistrationView = (req, res) => {
    res.render("registration.ejs", {});
}

registerUser = (req, res) => {
    const {username, password} = req.body;
    if(! username) {
        res.render('registration.ejs', {usernameError: "fill empty field"})
    }
    if(! password) {
        res.render('registration.ejs', {passwordError: "fill empty field"})
    }
    try{
        userDAO.findUser(username)
        .then((user) => {
            if(user) {
                res.render('registration.ejs', {usernameError: "Username Already Exists. Please Log in"})
            }
            userDAO.registerUser(username, password);
            res.render("login.ejs");
        });
        
    }catch(e) {
        console.error(e);
        res.status(500).json({error: e.message});
    }
}
module.exports = {getRegistrationView, registerUser};
