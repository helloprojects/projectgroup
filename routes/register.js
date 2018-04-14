var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
var mysql = require('mysql');
var dbconfig = require('../config/dbconfig');

/**
 * GET register page
 */
router.get('/', function (req, res, next) {
    res.render('register', { 
        title: 'Register an account' });
});

/**
 * Account Registration
 * POST
 */
router.post('/submit',
    [
        sanitize('username').trim().escape(),
        sanitize('password').trim().escape(),
        sanitize('first_name').trim().escape(),
        sanitize('last_name').trim().escape(),
        sanitize('email').trim().escape()
    ],
    function (req, res, next) {
        var username = req.body.username;
        var password = req.body.password;
        var first_name = req.body.firstname;
        var last_name = req.body.lastname;
        var email = req.body.email;
        var connection = mysql.createConnection(dbconfig);
        connection.query("INSERT INTO `users` (`username`, `password`, `first_name`, `last_name`, `email`) VALUES (" + "\'" + username +  "\'"  + "\,"   + "\'" + password +  "\'"  + "\,"   + "\'" + first_name +  "\'"  + "\,"   + "\'" + last_name +  "\'"  + "\,"   + "\'" + email +  "\'"   + ")", function (error, results, fields) {
            if (error) {
                  console.log(error);
                  connection.end();
                  res.render('index', { 
                    title: 'Movie List - Home Page',
                    message: 'Failed to register.'    
                  });
            } else {
                 console.log(results);
                 connection.end();
                 res.render('index', { 
                     title: 'Movie List - Home Page',
                     message: 'Success, an account has been created, you can now log-in.'    
                });
            }
        });
    });

module.exports = router;