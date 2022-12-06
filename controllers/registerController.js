<<<<<<< HEAD
const registerView = (req, res) => {
    res.render("registration.ejs", {});
}

module.exports = registerView;
=======
const userDAO = require('../models/userDao');


getRegistrationView = (req, res) => {
    res.render("registration.ejs", {});
}

registerUser = (req, res) => {
    const {username, password} = req.body;
    if(! username || ! password) {
        console.log("Fill empty fields");
        return;
    }
    try{
        userDAO.findUser(username)
        .then((user) => {
            if(user) {
                console.log("user already exists");
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
>>>>>>> main
