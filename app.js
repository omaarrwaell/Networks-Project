const express = require('express');
const path = require('path');
const app = express();

const cors = require('cors');
const database = require('./models/userDatabase.js');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const routes_folder = "./routes/";

app.use('/', require(routes_folder + "login.js"));
app.use('/', require(routes_folder + "register.js"));
app.use('/', require(routes_folder + "cities.js"));
app.use('/', require(routes_folder + "home.js"));
app.use('/', require(routes_folder + "islands.js"));
app.use('/', require(routes_folder + "hiking.js"));
app.use('/', require(routes_folder + "search.js"));
app.use('/', require(routes_folder + "wanttogo.js"));

// app.post('/search', function(req, res){
//     query = req.body.Search
//     res.render('/search', { query });

// })

port = process.env.port || 3000;

database.connectToDatabase(app, port);








