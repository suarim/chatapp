import User from "../models/user.model.js"

export const getuserforsidebar = async (req,res)=>{
    try {
        const loggedid = req.user._id
        const alluser = await User.find({_id:{$ne:loggedid}})
        res.status(200).json({alluser})
    } catch (error) {
        res.status(500).json({"error":"internal server error"})
    }
}