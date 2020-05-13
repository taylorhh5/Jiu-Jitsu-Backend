const db = require('../dbConfig.js')

module.exports={
    getTakedown,
    getTakedownById
}

function getTakedown(){
    return db('takedown');
}

function getTakedownById(id){
    return db('takedown').where({id}).first();
}