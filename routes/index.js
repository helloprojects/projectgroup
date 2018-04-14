var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
var mysql = require('mysql');
var dbconfig = require('../config/dbconfig');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Movie List - Home Page',
    message: ''
  });
});

/* POST login page. */
router.post('/submit',
    [
        sanitize('username').trim().escape(),
        sanitize('password').trim().escape(),
    ],
    function (req, res, next) {
        username = req.body.firstname;
        password = req.body.lastname;
        console.log(username);
        console.log(password);
        var connection = mysql.createConnection(dbconfig);
        connection.query("SELECT userid, first_name, last_name, username FROM `users` WHERE `username`='"+username+"' and password = '"+password+"'" , function (error, results, fields) {
            if (error) {
                  console.log(error);
                  connection.end();
                  res.render('index', { 
                    title: 'Registered',
                    message: 'Failed to login.'    
                  });
            } else {
                 console.log(results);
                 connection.end();
                 res.render('account', { title: 'Registered' });
            }
        });
});

module.exports = router;
