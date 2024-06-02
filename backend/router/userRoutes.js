const { Router } = require('express');
const { singleUser, registerUser, login, deleteUser, allUser, getWatchList, logout } = require('../controller/userController');
const Auth = require('../middleware/auth');
const AdminAuth = require('../middleware/adminAuth');
const ValidateObjectId = require('../middleware/ValidateObjectId');

const router = Router();



router.get("/users", allUser);

router.get("/getWatchList/:id", getWatchList);

router.route("/user/:id")
    .get(ValidateObjectId, singleUser)
    .delete(ValidateObjectId, deleteUser);

router.post("/register", registerUser);

router.get("/login", login);

router.post('/logout', logout);


module.exports = router;