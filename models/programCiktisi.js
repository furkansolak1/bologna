const {DataTypes}= require("sequelize");
const sequelize = require("../data/db");
const ProgramCiktisi= sequelize.define("programciktisi",{
    text:{
        type:DataTypes.TEXT,
        allowNull:false

    }
},{timestamps:false});


module.exports=ProgramCiktisi;