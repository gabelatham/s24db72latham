var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var zombie_controller = require('../controllers/zombie_control');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// ZOMBIE ROUTES ///
// POST request for creating a Zombie.
router.post('/zombies', zombie_controller.zombie_create_post);

// DELETE request to delete Zombie.
router.delete('/zombies/:id', zombie_controller.zombie_delete);

// PUT request to update Zombie.
router.put('/zombies/:id', zombie_controller.zombie_update_put);

// GET request for one Zombie.
router.get('/zombies/:id', zombie_controller.zombie_detail);

// GET request for list of all Zombie items.
router.get('/zombies', zombie_controller.zombie_list);

module.exports = router;