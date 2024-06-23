const express= require("express");
const app= express();

// modules
const cookiParser = require("cookie-parser");
const session= require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const csurf = require("csurf");
const config = require("config");

// routes 
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const anonimRoutes=require("./routes/anonimRoutes");
// custom modules
const sequelize = require("./data/db");
const dummyData = require("./data/dummy-data");
const locals = require("./middlewares/locals");

// template engine
app.set("view engine","ejs");

// models 
const User = require("./models/user");
const Ders = require("./models/ders");
const DersIcerigi = require("./models/dersIcerigi");
const KaynakKitap= require("./models/kaynakKitap");
const Program = require("./models/program");
const ProgramCiktisi= require("./models/programCiktisi");
const OgrenimCiktisi= require("./models/ogrenimCiktisi");
const OgrenimProgram=require("./models/ogrenimProgram");
// middlewares
app.use(express.urlencoded({extended:true}));
app.use(cookiParser());
app.use(session({
    secret:config.get("session.secret"),
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*60*60*24
    },
    store: new SequelizeStore({
        db:sequelize
    })
}))
app.use(locals);
app.use(csurf());


app.use("/libs",express.static("node_modules"));
app.use("/static",express.static("public"));

app.use("/account",authRoutes);
app.use("/user",userRoutes);
app.use("/",anonimRoutes);

// ders ile dersIçerigi arasında bire çok 
Ders.hasMany(DersIcerigi, {
    
});
DersIcerigi.belongsTo(Ders);


// ders ile kaynak kitap arasında bire bir 
Ders.hasOne(KaynakKitap, {
    foreignKey: 'dersId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
KaynakKitap.belongsTo(Ders, {
    foreignKey: 'dersId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// user ders arasında bire çok 
User.hasMany(Ders, {
    
  });
Ders.belongsTo(User);

// program ile program çıktısı bire çok 
Program.hasMany(ProgramCiktisi, {
    
});
ProgramCiktisi.belongsTo(Program);

//user program ile bire çok 
User.hasOne(Program,{
    
   
});
Program.belongsTo(User, {
    
});
// program ders bire çok 
Program.hasMany(Ders, {
    
});
Ders.belongsTo(Program);

// program çıktısı ogrenim ciktisi  çoka çok

ProgramCiktisi.belongsToMany(OgrenimCiktisi, { through: OgrenimProgram });
OgrenimCiktisi.belongsToMany(ProgramCiktisi, { through: OgrenimProgram });

// ders ogrenim program arasında bire çok 
Ders.hasOne(OgrenimProgram, {
    
});
OgrenimProgram.belongsTo(Ders, {

});



(async () => {
    // await sequelize.sync({ force: true });
    // await dummyData();
})();

const port = process.env.PORT||3000;
app.listen(port,function(){
    console.log('listening on port 3000');
})