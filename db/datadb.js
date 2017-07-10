'use strict';
var mysql = require('mysql');
var con = mysql.createConnection({
        host: "localhost",
        user: "server",
        password: "serverpass"
    });
con.connect(function(err){
    if(err){
        console.log("failed to connect");
        throw err;
    }
    // con.query("CREATE DATABASE datadb", function (err,result){
    //     if(err) {
    //         console.log("failed to create db");
    //         throw err;
    //     }
    //     console.log("Database created");
    // });
});


module.exports=con;
