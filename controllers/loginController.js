const userDAO = require('../models/userDao');
const emptyError = "Please fill in all fields";
const passError= "The password you entered is in correct";
const UsernameError =  "Username is incorrect";
const bcrypt = require('bcryptjs');


const loginView = (req, res) => {
    res.render('login.ejs', { emptyError: "", passError: "", UsernameError: ""});
}

const logUserIn = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (! username  ||  ! password ) {
        res.render('login', { emptyError: emptyError, passError: "", UsernameError: ""});
        return;
    }
    
    userDAO.findUser(username).then((user) => {
        if(! user) {
            res.render('login', {UsernameError: UsernameError, emptyError: "", passError: ""});
            return;
        }
        let passMatch = bcrypt.compareSync(password, user.password);    
        if(passMatch) {
            req.session.authenticated = true;
            req.session.user = user;
            res.render('home');
            return;
        }
        res.render('login', {passError: passError, emptyError: "", UsernameError: ""});
    })
       
}


module.exports = { loginView, logUserIn };