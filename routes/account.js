var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
var mysql = require('mysql');
var dbconfig = require('../config/dbconfig');


/* POST account page. */
router.post('/', sanitize('username').trim().escape(), sanitize('password').trim().escape(), function (req, res, next) {
    var username = req.sanitize('username').trim().escape();
    var username = req.body.username;
    res.render('account', {
        title: 'Your Movies',
        username: username,
    });
});

module.exports = router;