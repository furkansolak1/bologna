const express = require("express");
const router= express.Router();
const userControllers = require("../controllers/userControllers");
const csrf = require("../middlewares/csrf");
const isOgretimElemani= require("../middlewares/is-ogretimelemani");
const isIdareci = require("../middlewares/is-idareci");
const isAuth= require("../middlewares/isAuth");
router.post("/programciktisiolustur",isIdareci,csrf,userControllers.post_programciktisi);
router.post("/derseogretimelemani",isIdareci,csrf,userControllers.post_derseogretimelemani);
router.get("/deletecikti/:id",isIdareci,csrf,userControllers.get_deletecikti);
router.post("/icerikcikti",csrf,isOgretimElemani,userControllers.post_icerikcikti);
router.post("/ogrenimcikti",csrf,isOgretimElemani,userControllers.post_ogrenimcikti);
router.post("/kaynakkitap",csrf,isOgretimElemani,userControllers.post_kaynakkitap);
router.post("/onkosul",csrf,isOgretimElemani,userControllers.post_onkosul);
router.get("/index",csrf,isAuth,userControllers.index);

module.exports= router;