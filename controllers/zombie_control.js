var zombie = require('../models/zombie')

// List of All Zombies
exports.zombie_list = async function(req, res){
    try{
        theZombies = await zombie.find()
        res.send(theZombies)
    }catch(err){
        res.status(500)
        res.send(`"error":${err}}`)
    }
}

// For a specific Zombie
exports.zombie_detail = function(req, res){
    res.send('NOT IMPLEMENTED: Zombie Detail: ' + req.params.id)
}

// Handle Zombie create on POST
exports.zombie_create_post = async function(req, res){
    console.log(req.body)
    let document = new zombie()
    document.zombie_type = req.body.zombie_type
    document.height = req.body.height
    document.turn_age = req.body.turn_age

    try{
        let result = await document.save();
        res.send(result);
    }catch(err){
        res.status(500)
        res.send(`{"error": ${err}}`)
    }

}

// Handle Zombie delete from on DELETE
exports.zombie_delete = function(req, res){
    res.send('NOT IMPLEMENTED: Zombie delete DELETE' + req.params.id)
}

// Handle Zombie Update from on PUT
exports.zombie_update_put = function(req, res){
    res.send('NOT IMPLEMENTED: Zombie Update Put' + req.params.id)
}

// VIEWS
// Handle a show all view
exports.zombie_view_all_page = async function(req, res){
    try{
        theZombies = await zombie.find()
        res.render('zombies', {title:'Zombie Search Results', results:theZombies})
    }catch(err){
        res.status(500)
        res.send(`"error":${err}`)
    }
}