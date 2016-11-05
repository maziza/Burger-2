var express = require('express');
var router = express.Router();

// Routes
router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
});

router.post('/create', function (req, res) {
});

router.put('/update:id', function (req, res) {

});

module.exports = router;