const router = require('express').Router();

const Move = require('./models.js');

//get all takedowns
router.get('/takedown', (req, res)=>{

    Move
    .getTakedown()
    .then(move =>{
        res.status(200).json(move);
    }).catch(err =>{
        res.status(500).json({err:'failed to get takedown'})
    })
})

//get takedown by name
// router.get('/takedowns/:id', (req, res)=>{

//     const name = req.params.id
//     console.log (req.params)
//     Move
//     .getTakedownById(name)
    
//     .then(move =>{
//         if (move){
//         res.status(200).json(move);
//         }else{
//             res.status(201).json({err:`No takedown move with the id of ${name} exists`}) 
//         }
//     }).catch(err =>{
//         res.status(500).json({err:'failed to get takedown'})
//     })
// })

//get takedown by id
router.get('/takedown/:id', (req, res)=>{

    const id = req.params.id
    console.log (req.params)
    Move
    .getTakedownById(id)
    
    .then(move =>{
        if (move){
        res.status(200).json(move);
        }else{
            res.status(201).json({err:`No takedown move with the id of ${id} exists`}) 
        }
    }).catch(err =>{
        res.status(500).json({err:'failed to get takedown'})
    })
})

//get all guard
router.get('/guard', (req, res)=>{

    Move
    .getGuard()
    .then(move =>{
        res.status(200).json(move);
    }).catch(err =>{
        res.status(500).json({err:'failed to get guard'})
    })
})

//get guard by id
router.get('/guard/:id', (req, res)=>{

    const id = req.params.id
    console.log (req.params)
    Move
    .getGuardById(id)
    
    .then(move =>{
        if (move){
        res.status(200).json(move);
        }else{
            res.status(201).json({err:`No guard move with the id of ${id} exists`}) 
        }
    }).catch(err =>{
        res.status(500).json({err:'failed to get guard move'})
    })
})


//get all mount
router.get('/mount', (req, res)=>{

    Move
    .getMount()
    .then(move =>{
        res.status(200).json(move);
    }).catch(err =>{
        res.status(500).json({err:'failed to get mount move'})
    })
})

//get mount by id
router.get('/mount/:id', (req, res)=>{

    const id = req.params.id
    console.log (req.params)
    Move
    .getMountById(id)
    
    .then(move =>{
        if (move){
        res.status(200).json(move);
        }else{
            res.status(201).json({err:`No mount move with the id of ${id} exists`}) 
        }
    }).catch(err =>{
        res.status(500).json({err:'failed to get mount move'})
    })
})

//get all guard
router.get('/back', (req, res)=>{

    Move
    .getBack()
    .then(move =>{
        res.status(200).json(move);
    }).catch(err =>{
        res.status(500).json({err:'failed to get back move'})
    })
})

//get back by id
router.get('/back/:id', (req, res)=>{

    const id = req.params.id
    console.log (req.params)
    Move
    .getBackById(id)
    
    .then(move =>{
        if (move){
        res.status(200).json(move);
        }else{
            res.status(201).json({err:`No back move with the id of ${id} exists`}) 
        }
    }).catch(err =>{
        res.status(500).json({err:'failed to get back move'})
    })
})

//get all guard
router.get('/sidemount', (req, res)=>{

    Move
    .getSidemount()
    .then(move =>{
        res.status(200).json(move);
    }).catch(err =>{
        res.status(500).json({err:'failed to get sidemount move'})
    })
})

//get guard by id
router.get('/sidemount/:id', (req, res)=>{

    const id = req.params.id
    console.log (req.params)
    Move
    .getSidemountById(id)
    
    .then(move =>{
        if (move){
        res.status(200).json(move);
        }else{
            res.status(201).json({err:`No sidemount move with the id of ${id} exists`}) 
        }
    }).catch(err =>{
        res.status(500).json({err:'failed to get sidemount move'})
    })
})
module.exports=router;