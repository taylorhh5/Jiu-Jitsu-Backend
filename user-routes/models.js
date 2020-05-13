const db = require('../dbConfig.js')

module.exports={
    getTakedown,
    getTakedownById,
    getGuard,
    getGuardById,
    getMount,
    getMountById,
    getBack,
    getBackById,
    getSidemount,
    getSidemountById
}

function getTakedown(){
    return db('takedown');
}

//get by name
// function getTakedownById(name){
//     return db('takedown').where({name}).first();
// }

function getTakedownById(id){
    return db('takedown').where({id}).first();
}


//get all guard
function getGuard(){
    return db('guard');
}

function getGuardById(id){
    return db('guard').where({id}).first();
}

//get all mount
function getMount(){
    return db('mount');
}

function getMountById(id){
    return db('mount').where({id}).first();
}

//get all back
function getBack(){
    return db('back');
}

function getBackById(id){
    return db('back').where({id}).first();
}


//get all sidemount
function getSidemount(){
    return db('sidemount');
}

function getSidemountById(id){
    return db('sidemount').where({id}).first();
}