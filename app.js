const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();
const flash = require('connect-flash');
const cors = require('cors');
const database = require('./models/userDatabase.js');
const requireAll = require('require-all');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(cors());

app.use(session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());


const routes = requireAll({
    dirname: __dirname + '/routes', 
    filter: /(.+)\.js$/,
    recursive: false
});
  
app.use(Object.values(routes));

port = process.env.port || 3000;

database.connectToDatabase(app, port);








