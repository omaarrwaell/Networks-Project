const userDAO = require('../models/userDao');

getRegistrationView = (req, res) => {
    res.render("registration.ejs", {usernameError: "", passwordError: ""});
}

registerUser = (req, res) => {
    const {username, password} = req.body;
    try{
        userDAO.findUser(username)
        .then((user) => {
            if(user) {
                res.render('registration.ejs', {usernameError: "User Already Registered. Please try to Log In", passwordError: ""})
                return;
            }
            if(password.length <= 6){
                res.render('registration.ejs', {usernameError: "", passwordError: "Password must be longer than 6 characters"})
                return;
            }
            if(password.length >= 20) {
                res.render('registration.ejs', {usernameError: "", passwordError: "Password must be less than 20 characters"})
                return;
            }
            userDAO.registerUser(username, password);
            res.render("login.ejs", {registrationState: "Registration is Successful !"});
        });
        
    }catch(e) {
        console.error(e);
        res.status(500).json({error: e.message});
    }
}

module.exports = {getRegistrationView, registerUser};
