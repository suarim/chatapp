import jwt from "jsonwebtoken"
const generatetoken=async (userid,res)=>{
    console.log(userid)
    const token = await jwt.sign({userid},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })
    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000,
        httpOnly:true,
        sameSite:"strict",
        secure:process.env.NODE_ENV!=="development"
        
    })
    console.log(token) 
}
export default generatetoken