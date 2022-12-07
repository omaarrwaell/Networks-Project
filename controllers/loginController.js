const loginView = (req, res) => {
    res.render('login.ejs', {registrationState: ""});
}

module.exports = loginView;