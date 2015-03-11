var express = require('express');
var router = express.Router();
var drawimage = require('../lib/drawimage');
/* GET home page. */
router.get('/:args', function(req, res) {
  drawimage(req,res);
});

module.exports = router;
