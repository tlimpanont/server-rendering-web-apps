var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('react-app');
});

module.exports = router;
