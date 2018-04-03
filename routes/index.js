var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
var mysql = require('mysql');
var dbconfig = require('../config/dbconfig');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Movie List - Home Page' });
});

 
module.exports = router;
