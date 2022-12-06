const userDAO = require('../models/userDao');
var emptyError = "Please fill in all fields";
const bcrypt = require('bcryptjs');
const loginView = (req, res) => {
    res.render('login.ejs', { emptyError: "" });
}

logUserIn = (req, res) => {
    var userName = req.body.username;
    var password = req.body.password;

    if (userName == null || password == null) {
        res.render('login', { emptyError: emptyError });
    }else{
    userDAO.findUser(userName).then((user) => {
     
        var passMatch = bcrypt.compareSync(password, user.password);
      
        if (user) {
            if(passMatch){

            res.render('home');
            return;
            }
            else{
                res.render('login',{passError: "The password you entered is in correct "});
            }

        }else{
            res.render('login',{UsernameError: "Username is incorrect"});
        }
       

    })
}
}

module.exports = { loginView, logUserIn };