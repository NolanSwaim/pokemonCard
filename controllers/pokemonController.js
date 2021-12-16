const {Pokemon} = require('../models')


module.exports.viewAll = async function (req, res) {
    const pokemonList = await Pokemon.findAll();
    res.render('index', {pokemonList});
}

module.exports.renderEditForm = async function(req,res) {
    const pokemon = await Pokemon.findByPk(
        req.params.id
    );
    res.render('edit',{pokemon});
}

module.exports.updatePokemon = async function(req,res){
    await Pokemon.update(
        {
            name:req.body.name,
            type1:req.body.type1,
            pokeimage:req.body.pokeimage,
            move1cost1:req.body.move1cost2,
            move1cost2:req.body.move1cost2,
            move1name:req.body.move1name,
            move1power:req.body.move1power,
            move2cost1:req.body.move2cost1,
            move2cost2:req.body.move2cost2,
            move2cost3:req.body.move2cost3,
            move2name:req.body.move2name,
            move2power:req.body.move2power,
            weakness:req.body.weakness,
            resistance:req.body.resistance,
            retreatcost:req.body.retreatcost,
            energy:req.body.energy
        },
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
}

module.exports.deletePokemon = async function(req, res){
    await Pokemon.destroy(
        {
        where: 
            {
              id: req.params.id  
            }
    });
    res.redirect('/');
}

module.exports.renderAddForm = function (req,res){
    const pokemon = {
        name:"",
        type1:"",
        pokeimage:"",
        move1cost1: "",
        move1cost2:"",
        move1name:"",
        move1power:1,
        move2cost1:"",
        move2cost2:"",
        move2cost3:"",
        move2name:"",
        move2power:1,
        weakness:"",
        resistance:"",
        retreatcost:"",
        energy:"",
    };
    res.render('add', {pokemon});
}
module.exports.addPokemon = async function(req,res){
    await Pokemon.create(
        {
            name:req.body.name,
            type1:req.body.type1,
            pokeimage:req.body.pokeimage,
            move1cost1:req.body.move1cost2,
            move1cost2:req.body.move1cost2,
            move1name:req.body.move1name,
            move1power:req.body.move1power,
            move2cost1:req.body.move2cost1,
            move2cost2:req.body.move2cost2,
            move2cost3:req.body.move2cost3,
            move2name:req.body.move2name,
            move2power:req.body.move2power,
            weakness:req.body.weakness,
            resistance:req.body.resistance,
            retreatcost:req.body.retreatcost,
            energy:req.body.energy  
        });
    res.redirect('/');
}