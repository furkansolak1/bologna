const {DataTypes}= require("sequelize");
const sequelize = require("../data/db");
const Program= sequelize.define("program",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    programCiktiSayisi:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
    }
},{timestamps:false});


module.exports=Program;