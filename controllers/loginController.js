const userDAO = require('../models/userDao');
var emptyError = "Please fill in all fields";
var passError= "The password you entered is in correct";
var UsernameError =  "Username is incorrect";
const bcrypt = require('bcryptjs');
const loginView = (req, res) => {
    res.render('login.ejs', { emptyError: "" ,passError:"",UsernameError:""});
}

logUserIn = (req, res) => {
    var userName = req.body.username;
    var password = req.body.password;

    if (! userName  ||  ! password ) {
       
        res.render('login', { emptyError: emptyError ,passError:"",UsernameError:""});
    }else{
    userDAO.findUser(userName).then((user) => {
     if(user){
        var passMatch = bcrypt.compareSync(password, user.password);
      
        
            if(passMatch){

            res.render('home');
            return;
            }
            else{
                res.render('login',{passError: passError, emptyError: "",UsernameError:""});
            }
        }else{
            res.render('login',{UsernameError:UsernameError,emptyError: "" ,passError:""});
        }

        },
            
        
       
        
    )
       
    
    }
    
}


module.exports = { loginView, logUserIn };