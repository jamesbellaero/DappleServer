/**
 * Created by James on 6/28/2017.
 */
"use strict";
const express = require("express");
const parser = require("body-parser");
var router = express.Router();

router.post('/',function(req,res){
   var img = req.body.data;
   var cookie = req.cookies.cookie;
   var con = require("../db/datadb");
   con.query("USE datadb", function(err){
       if(err)throw err;
       con.query("SELECT name FROM logged_in WHERE cookie = '"+cookie+"'",function(err,result){
           if(err){
               res.sendStatus(500);
               throw err;
           }
           //check if cookie exists
           if(JSON.parse(JSON.stringify(result)).length>0){
               var username = JSON.parse(JSON.stringify(result))[0].name;
               var values=[
                   [username,img]
               ];
               con.query("INSERT INTO data (name,data) VALUES ?",[values],function(err){
                   if(err){
                       res.sendStatus(500);
                       throw err;
                   }
                   res.sendStatus(201);
               })
           }
           else{
               res.sendStatus(401);
           }
       });
   });



});
router.get('/next', function(req, res){
    var cookie = req.cookies.id;
    //check to see if logged in. If so, who is it associated with?
    res.send('hello world');
});

module.exports=router;


