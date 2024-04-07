const { Router } = require('express');
const { allActors, singleActor, createActor, updateActor, deleteActor } =
    require('../controller/actorController');
const Auth = require('../middleware/auth');
const AdminAuth = require('../middleware/adminAuth');

const router = Router();


router.get('/actor', allActors);
router.get('/actor/:id', singleActor);

router.post('/actor', Auth, AdminAuth, createActor);

router.put('/actor/:id', Auth, AdminAuth, updateActor);

router.delete('/actor/:id', Auth, AdminAuth, deleteActor);


module.exports = router;