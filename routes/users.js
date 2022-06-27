var express = require('express');
var router = express.Router();
const {main} = require('./emailSender')
const {streamData} = require('./stream')

/* GET users listing. */
router.get('/email', main);
router.get('/stream', streamData)

module.exports = router;
