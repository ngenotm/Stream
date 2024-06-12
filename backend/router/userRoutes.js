const { Router } = require('express');
const { singleUser, registerUser, login, deleteUser, allUser, getWatchList, logout, refreshToken } = require('../controller/userController');
const ValidateObjectId = require('../middleware/ValidateObjectId');
const Authenticate = require('../middleware/Authenticate');
const Authorize = require('../middleware/Authorize');

const router = Router();


router.get("/users", [Authenticate, Authorize(["admin"])], allUser);

router.get("/getWatchList/:id", getWatchList);

router.route("/user/:id")
    .get(ValidateObjectId, singleUser)
    .delete(ValidateObjectId, deleteUser);

router.post("/register", registerUser);
router.post("/login", login);
router.post('/logout', logout);
router.post("/refreshToken", refreshToken);


module.exports = router;