import express from 'express';

const app=express();
var yoda = {
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  };
  
  var darthmaul = {
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  };
  
  var darthFarFar = {
    name: "Darth Far Far Wittles",
    role: "Sith Lord",
    age: 5,
    forcePoints: 1000000
  };
app.get('/',async(req,res)=>{
    res.end("Welcome to the Star Wars Page!");
});
app.get('/yoda',async(req,res)=>{
    res.json(yoda);
});
app.get('/darthmaul',async(req,res)=>{
    res.json(darthmaul);
});
app.get('/farfar',async(req,res)=>{
    res.json(darthFarFar)
});
app.listen(3000,function(){
    console.log("server ise dusdu");
});