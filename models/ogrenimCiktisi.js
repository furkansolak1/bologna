const {DataTypes}= require("sequelize");
const sequelize = require("../data/db");
const OgrenimCiktisi= sequelize.define("ogrenimciktisi",{
    text:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{timestamps:false});


module.exports=OgrenimCiktisi;