
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

app.get('/1',function(요청,응답){

  db.collection('index').find().toArray(function(에러 , 결과){
  
  console.log(결과)
  응답.render('list.ejs',{index:결과})
  });

 app.get('/',function(요청,응답){
  응답.sendFile(__dirname +'/index.html')
  
 })
 
 app.post('/p',function(요청,응답){
 
  console.log(요청.body.id)
   
  var a =`
  ${date.getFullYear()}년
  ${date.getMonth()}월
  ${date.getDate}
  `
  db.collection('index').insertOne({이메일:요청.body.id,날짜:요청.body.q } ,function(에러,결과){
     console.log('저장완료')
    
  })
  응답.sendFile(__dirname +'/index.html')
 })
 
 })
 
