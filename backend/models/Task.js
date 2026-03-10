const mongoose=require("mongoose")
const taskSchema=new mongoose.Schema({
    title:String,
    descroption:String,
    status:{
        type:String,
        default:"pending"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,ref:"User"
    }
})