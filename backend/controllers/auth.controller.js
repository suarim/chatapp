import User from  '../models/user.model.js'
import bcrypt from "bcryptjs"
import  generatetoken  from '../utils/generatetoken.js'
export const signupuser=async (req,res)=>{
    try {
        const {fullname,username,password,confirmpassword,gender}= req.body
        console.log(fullname)
        if(password!==confirmpassword){
            return res.status(400).json({err:"passwords do not match"})
        }
        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({err:"already exists"})
        }
        const boypic=`https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlpic=`https://avatar.iran.liara.run/public/girl?username=${username}`
        const hashpass = await bcrypt.hash(password,12)
        const newuser = await User.create({
            fullname,
            username,
            password:hashpass,
            gender,
            profilePic:gender==="male"?boypic:girlpic
        })
        await newuser.save()
        await generatetoken(newuser._id,res)
        res.status(200).json({
            _id:newuser._id,
            fullname:newuser.fullname,
            username:newuser.username,
            profilePic:newuser.profilePic

        })
    } catch (error) {
        res.status(500).json({error:"internal server error"})
    }
}
export const loginuser=async (req,res)=>{
   try {
    const {username,password} = req.body
   const user = await User.findOne({username})
    console.log(user)
   const match = await bcrypt.compare(password,user.password||"")
   console.log(match)
   if(!user||!match){
    return res.status(500).json({error:"invalid entries"})
   }
   await generatetoken(user._id,res)
   res.status(200).json({
    _id:user._id,
    fullname:user.fullname,
    username:user.username,
    profilePic:user.profilePic

})
   } catch (error) {
    res.status(500).json({error:"internal server error"})
   }
   
}
export const logoutuser=async (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({"message":"logged out succesfully"})
    } catch (error) {
        res.status(500).json({error:"internal server error"})
    }
}
export const cook = async(req,res)=>{
    console.log(req.cookies)
    res.json(req.cookies)
}