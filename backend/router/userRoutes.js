const { Router } = require('express');
const { singleUser, registerUser, login, deleteUser, allUser, getWatchList, logout, refreshToken } = require('../controller/userController');
const ValidateObjectId = require('../middleware/ValidateObjectId');
const Authenticate = require('../middleware/Authenticate');
const Authorize = require('../middleware/Authorize');
const { registerValidation, loginValidation } = require('../validation/userValidation');

const router = Router();


router.get("/users", [Authenticate, Authorize(["admin"])], allUser);

router.get("/getWatchList/:id", getWatchList);

router.route("/user/:id")
    .get(ValidateObjectId, singleUser)
    .delete(ValidateObjectId, [Authenticate, Authorize(["admin"])], deleteUser);

//! must add edit user route here

router.post("/register", registerValidation, registerUser);
router.post("/login", loginValidation, login);
router.post('/logout', logout);
router.post("/refreshToken", refreshToken);

module.exports = router;