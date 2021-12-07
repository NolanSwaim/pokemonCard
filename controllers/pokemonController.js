const {Pokemon} = require('../models')
module.exports.viewAll = async function (req, res) {
    const pokemonList = await Pokemon.findAll();
    res.render('index', {pokemonList});
}

