const {DataTypes}= require("sequelize");
const sequelize = require("../data/db");
const DersIcerigi= sequelize.define("dersIcerigi",{
    hafta:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    text:{
        type:DataTypes.TEXT,
        allowNull:false
    }
   
    
    
    
},{timestamps:false});


module.exports=DersIcerigi;