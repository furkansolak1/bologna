const Ders = require("../models/ders");
const DersIcerigi = require("../models/dersIcerigi");
const KaynakKitap = require("../models/kaynakKitap");
const OgrenimCiktisi = require("../models/ogrenimCiktisi");
const OgrenimProgram = require("../models/ogrenimProgram");
const Program = require("../models/program");
const ProgramCiktisi = require("../models/programCiktisi");
const User= require("../models/user");
const { Op } = require("sequelize");
// idareci Controller
exports.index= async function(req,res,next){
    const userid = req.session.userid;
    const isIdareci= req.session.role;
    const isOgretimElemani= req.session.role;
    const message = req.session.message;
    delete req.session.message;
    try{
            if(isIdareci == "idareci"){
                
                const idareci = await User.findOne({
                    where:{
                        id:userid
                    },
                    raw:true
                    
                })
                const dersler = await Ders.findAll({
                    where:{
                        section:idareci.idareciBolum
                    },
                    include:{
                        model:User,
                        attributes:["fullname"]
                    }
                });
               
                const ogretimElemanlari= await User.findAll({
                    where:{
                        dersSayisi:{
        
                            [Op.lt]: 6
                        },
                        role:"öğretim elemanı"
                    },
                    raw:true
        
                })
                const program = await Program.findOne({
                    where:{
                        userId:userid
                    },
                    raw:true
                });
                const programCiktilari= await ProgramCiktisi.findAll({
                    where:{
                        programId:program.id
                    }
                })
                
                return res.render("user/index",{
                    title:"login",
                    dersler:dersler,
                    ogretimElemanlari:ogretimElemanlari,
                    program:program,
                    programCiktilari:programCiktilari,
                    csrfToken:req.csrfToken()
                })
            }
            if(isOgretimElemani=="öğretim elemanı"){
                const ogretimElemani = await User.findOne({
                    where:{
                        id:userid
                    },
                    raw:true
                    
                })
                const dersler = await Ders.findAll({
                    where:{
                        userId:ogretimElemani.id
                    },raw:true
                }); 
                const program = await Program.findOne({
                    where:{
                        name:"Bilgisayar Mühendisliği Lisans"
                    }
                })
                const programciktilari= await ProgramCiktisi.findAll({
                    where:{
                        programId:program.id
                    }
                })
                
                const dizi=[];
                for (let i=0;i<dersler.length;i++){
                    dizi.push(dersler[i].dersKodu);

                }
                const dersicerikleri = await DersIcerigi.findAll({
                    where:{
                        derDersKodu:dizi
                    }
                })
                console.log('----------------------------------------------------');
                console.log(programciktilari);
                
                return res.render("user/index",{
                    title:"login",
                    dersler:dersler,
                    dersCount:dersler.length,
                    dersicerikleri:dersicerikleri,
                    message:message,
                    programCiktilari:programciktilari,
                    csrfToken:req.csrfToken()
                })

            }
        
        
    }   
    catch(err){
        console.log(err);
    }
}
exports.post_derseogretimelemani= async function(req,res,next){
    const ogretimId = req.body.ogretimElemani;
    const dersId = req.body.ders;
    try{
       const ders = await Ders.findOne({
            where:{
                dersKodu:dersId
            }
       });
       if(ders.userId==null){
            const yeni = await User.findOne({
                where:{
                    id:ogretimId
                }
            })
            yeni.dersSayisi+=1;
            await yeni.save();
            ders.userId=ogretimId;
            await ders.save();
       }
       else{
            const eski = await User.findOne({
                where:{
                    id:ders.userId
                }
            });
            eski.dersSayisi-=1;
            await eski.save();
            const yeni = await User.findOne({
                where:{
                    id:ogretimId
                }
            });
            yeni.dersSayisi+=1;
            await yeni.save();
            ders.userId=ogretimId;
            await ders.save();
            
       }
     
       req.session.message={text:"İlgili Derse Öğretim elemanı atama işlemi başarıyla gerçekleştirilmiştir",class:"success"};
       
       
       res.redirect("/user/index");
    }
    catch(err){
        console.log(err);
    }
}
exports.post_programciktisi= async function(req,res,next){
    const programId = req.body.programId;
    const ciktiMetni = req.body.programCiktisi;
    try{
        const program = await Program.findOne({
            where:{
                id:programId
            }
        });
        
        program.programCiktiSayisi+=1;
        
        await program.save();
        const cikti = await ProgramCiktisi.create({ text: ciktiMetni,programId:programId });

    
       res.redirect("/user/index");
    }
    catch(err){
        console.log(err);
    }
}
exports.get_deletecikti= async function(req,res,next){
    const ciktiId = req.params.id;
    const userid = req.session.userid;
    try{
        const program = await Program.findOne({
            where:{
                userId:userid
            }
        });
        program.programCiktiSayisi-=1;
        program.save();
        await ProgramCiktisi.destroy({
            where: {
              id:ciktiId
            }
        });
        req.session.message={text:"Program Çıktısı silindi",class:"success"};
       res.redirect("/user/index");
    }
    catch(err){
        console.log(err);
    }
}
exports.post_icerikcikti= async function(req,res,next){
    const dersKodu = req.body.ders;
    const hafta = req.body.hafta;
    const icerik=req.body.icerik;

    
    try{
        const dersicerigi = await DersIcerigi.create({ hafta:hafta,text:icerik,derDersKodu:dersKodu });
        req.session.message={text:"Ders içeriği başarıyla eklendi",class:"success"};
        res.redirect("/user/index");
    }
    catch(err){
        console.log(err);
    }
}
exports.post_kaynakkitap= async function(req,res,next){
    const dersKodu = req.body.ders;
    const kaynakkitap = req.body.kaynak;
    
    try{
        const kaynak = await KaynakKitap.create({ kitaplar:kaynakkitap,dersId:dersKodu });
        req.session.message={text:"Kaynak kitap başarıyla eklendi başarıyla eklendi",class:"success"};
        res.redirect("/user/index");
    }
    catch(err){
        console.log(err);
    }
}
exports.post_onkosul= async function(req,res,next){
    const dersKodu = req.body.ders;
    const onkosul = req.body.onkosul;
    
    try{
        const ders = await Ders.findOne({
            where:{
                dersKodu:dersKodu
            }
        });
        ders.onKosul = onkosul;
        console.log('----------------------------------------------------------------');
        console.log(ders);
        await ders.save();

        req.session.message={text:"İlgili derse ön koşul bilgisi girilmiştir",class:"success"};
        res.redirect("/user/index");
    }
    catch(err){
        console.log(err);
    }
}
exports.post_ogrenimcikti= async function(req,res,next){
    const dersKodu = req.body.ders;
    const programciktiid = req.body.pcikti;
    const texto = req.body.texto;
    const iliski = req.body.iliski
    
    try{
        const ogrenimcikti= await OgrenimCiktisi.create({text:texto});
        const ogrenimprogram = await OgrenimProgram.create({programciktisiId:programciktiid,ogrenimciktisiId:ogrenimcikti.id,derDersKodu:dersKodu});


        req.session.message={text:"Öğrenim Çıktısı başarıyla oluşturuldu ve ilgili program çıktısı ile ilişkilendirildi",class:"success"};
        res.redirect("/user/index");
    }
    catch(err){
        console.log(err);
    }
}
// öğretim elemani controller
