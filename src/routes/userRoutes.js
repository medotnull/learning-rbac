const express = require('express');
//const { signupController, loginController } = require('../controllers/authControllers');
const router = express.Router();    

router.get("/admin", (req, res) => {
    res.json(
        { message: "Admin route accessed" }
    );
});

router.get("/manager", (req, res) => {
    res.json(
        { message: "Manager route accessed" }
    );
});

router.get("/user", (req, res) => {
    res.json(
        { message: "User route accessed" }
    );
});


module.exports = router;