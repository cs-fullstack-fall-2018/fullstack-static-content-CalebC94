var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log("Test!!!");
    res.redirect('https://www.linkedin.com');
});

module.exports = router;