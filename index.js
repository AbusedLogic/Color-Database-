//required
const con = require("./connector").con
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
/*
app.post("/database/Search",(req,res)=>{
    res.send(req.body.searchbar)
    con.query(`SELECT * FROM hondacolors WHERE MAKE = '${req.body.searchbar}';`,(err,res)=>{
        if(err){
            console.log(err)
        }
        console.log(res)
    })
})

app.post("/database/Search",(req,res)=>{
    res.send(req.body.searchbar)
    let a = "SELECT * FROM hondacolors"
    if(req.body.searchbar != ''){
        a += ` WHERE COLORCODE = '${req.body.searchbar}'`
    }
    a+=";"
    con.query(a,(err,res)=>{
        if(err){
            console.log(err)
        }
        console.log(res)
    })
})
*/
app.post("/database/search",(req,res)=>{
    //res.send(req.body.searchbar)
    let a = "SELECT * FROM hondacolors"
    if(req.body.searchbar != ''){
        a += ` WHERE COLORCODE = '${req.body.searchbar}'`
    }
    a+=";"
    con.query(a,(err,result)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            let arr = [];
            for(let i in result){
                arr[i] = [];
                for(let obj in result[i]){
                    arr[i].push(`${obj}:${result[i][obj]}`)
                }
            }
            res.render("results",{
                list:arr
            })
        }
    })
})
app.get("*",(req,res)=>{
    res.redirect("/")
})
app.listen(5001,()=>{
    console.log("its running")
})

