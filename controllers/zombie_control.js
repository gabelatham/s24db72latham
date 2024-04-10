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
exports.zombie_detail = async function(req, res){
    console.log("detail" + req.params.id)
    try{
        result = await zombie.findById(req.params.id)
        res.send(result)
    }catch(err){
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found}`)
    }
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
exports.zombie_delete = async function(req, res){
    console.log("delete " + req.params.id)
    try{
        result = await zombie.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    }catch(err){
        res.status(500)
        res.send(`{"error": Error deleting ${err}`);
    }
}

// Handle Zombie Update from on PUT
exports.zombie_update_put = async function(req, res){
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try{
        let toUpdate = await zombie.findById(req.params.id)

        if(req.body.zombie_type) toUpdate.zombie_type = req.body.zombie_type
        if(req.body.height) toUpdate.height = req.body.height
        if(req.body.turn_age) toUpdate.turn_age = req.body.turn_age
        let result = await toUpdate.save()
        console.log("Success " + result)
        res.send(result)
    }catch(err){
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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

// Handle a show one view with id specified by query
exports.zombie_view_one_page = async function(req, res){
    console.log("single view for id:" + req.query.id)
    try{
        result = await zombie.findById(req.query.id)
        res.render('zombiedetail', {title: 'Zombie Detail', toShow: result})
    }catch(err){
        res.status(500)
        res.send(`{"error": document for id ${req.query.id} not found}`)
    }
}

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.zombie_create_page = function(req, res) {
    console.log("create view")
    try{
        res.render('zombiecreate', { title: 'Zombie Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
    };