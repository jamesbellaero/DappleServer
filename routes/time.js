/**
 * Created by James on 6/29/2017.
 */
'use strict';

const express = require('express');

var router = express.Router();

router.get('/', function(req, res) {

    res.set('Content-Type', 'text/plain');
    res.send(String(Date.now() / 1000));
});
router.post('/', function(req,res){
    res.sendStatus(201);
});

module.exports = router;