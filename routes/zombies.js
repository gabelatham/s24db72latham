var express = require('express');
const zombie_controller = require('../controllers/zombie_control')
var router = express.Router();

/* GET Zombies*/
router.get('/', zombie_controller.zombie_view_all_page);

module.exports = router;
