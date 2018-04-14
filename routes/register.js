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
        username = req.body.firstname;
        password = req.body.lastname;
        first_name = req.body.firstname;
        last_name = req.body.lastname;
        email = req.body.email;
        console.log(username)
        console.log(password)
        console.log(first_name)
        console.log(last_name)
        console.log(email)
        var connection = mysql.createConnection(dbconfig);
        connection.query("INSERT INTO `users` (`username`, `password`, `first_name`, `last_name`, `email`) VALUES (" + "\'" + username +  "\'"  + "\,"   + "\'" + password +  "\'"  + "\,"   + "\'" + first_name +  "\'"  + "\,"   + "\'" + last_name +  "\'"  + "\,"   + "\'" + email +  "\'"   + ")", function (error, results, fields) {
            if (error) {
                  console.log(error);
                  connection.end();
                  res.render('index', { 
                    title: 'Registered',
                    message: 'Failed to register.'    
                  });
            } else {
                 console.log(results);
                 connection.end();
                 res.render('index', { 
                     title: 'Registered',
                     message: 'Success, an account has been created.'    
                });
            }
        });
    });

module.exports = router;