

const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();





var db;
MongoClient.connect('mongodb://svc.gksl2.cloudtype.app:31722', function(에러, client){
  if (에러) return console.log(에러)
  
  db = client.db('index');



  app.listen(8080, function() {
    console.log('listening on 8080')
  })
})




const { PORT, MONGO_URI } = process.env;
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true})) 

app.set('view engine', 'ejs');

app.get('/23/1',function(요청,응답){

  db.collection('index').find().toArray(function(에러 , 결과){
  

  응답.render('list.ejs',{index:결과})
  });
});
 app.get('/',function(요청,응답){
  응답.sendFile(__dirname +'/index.html')
  
 })
 

 
 
 app.post('/login',function(요청,응답){
  var date = new Date()
  var a = new Intl.DateTimeFormat('kr').format(date);

  
      db.collection('index').insertOne({날짜:a,아이디:t} ,function(에러,결과){
    console.log('저장완료')

        })

 응답.sendFile(__dirname +'/index.html')

 
 })
