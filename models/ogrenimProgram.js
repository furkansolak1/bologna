const {DataTypes}= require("sequelize");
const sequelize = require("../data/db");
const OgrenimProgram= sequelize.define("ogrenimprogram",{
  
},{timestamps:false});


module.exports=OgrenimProgram;