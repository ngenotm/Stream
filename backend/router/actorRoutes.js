const { Router } = require('express');
const { allActors, singleActor, createActor, updateActor, deleteActor } = require('../controller/actorController');
const ValidateObjectId = require('../middleware/ValidateObjectId');
const Authenticate = require('../middleware/Authenticate');
const Authorize = require('../middleware/Authorize');
const router = Router();


router.get("/actorList", allActors)

router.post("/", createActor);

router.route("/:id")
    .get(ValidateObjectId, singleActor)
    .put(ValidateObjectId, [Authenticate, Authorize(["admin"])], updateActor)
    .delete(ValidateObjectId, [Authenticate, Authorize(["admin"])], deleteActor);


module.exports = router;