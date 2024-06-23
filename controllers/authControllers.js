const User = require("../models/user");
const bcrypt = require("bcrypt");
const ctypto = require("crypto");
const config = require("config");

const jwt = require('jsonwebtoken');
const {Op}= require("sequelize");
exports.get_login= async function(req,res,next){
    const message = req.session.message;
    delete req.session.message;
    try{
        return res.render("auth/login",{
            title:"login",
            message:message,
            csrfToken: req.csrfToken()
        })
    }
    catch(err){
        console.log(err);
    }
}
exports.post_login= async function(req,res,next){
    const tc = req.body.tc;
    const password = req.body.password;
    try{
       const user = await User.findOne({
        where:{
            tc:tc
        }
       });
       if(!user){
        return res.render("auth/login",{
            title:"login",
            message:{text:"Bilgileri kontrol edip tekrar deneyiniz",class:"danger"}
        })
       }
       const match = await bcrypt.compare(password,user.password);
       if(match){
            req.session.isAuth= true;
            req.session.isIdareci= user.role=="idareci"?true:false;
            req.session.fullname = user.fullname;
            req.session.userid= user.id;
            req.session.role= user.role;
            const url = "/user/index";
            
            return res.redirect(url);
       }
       res.render("auth/login",{
        title:"login",
        message:{text:"Bilgileri kontrol edip tekrar deneyiniz",class:"danger"}
        })
    }
    catch(err){
        console.log(err);
    }
}
exports.get_logout= async function(req,res,next){
    
    try{
       await req.session.destroy();
       res.redirect("/account/login");
    }
    catch(err){
        console.log(err);
    }
}
