const Sequelize = require("sequelize");
const config = require("config");
const dbName =config.get("db.name")
const password= config.get("db.password");
const dialect =config.get("db.dialect");
const host = config.get("db.host");

const sequelize = new Sequelize(dbName,"root",password,{
    dialect:dialect,
    host:host,
    define:{
        timestamps:false
    },
    storage:"./session.mysql"
});
async function connect(){
    try{
        await sequelize.authenticate();
        console.log('mysql bağlantısı yapıldı');
    }
    catch(err){
        console.log('mysql bağlantı hatası',err);
    }
}
connect();
module.exports= sequelize;