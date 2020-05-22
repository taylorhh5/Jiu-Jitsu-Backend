const router = require("express").Router();

const Move = require("./models.js");

const restricted = require('../auth/auth-middleware.js')

//get all takedowns
router.get("/takedown", (req, res) => {
  Move.getTakedown()
    .then((move) => {
      res.status(200).json(move);
    })
    .catch((err) => {
      res.status(500).json({ err: "failed to get takedown" });
    });
});

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
router.get("/takedown/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  Move.getTakedownById(id)

    .then((move) => {
      if (move) {
        res.status(200).json(move);
      } else {
        res
          .status(201)
          .json({ err: `No takedown move with the id of ${id} exists` });
      }
    })
    .catch((err) => {
      res.status(500).json({ err: "failed to get takedown" });
    });
});

//get all guard
router.get("/guard", (req, res) => {
  Move.getGuard()
    .then((move) => {
      res.status(200).json(move);
    })
    .catch((err) => {
      res.status(500).json({ err: "failed to get guard" });
    });
});

//get guard by id
router.get("/guard/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  Move.getGuardById(id)

    .then((move) => {
      if (move) {
        res.status(200).json(move);
      } else {
        res
          .status(201)
          .json({ err: `No guard move with the id of ${id} exists` });
      }
    })
    .catch((err) => {
      res.status(500).json({ err: "failed to get guard move" });
    });
});

//get all mount
router.get("/mount", (req, res) => {
  Move.getMount()
    .then((move) => {
      res.status(200).json(move);
    })
    .catch((err) => {
      res.status(500).json({ err: "failed to get mount move" });
    });
});

//get mount by id
router.get("/mount/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  Move.getMountById(id)

    .then((move) => {
      if (move) {
        res.status(200).json(move);
      } else {
        res
          .status(201)
          .json({ err: `No mount move with the id of ${id} exists` });
      }
    })
    .catch((err) => {
      res.status(500).json({ err: "failed to get mount move" });
    });
});

//get all back
router.get("/back", (req, res) => {
  Move.getBack()
    .then((move) => {
      res.status(200).json(move);
    })
    .catch((err) => {
      res.status(500).json({ err: "failed to get back move" });
    });
});

//get back by id
router.get("/back/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  Move.getBackById(id)

    .then((move) => {
      if (move) {
        res.status(200).json(move);
      } else {
        res
          .status(201)
          .json({ err: `No back move with the id of ${id} exists` });
      }
    })
    .catch((err) => {
      res.status(500).json({ err: "failed to get back move" });
    });
});

//get all sidemount
router.get("/sidemount", (req, res) => {
  Move.getSidemount()
    .then((move) => {
      res.status(200).json(move);
    })
    .catch((err) => {
      res.status(500).json({ err: "failed to get sidemount move" });
    });
});

//get sidemount by id
router.get("/sidemount/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  Move.getSidemountById(id)

    .then((move) => {
      if (move) {
        res.status(200).json(move);
      } else {
        res
          .status(201)
          .json({ err: `No sidemount move with the id of ${id} exists` });
      }
    })
    .catch((err) => {
      res.status(500).json({ err: "failed to get sidemount move" });
    });
});

//ADD takedown
router.post("/takedown", restricted, (req, res) => {
  Move.addTakedown(req.body)
    .then((move) => {
      res.status(201).json(move);
    })
    .catch((err) => {
      res.status(500).json({ err: "failed to add move" });
    });
});


router.post("/guard", restricted,(req, res) => {
    Move.addGuard(req.body)
      .then((move) => {
        res.status(201).json(move);
      })
      .catch((err) => {
        res.status(500).json({ err: "failed to add move" });
      });
  });

router.post("/mount", restricted, (req, res) => {
    Move.addMount(req.body)
      .then((move) => {
        res.status(201).json(move);
      })
      .catch((err) => {
        res.status(500).json({ err: "failed to add move" });
      });
  });

  router.post("/back", restricted, (req, res) => {
    Move.addBack(req.body)
      .then((move) => {
        res.status(201).json(move);
      })
      .catch((err) => {
        res.status(500).json({ err: "failed to add move" });
      });
  });

  router.post("/sidemount", restricted,(req, res) => {
    Move.addSidemount(req.body)
      .then((move) => {
        res.status(201).json(move);
      })
      .catch((err) => {
        res.status(500).json({ err: "failed to add move" });
      });
  });


