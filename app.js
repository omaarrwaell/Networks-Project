
var express = require('express');
var path = require('path');
var app = express();
var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect("mongodb://localhost:27017",function(err,client){
//   if(err)throw err;
//  var db = client.db('MyDB');
//   db.collection('FirstCollection').insertOne({id:1,firstName:'tyty',lastName: 'rtrt'});
//   db.collection('FirstCollection').insertOne({id:1,userName:'omar',password: '123'});
  
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  res.render('login');

});
app.post('/',function(req,res) {
  var userName = req.body.username;
  var password= req.body.password;
  MongoClient.connect("mongodb://localhost:27017",function(err,client){
  if(err)throw err;
 var db = client.db('MyDB');
 
   db.collection('FirstCollection').findOne({ userName: userName },function(err,result){
  if (result!=null){
    res.render('home');
  }else{
    console.log('error');
  }
 console.log(result);
})
  
});


});
app.listen(3000);

