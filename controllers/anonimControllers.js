const Ders = require("../models/ders");
const DersIcerigi = require("../models/dersIcerigi");
const KaynakKitap = require("../models/kaynakKitap");
const Program = require("../models/program");
const ProgramCiktisi = require("../models/programCiktisi");
const User = require("../models/user");
exports.index= async function(req,res,next){
   
    try{
            const programs = await Program.findAll({
                
            });
            res.render("anonim/index",{
                title:"Çanakkale Onsekiz Mart Üniversitesi",
                programs:programs
            });
        
        
    }   
    catch(err){
        console.log(err);
    }
}
exports.get_index= async function(req,res,next){
   const programid = req.params.programid;
    try{
            const programs = await Program.findAll({

            });
            const newprogram = await Program.findOne({
                where:{
                    id:programid
                }
            });
            const programciktilari = await ProgramCiktisi.findAll({
                where:{
                    programId:programid
                }
            });
            const dersler = await Ders.findAll({
                where:{
                    programId:programid
                },
                include:{
                    model:User,
                    attributes:["fullname"]
                }
            });
            
            console.log('----------------------------------');
            console.log(programciktilari);
            res.render("anonim/index",{
                title:"Çanakkale Onsekiz Mart Üniversitesi",
                program:newprogram,
                programs:programs,
                programCiktilari:programciktilari,
                dersler:dersler
            });
        
        
    }   
    catch(err){
        console.log(err);
    }
}
exports.get_ders= async function(req,res,next){
    const derskodu = req.params.dersid;
     try{
            const ders= await Ders.findOne({
                where:{
                    dersKodu:derskodu
                },
                include:{
                    model:User,
                    attributes:["fullname"]
                }
            });
            const kaynak= await KaynakKitap.findOne({
                where:{
                    dersId:derskodu
                }
            })
            const dersicerikleri = await DersIcerigi.findAll({
                where:{
                    derDersKodu:derskodu
                }
            })
         
             res.render("anonim/ders",{
                 title:"Çanakkale Onsekiz Mart Üniversitesi",
                 ders:ders,
                 kaynak:kaynak,
                 dersicerikleri:dersicerikleri
                 
             });
         
         
     }   
     catch(err){
         console.log(err);
     }
 }