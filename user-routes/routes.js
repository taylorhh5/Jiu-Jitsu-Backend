const router = require('express').Router();

const Move = require('./models.js');

//get all takedowns
router.get('/takedowns', (req, res)=>{

    Move
    .getTakedown()
    .then(move =>{
        res.status(200).json(move);
    }).catch(err =>{
        res.status(500).json({err:'failed to get takedown'})
    })
})


module.exports=router;