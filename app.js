const express = require('express');
const path = require('path');
const app = express();

const cors = require('cors');
const database = require('./models/userDatabase.js');

connectToDatabase = require('./models/userDatabase.js');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req, res){
  res.render('home');
})

port = process.env.port || 3000;

database.connectToDatabase(app, port);








