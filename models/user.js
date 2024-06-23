const bcrypt = require("bcrypt");
const {DataTypes}= require("sequelize");
const sequelize = require("../data/db");
const User= sequelize.define("user",{
    fullname:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:{
                msg:"ad soyad girmelisiniz"
            },
            isFullname(value){
                if(value.split(" ".length<2)){
                    throw new Error("lütfen ad soyad bilgisi giriniz");
                }
            }
        }
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:{
            args:true,
            msg:"email bilgisi benzersiz olmalıdır"
        },
        validate:{
            notEmpty:{
                msg:"email girmelisiniz"
            },
            isEmail:{
                msg:"input email olmalıdır"
            }
        },
        
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:{
                msg:"Parola boş geçilemez"
            },
            len:{
                args:[8,15],
                msg:"Şifre en az 8 karakterden oluşmalıdır ve 15 karakteri geçmemelidir"
            }
            ,
            containsUppercaseLowercaseAndDigit(value) {
                if (!/[A-Z]/.test(value)) {
                  throw new Error('Şifre en az bir büyük harf , en az bir küçük harf , en az bir rakamdan oluşmalıdır');
                }
                if (!/[a-z]/.test(value)) {
                    throw new Error('Şifre en az bir büyük harf , en az bir küçük harf , en az bir rakamdan oluşmalıdır');
                }
                if (!/\d/.test(value)) {
                    throw new Error('Şifre en az bir büyük harf , en az bir küçük harf , en az bir rakamdan oluşmalıdır');
                }
              }
        }      
    },
    tc:{
        type:DataTypes.STRING,
        allowNull:false,
        unique: {
            args: true,
            msg: "TC kimlik no bilgisi benzersiz olmalıdır."
        },
        validate:{
            notEmpty:{
                msg:"TC kimlik no bilgisi zorunludur."
            },
            len:{
                args:[11,11],
                msg:"TC kimlik no bilgisi 11 karakterden oluşmalıdır."
            }
        }
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false
    },
    idareciBolum:{
        type:DataTypes.STRING,
        allowNull:true
    },
    dersSayisi:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
    }
},{timestamps:false});

User.afterValidate(async(user)=>{
    user.password= await bcrypt.hash(user.password,10);
});
module.exports=User;