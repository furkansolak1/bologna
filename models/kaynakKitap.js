const {DataTypes}= require("sequelize");
const sequelize = require("../data/db");
const KaynakKitap= sequelize.define("kaynakKitap",{
    kitaplar:{
        type:DataTypes.TEXT,
        allowNull:false
    }
},{timestamps:false});
module.exports=KaynakKitap;