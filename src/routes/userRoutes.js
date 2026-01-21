const express = require('express');
const { authorizeRoles } = require('../middleware/roleMiddleware');
const { verifyToken } = require('../middleware/authMiddleware');
const router = express.Router();    

router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
    res.json(
        { message: "Admin route accessed" }
    );
});

router.get("/user", verifyToken, authorizeRoles("user"), (req, res) => {
    res.json(
        { message: "User route accessed" }
    );
});


module.exports = router;