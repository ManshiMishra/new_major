const mongoose= require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');


const hospitalSchema =new mongoose.Schema({
    pincode:{
        type: String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    hospitals_name:{
        type:String,
        required:true
    }
    
});
 


// hashing the passoword

// hospitalSchema.pre('save',async function(next){
//     if(this.isModified('password')){
//            this.password=await bcrypt.hash(this.password,12);
//            this.cpassword=await bcrypt.hash(this.cpassword,12);

//     }
//     next();
// });
// geberating web tokens 
// userSchema.methods.generateAuthToken= async function(){
//     try{
//       let token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
//       this.tokens=this.tokens.concat({token:token});
//       await this.save();
//         return token;
//     }catch(err){
//         console.log(err);
//     }
// }
const Hospital=mongoose.model('HOSPITALS',hospitalSchema);
module.exports=Hospital;