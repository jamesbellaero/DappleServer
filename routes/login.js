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

    var con = require("../db/datadb");
    var username = req.body.username;
    var password = req.body.password;
    con.query("USE datadb",function(err){
        con.query("SELECT name FROM users WHERE name = '"+username+"' AND pass = '"+password+"'",function(err,result){
            if(err) {
                res.sendStatus(500);
                throw err;
            }
            //check result for user existing with right password
            if(JSON.parse(JSON.stringify(result)).length>0){
                var sql = "REPLACE INTO logged_in (name,cookie) VALUES ?";
                var cookie = "cookme";
                var values = [
                    [ username,cookie]
                ];
                con.query(sql,[values],function(err){
                    if(err) {
                        res.sendStatus(500);
                        throw err;
                    }
                    res.cookie("login",cookie);
                    res.cookie("username",username);
                    res.sendStatus(201);

                });
            }
            else{
                console.log("couldn't login user: "+username);
                res.sendStatus(400);
            }
        });

    });

    //res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });



});

module.exports=router;

