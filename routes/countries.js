var express = require('express');
var router = express.Router();

var countriesController = require('../controllers/countriesController');


router.get('/', countriesController.list);

router.get('/prov', countriesController.prov);



module.exports = router;