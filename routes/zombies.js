var express = require('express');
const zombie_controller = require('../controllers/zombie_control')
var router = express.Router();

/* GET Zombies*/
router.get('/', zombie_controller.zombie_view_all_page);

// GET request for detail single zombie page
router.get('/detail', zombie_controller.zombie_view_one_page)

// GET create zombie page
router.get('/create', zombie_controller.zombie_create_page)

// GET update zombie page
router.get('/update', zombie_controller.zombie_update_page)

// GET delete zombie page
router.get('/delete', zombie_controller.zombie_delete_page)

module.exports = router;
