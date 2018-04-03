var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
var mysql = require('mysql');
var dbconfig = require('../config/dbconfig');


/* GET register page. */
router.get('/', function (req, res, next) {
    res.render('register', { title: 'Register an account' });
});

/* POST register page. */
router.post('/submit', function (req, res, next) {
    // res.render('index', { title: 'Registered' });
});


module.exports = router;