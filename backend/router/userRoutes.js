const { Router } = require('express');
const { singleUser, registerUser, login, deleteUser, allUser, getWatchList, logout } = require('../controller/userController');
const Auth = require('../middleware/auth');
const AdminAuth = require('../middleware/adminAuth');
const ValidateObjectId = require('../middleware/ValidateObjectId');

const router = Router();



router.route("/users")
    .get(allUser);

router.route("/getWatchList/:id")
    .get(getWatchList);

router.route("/user/:id")
    .get(ValidateObjectId, singleUser)
    .delete(ValidateObjectId, deleteUser);

router.route("/register")
    .post(registerUser);

router.route("/login")
    .post(login);

router.post('/logout', logout);


module.exports = router;