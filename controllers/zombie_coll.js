var Zombie = require('../models/zombie')

// List of All Zombies
exports.zombie_list = function(req, res){
    res.send('NOT IMPLEMENTED: Zombie List')
}

// For a specific Zombie
exports.zombie_detail = function(req, res){
    res.send('NOT IMPLEMENTED: Zombie Detail: ' + req.params.id)
}

// Handle Zombie create on POST
exports.zombie_create_post = function(req, res){
    res.send('NOT IMPLEMENTED: Zombie create POST')
}

// Handle Zombie delete from on DELETE
exports.zombie_delete = function(req, res){
    res.send('NOT IMPLEMENTED: Zombie delete DELETE' + req.params.id)
}

// Handle Zombie Update from on PUT
exports.zombie_update_put = function(req, res){
    res.send('NOT IMPLEMENTED: Zombie Update Put' + req.params.id)
}