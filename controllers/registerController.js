const userDAO = require('../models/userDao');
const empty_field_error = "fill empty field";
const user_already_exists ="Username Already Exists. Please Log in";

getRegistrationView = (req, res) => {
    res.render("registration.ejs", {usernameError: "", passwordError: ""});
}

registerUser = (req, res) => {
    const {username, password} = req.body;
    if(! username) {
        res.render('registration', {usernameError: empty_field_error, passwordError: ""});
    }
    if(! password) {
        res.render('registration', {usernameError: "", passwordError: empty_field_error});
        return;
    }
    try{
        userDAO.findUser(username)
        .then((user) => {
            

            if(user) {
                res.render('registration', {usernameError: user_already_exists, passwordError: ""});
                return;
            }
            userDAO.registerUser(username, password);
            res.render("login.ejs", {usernameError: "", passError: "", emptyError: ""});
        });
        
    }catch(e) {
        console.error(e);
        res.status(500).json({error: e.message});
    }
}
module.exports = {getRegistrationView, registerUser};
