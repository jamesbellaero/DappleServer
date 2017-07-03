/**
 * Created by James on 6/28/2017.
 */
"use strict";
const express = require("express");
const parser = require("body-parser");
var router = express.Router();

router.post('/',function(req,res){
    /*var fs = require('fs');
    fs.writeFile("/tmp/test2", "Hey there!", function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });*/
    var username = req.body.username;
    var password = req.body.password;
    res.cookie("login","abcdefg1234");
    res.cookie("username",username);
    res.cookie("password",password);
    //res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });

    res.sendStatus(201);

});

module.exports=router;

