/**
 * Created by James on 6/28/2017.
 */
"use strict";
const express = require("express");
const parser = require("body-parser");
var router = express.Router();

router.post('/',parser.raw,function(req,res){
   var img = req.body;
   res.sendStatus(201);

});
router.get('/next', function(req, res){
    var cookie = req.cookies.id;
    //check to see if logged in. If so, who is it associated with?
    res.send('hello world');
});

module.exports=router;


