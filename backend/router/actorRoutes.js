const { Router } = require('express');
const { allActors, singleActor, createActor, updateActor, deleteActor } =
    require('../controller/actorController');
const Auth = require('../middleware/auth');
const AdminAuth = require('../middleware/adminAuth');
const ValidateObjectId = require('../middleware/ValidateObjectId');

const router = Router();


router.route("/actor")
    .get(allActors)
    .post(Auth, AdminAuth, createActor);

router.route("/actor/:id")
    .get(ValidateObjectId, singleActor)
    .put(ValidateObjectId, updateActor)
    .delete(ValidateObjectId, deleteActor);


module.exports = router;