var express = require('express');
var router = express.Router();
const {main} = require('./emailSender')

/* GET users listing. */
router.get('/email', main);

module.exports = router;
