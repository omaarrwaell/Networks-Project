const userDAO = require('../models/userDao');

getRegistrationView = (req, res) => {
    res.render("registration.ejs", {});
}

registerUser = (req, res) => {
    const {username, password} = req.body;
    try{
        userDAO.findUser(username)
        .then((user) => {
            let error_message;
            if(user) {
                error_message = "User Already Registered. Please try to Log In";
                
            }
            else if(password.value.length <= 6){
                error_message = "Password must be longer than 6 characters";
                
            }
            else if(password.value.length >= 20) {
                error_message = "Password must be less than 20 characters";
                
            }
            if(error_message) {
                res.render('registration.ejs', {error: error_message})
                return;
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
