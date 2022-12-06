const userDAO = require('../models/userDao');
var emptyError ="Please fill in all fields";
const bcrypt = require('bcryptjs');
const loginView = (req, res) => {
    res.render('login.ejs', {emptyError:""});
}

logUserIn = (req,res)=>{
    var userName = req.body.username;
    var password= req.body.password;
   
    if( userName == null ||   password == null){
        res.render('login',{ emptyError : emptyError});
    }
    userDAO.findUser(userName).then((user) => {
       // console.log(user[password]);
var passMatch = bcrypt.compareSync(password,user.password);
console.log(passMatch);
          if(user && passMatch ) {
            
           res.render('home');
              return;
          }
        res.render('login',{errorMeassage: 'Username is in correct '});
  
    })
}

module.exports = {loginView,logUserIn} ;