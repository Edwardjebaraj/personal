var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // web/index.html
  res.sendFile(path.join(__dirname+'web/index.html'));

});

module.exports = router;
