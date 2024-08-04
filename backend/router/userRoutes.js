const { Router } = require('express');
const { singleUser, registerUser, login, deleteUser, allUser, getWatchList, logout, refreshToken } = require('../controller/userController');
const ValidateObjectId = require('../middleware/ValidateObjectId');
const Authenticate = require('../middleware/Authenticate');
const Authorize = require('../middleware/Authorize');
const { registerValidation, loginValidation } = require('../validation/userValidation');

const router = Router();


router.get("/users", [Authenticate, Authorize(["admin"])], allUser);

router.get("/getWatchList/:id", ValidateObjectId, getWatchList);

router.get("/userData", singleUser);
router.route("/user/:id")
    .delete(ValidateObjectId, [Authenticate, Authorize(["admin"])], deleteUser);
//! must add edit user route here

router.post("/register", registerValidation, registerUser);
router.post("/login", loginValidation, login);
router.post('/logout', logout);
router.get("/refreshToken", refreshToken);


router.get("/setCookie", (req, res) => {
    res.cookie("token2", "15687sdf9", {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 40), //! 40 seconds
    }).send("Cookie set");
});

module.exports = router;