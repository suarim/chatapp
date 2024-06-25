import mongoose from "mongoose";
const messageschema = new mongoose.Schema({
    senderid:{type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true},
    receiverid:{type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true}
    ,
    message:{
        type:String,
        required:true
    }
},{timestamps:true})
const messagemodel = mongoose.model("Message",messageschema)
export default messagemodel