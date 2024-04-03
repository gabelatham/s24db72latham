var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var zombie_controller = require('../controllers/zombie_coll');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// ZOMBIE ROUTES ///
// POST request for creating a Costume.
router.post('/zombies', zombie_controller.zombie_create_post);

// DELETE request to delete Costume.
router.delete('/zombies/:id', zombie_controller.zombie_delete);

// PUT request to update Costume.
router.put('/zombies/:id', zombie_controller.zombie_update_put);

// GET request for one Costume.
router.get('/zombies/:id', zombie_controller.zombie_detail);

// GET request for list of all Costume items.
router.get('/zombies', zombie_controller.zombie_list);

module.exports = router;