var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: './uploads/'});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
  console.log(req.body);
  console.log(req.files);
});

module.exports = router;
