//Tools
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine','pug')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//ServerSide 
app.get("/",(req,res)=>{
    res.render("index",{title:'Home Page'});
})
app.post("/database/Search",(req,res)=>{
    res.send(req.body.searchbar)
})
app.listen(5001,()=>{
    console.log("its running")
})

