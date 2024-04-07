const { Router } = require('express');
const { singleUser, createUser, login, deleteUser, allUser } = require('../controller/userController');
const Auth = require('../middleware/auth');
const AdminAuth = require('../middleware/adminAuth');

const router = Router();

router.get(`/user`, allUser);
router.get('/user/:id', singleUser);

router.post('/user', createUser);
router.post('/login', login);

router.delete('/user/:id', deleteUser);


module.exports = router;