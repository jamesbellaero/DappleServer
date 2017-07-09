'use strict';
var mysql = require('mysql');
var con = require('./datadb');

var setupTables = function(){
    con.query("CREATE TABLE users (id int(11) NOT NULL auto_increment, name VARCHAR(255), pass VARCHAR(255),PRIMARY KEY(id),UNIQUE KEY(name))",function(err){
        if(err){ if(err.errno==1050) return; throw err; }
        var values = [
            ['user', 'pass'],
            ['test', 'pass']
        ];
        con.query("INSERT INTO users (name,pass) VALUES ?",[values],function(err){
            if(err) throw err;
        });
    });
    con.query("CREATE TABLE logged_in (id int(11) NOT NULL auto_increment, name VARCHAR(255), cookie VARCHAR(255),PRIMARY KEY(id),UNIQUE KEY(name))",function(err){
        if(err){ if(err.errno==1050) return; throw err; }
    });
    con.query("CREATE TABLE data (id int(11) NOT NULL auto_increment, name VARCHAR(255), data BLOB,PRIMARY KEY(id))",function(err){
        if(err){ if(err.errno==1050) return; throw err; }
    });
    console.log("Database setup completed");
};

con.query("USE datadb",function(err){
    if(err) {
        console.log("need to create db");
        con.query("CREATE DATABASE datadb", function (err) {
            if (err) throw err;
            console.log("Database created");
            con.query("USE datadb", function (err) {
                if (err) throw err;
                setupTables();
            });
        });
    }
    else{
        setupTables();
    }
});


//need to encrypt passwords



//con.end();

