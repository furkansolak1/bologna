const {DataTypes}= require("sequelize");
const sequelize = require("../data/db");
const Ders= sequelize.define("ders",{
    dersKodu:{
    type: DataTypes.STRING,
      primaryKey: true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    faculty:{
        type:DataTypes.STRING,
        allowNull:false
    },
    section:{
        type:DataTypes.STRING,
        allowNull:false
    },
    donem:{
        type:DataTypes.STRING,
        allowNull:false
    },
    onKosul:{
        type:DataTypes.STRING,
        allowNull:true,
        defaultValue:"Bu dersin önkoşulu bulunmamaktadır."
    }
},{timestamps:false});


module.exports=Ders;