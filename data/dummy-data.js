const Ders = require("../models/ders");
const DersIcerigi = require("../models/dersIcerigi");
const KaynakKitap = require("../models/kaynakKitap");
const Program = require("../models/program");
const ProgramCiktisi = require("../models/programCiktisi");
const User = require("../models/user");
const bcrypt = require("bcrypt");
async function populate(){
    
    const userCount = await User.count();
    if(userCount==0){
        const users = await User.bulkCreate([
            {fullname:"Furkan Solak",email:"1furkansolak@gmail.com",password:await bcrypt.hash("123456",10),tc:"12345678999",role:"idareci",idareciBolum:"Bilgisayar Mühendisliği Bölümü"},
            {fullname:"Semih Sarı",email:"semihsari@gmail.com",password:await bcrypt.hash("123456",10),tc:"12345678988",role:"idareci",idareciBolum:"Bilgisayar Mühendisliği Bölümü"},
            {fullname:"Berat Öcal",email:"beratocal@gmail.com",password:await bcrypt.hash("123456",10),tc:"12345678977",role:"öğretim elemanı"},
            {fullname:"Merve Yılmaz",email:"merve@gmail.com",password:await bcrypt.hash("123456",10),tc:"12345678966",role:"öğretim elemanı"}
            
        ]);
    }
    const programCount=await Program.count();
    if(programCount==0){
        const programs = await Program.bulkCreate([
            {name:"Bilgisayar Mühendisliği Lisans",userId:"1"},
            {name:"Makine Mühendisliği Lisans",userId:"2"},
        ]);
    
    }
    const dersCount= await Ders.count();
    if(dersCount== 0){
        const ders= await Ders.bulkCreate([
            {dersKodu:"ATA1001",name:"Atatürk İlkeleri ve İnkılap Tarihi I",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"1. Yarıyıl",userId:"3",programId:1},
            {dersKodu:"BLM-1001",name:"Genel Fizik I",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"1. Yarıyıl",userId:"3",programId:1},
            {dersKodu:"BLM-1003",name:"Matematik I",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"1. Yarıyıl",programId:1},
            {dersKodu:"BLM-1005",name:"Oryantasyon",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"1. Yarıyıl",programId:1},
            {dersKodu:"BLM-1013",name:"Algoritma ve Programlama",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"1. Yarıyıl",programId:1},
            {dersKodu:"BLM-1015",name:"Bilgisayar Mühendisliğine Giriş",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"1. Yarıyıl",programId:1},
            {dersKodu:"TDİ1001",name:"Türk Dili I",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"1. Yarıyıl"},
            {dersKodu:"YDİ1001",name:"İngilizce I",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"1. Yarıyıl"},
            {dersKodu:"SEC-1003",name:"Teknik Olmayan Seçmeli Ders Grubu",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"1. Yarıyıl",programId:1},
       

            {dersKodu:"ATA1002",name:"Atatürk İlkeleri ve İnkılap Tarihi II",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"2. Yarıyıl",programId:1},
            {dersKodu:"BLM-1002",name:"Genel Fizik II",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"2. Yarıyıl",programId:1},
            {dersKodu:"BLM-1004",name:"Matematik II",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"2. Yarıyıl",programId:1},
            {dersKodu:"BLM-1008",name:"Lineer Cebir",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"2. Yarıyıl",programId:1},
            {dersKodu:"BLM-1010",name:"Yapısal Programlama",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"2. Yarıyıl",programId:1},
            {dersKodu:"BLM-1012",name:"Modern Biyoloji",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"2. Yarıyıl",programId:1},
            {dersKodu:"TDİ1002",name:"Türk Dili II",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"2. Yarıyıl",programId:1},
            {dersKodu:"YDİ1002",name:"İngilizce II",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"2. Yarıyıl",programId:1},

            {dersKodu:"BLM-2001",name:"Veri Yapıları",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"3. Yarıyıl",programId:1},
            {dersKodu:"BLM-2013",name:"İş Sağlığı Ve Güvenliği I",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"3. Yarıyıl",programId:1},
            {dersKodu:"BLM-2015",name:"Nesneye Yönelik Programlama",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"3. Yarıyıl",programId:1},
            {dersKodu:"BLM-2017",name:"Ayrık Matematik",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"3. Yarıyıl",programId:1},
            {dersKodu:"BLM-2019",name:"Diferansiyel Denklemler",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"3. Yarıyıl",programId:1},
            {dersKodu:"BLM-2021",name:"Analog Elektronik",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"3. Yarıyıl",programId:1},


            {dersKodu:"BLM-2004",name:"Bilgisayar Organizasyonu",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"4. Yarıyıl",programId:1},
            {dersKodu:"BLM-2006",name:"Sayısal Elektronik",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"4. Yarıyıl",programId:1},
            {dersKodu:"BLM-2020",name:"Programlama Laboratuvarı",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"4. Yarıyıl",programId:1},
            {dersKodu:"BLM-2022",name:"Programlama Dilleri Kavramları",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"4. Yarıyıl",programId:1},
            {dersKodu:"BLM-2024",name:"İş Sağlığı Ve Güvenliği II",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"4. Yarıyıl",programId:1},
            {dersKodu:"BLM-2026",name:"Olasılık Ve İstatistik",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"4. Yarıyıl",programId:1},
            {dersKodu:"SEC-2004",name:"Teknik Seçmeli Ders Grubu",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"4. Yarıyıl",programId:1},

            {dersKodu:"BLM-3005",name:"Veri Yönetimi ve Dosya Yapıları",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"5. Yarıyıl",programId:1},
            {dersKodu:"BLM-3059",name:"Veri Tabanı Yönetim Sistemleri",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"5. Yarıyıl",programId:1},
            {dersKodu:"BLM-3061",name:"İşletim Sistemleri",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"5. Yarıyıl",programId:1},
            {dersKodu:"BLM-3063",name:"Staj I",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"5. Yarıyıl",programId:1},
            {dersKodu:"SEC-3003",name:"Teknik Seçmeli Ders Grubu",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"5. Yarıyıl",programId:1},
            {dersKodu:"SEC-3005",name:"Teknik Olmayan Seçmeli D ers Grubu",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"5. Yarıyıl",programId:1},


            {dersKodu:"BLM-3004",name:"Veri Haberleşmesi",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"6. Yarıyıl",programId:1},
            {dersKodu:"BLM-3006",name:"Nesneye Dayalı Analiz ve Tasarım",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"6. Yarıyıl",programId:1},
            {dersKodu:"BLM-3032",name:"Formal Diller Ve Otomat Teorisi",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"6. Yarıyıl",programId:1},
            {dersKodu:"SEC-3006",name:"Teknik Olmayan Ders Grubu",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"6. Yarıyıl",programId:1},
            {dersKodu:"SEC-3004",name:"Teknik Seçmeli Ders Grubu",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"6. Yarıyıl",programId:1},
            
            {dersKodu:"BLM-4001",name:"Proje I",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"7. Yarıyıl",programId:1},
            {dersKodu:"BLM-4081",name:"Yazılım Mühendisliği",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"7. Yarıyıl",programId:1},
            {dersKodu:"BLM-4083",name:"Yapay Zeka",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"7. Yarıyıl",programId:1},
            {dersKodu:"BLM-4085",name:"Staj II",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"7. Yarıyıl",programId:1},
            {dersKodu:"SEC-4003",name:"Teknik Seçmeli Ders Grubu",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"7. Yarıyıl",programId:1},

            {dersKodu:"BLM-4036",name:"Proje II",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"8. Yarıyıl",programId:1},
            {dersKodu:"BLM-4038",name:"Algoritma Analizi",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"8. Yarıyıl",programId:1},
            {dersKodu:"SEC-4004",name:"Teknik Seçmeli Ders Grubu",faculty:"Mühendislik Fakültesi",section:"Bilgisayar Mühendisliği Bölümü",donem:"8. Yarıyıl",programId:1},
        ]);

    }
    
    const pciktiCount= await ProgramCiktisi.count();
    if(pciktiCount==0){
        const programciktis=await ProgramCiktisi.bulkCreate([
            {text:"programcikti1",programId:1},
            {text:"programcikti2",programId:1},
            {text:"programcikti3",programId:1},
            {text:"programcikti4",programId:1},
            {text:"programcikti5",programId:1},
            {text:"programcikti6",programId:1},
            {text:"programcikti7",programId:1},
        ])
    }
    const kitapcount = await KaynakKitap.count();
    if(kitapcount== 0){
        const kitaplar = await KaynakKitap.bulkCreate([
            {kitaplar:"kitap1 , kitap 2",dersId:"ATA1001"},
        ])
    }
    const icerikcount = await DersIcerigi.count();
    if(icerikcount==0){

        const dersiceriks = await DersIcerigi.bulkCreate([
            {hafta:"1",text:"içerik 1",derDersKodu:"ATA1001"},
            {hafta:"2",text:"içerik 2",derDersKodu:"ATA1001"},
            {hafta:"3",text:"içerik 3",derDersKodu:"ATA1001"},
            {hafta:"4",text:"içerik 4",derDersKodu:"ATA1001"},
            {hafta:"5",text:"içerik 5",derDersKodu:"ATA1001"},
            {hafta:"6",text:"içerik 6",derDersKodu:"ATA1001"},
            {hafta:"7",text:"içerik 7",derDersKodu:"ATA1001"},
        ]);
    }
    
}
module.exports=populate;