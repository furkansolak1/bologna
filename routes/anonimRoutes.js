const express = require("express");
const router= express.Router();
const anonimControllers = require("../controllers/anonimControllers");
router.get("/:programid",anonimControllers.get_index);
router.get("/",anonimControllers.get_index);
router.get("/ders/:dersid",anonimControllers.get_ders);
module.exports = router;