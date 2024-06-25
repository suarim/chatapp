import mongoose from "mongoose";
const connecttodb = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("connected")
    } catch (err) {
        console.log(err.messages)
    }
}
export default connecttodb