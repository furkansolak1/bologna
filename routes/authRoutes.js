const express = require("express");
const router= express.Router();
const authControllers = require("../controllers/authControllers");
const csrf = require("../middlewares/csrf");
const isOgretimElemani= require("../middlewares/is-ogretimelemani");

router.get("/login",csrf,authControllers.get_login);
router.post("/login",csrf,authControllers.post_login);
router.get("/logout",csrf,authControllers.get_logout);
module.exports = router;