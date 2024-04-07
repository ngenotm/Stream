const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (req.user.role != "admin") return res.status(403).json({ status: 403, message: "you not admin" });
    next()
}