//PUT

router.put("/takedown/:id", restricted, (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Move.editTakedown(id, body)

    .then((move) => {
      !move
        ? res.status(400).json({ message: "Move does not exist" })
        : res.status(200).json(move);
    })
    .catch((err) => {
      console.log("error", err);
      res.status(500).json({ error: "There was an error updating the move" });
    });
});

router.put("/guard/:id", restricted, (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Move.editGuard(id, body)

    .then((move) => {
      !move
        ? res.status(400).json({ message: "Move does not exist" })
        : res.status(200).json(move);
    })
    .catch((err) => {
      console.log("error", err);
      res.status(500).json({ error: "There was an error updating the move" });
    });
});

router.put("/mount/:id", restricted, (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Move.editMount(id, body)

    .then((move) => {
      !move
        ? res.status(400).json({ message: "Move does not exist" })
        : res.status(200).json(move);
    })
    .catch((err) => {
      console.log("error", err);
      res.status(500).json({ error: "There was an error updating the move" });
    });
});

router.put("/back/:id", restricted, (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Move.editBack(id, body)

    .then((move) => {
      !move
        ? res.status(400).json({ message: "Move does not exist" })
        : res.status(200).json(move);
    })
    .catch((err) => {
      console.log("error", err);
      res.status(500).json({ error: "There was an error updating the move" });
    });
});

router.put("/sidemount/:id", restricted, (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Move.editSidemount(id, body)

    .then((move) => {
      !move
        ? res.status(400).json({ message: "Move does not exist" })
        : res.status(200).json(move);
    })
    .catch((err) => {
      console.log("error", err);
      res.status(500).json({ error: "There was an error editing the move" });
    });
});

router.delete("/takedown/:id", restricted, (req, res) => {
  const id = req.params.id;
  Move.removeTakedown(id)
    .then((move) => {
      !move
        ? res.status(400).json({ message: "move does not exist" })
        : res.status(200).json({ message: `Deleted move with id of ${id}` });
    })
    .catch((err) => {
      console.log("error", err);
      res.status(500).json({ error: "There was an error deleting the move" });
    });
});


router.delete("/guard/:id", restricted, (req, res) => {
    const id = req.params.id;
    Move.removeGuard(id)
      .then((move) => {
        !move
          ? res.status(400).json({ message: "move does not exist" })
          : res.status(200).json({ message: `Deleted move with id of ${id}` });
      })
      .catch((err) => {
        console.log("error", err);
        res.status(500).json({ error: "There was an error deleting the move" });
      });
  });


  router.delete("/mount/:id", restricted, (req, res) => {
    const id = req.params.id;
    Move.removeMount(id)
      .then((move) => {
        !move
          ? res.status(400).json({ message: "move does not exist" })
          : res.status(200).json({ message: `Deleted move with id of ${id}` });
      })
      .catch((err) => {
        console.log("error", err);
        res.status(500).json({ error: "There was an error deleting the move" });
      });
  });

  
router.delete("/back/:id", restricted, (req, res) => {
    const id = req.params.id;
    Move.removeBack(id)
      .then((move) => {
        !move
          ? res.status(400).json({ message: "move does not exist" })
          : res.status(200).json({ message: `Deleted move with id of ${id}` });
      })
      .catch((err) => {
        console.log("error", err);
        res.status(500).json({ error: "There was an error deleting the move" });
      });
  });

  
router.delete("/sidemount/:id", restricted, (req, res) => {
    const id = req.params.id;
    Move.removeSidemount (id)
      .then((move) => {
        !move
          ? res.status(400).json({ message: "move does not exist" })
          : res.status(200).json({ message: `Deleted move with id of ${id}` });
      })
      .catch((err) => {
        console.log("error", err);
        res.status(500).json({ error: "There was an error deleting the move" });
      });
  });
module.exports = router;

