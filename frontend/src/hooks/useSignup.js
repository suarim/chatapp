import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../../context/AuthContext'

const useSignup = () => {
    const {authUser,setAuthUser}=useAuthContext()
  const [loading,setLoading] = useState(false)
  const signup=async ({fullname,username,password,confirmpassword,gender})=>{
            const success = handleinputerror({fullname,username,password,confirmpassword,gender})
            if(!success)return 
            setLoading(true)
            try {
                const res = await fetch("/api/auth/signup",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({fullname,username,password,confirmpassword,gender})
                })
                const data = await res.json()
                if(data.error){
                    throw new Error(data.error)
                }
                localStorage.setItem("chat-user",JSON.stringify(data))
                setAuthUser(data)
                console.log(data)
            } catch (error) {
                toast.error(error.message)
            }
            finally{
                setLoading(false)
            }
  }
  return {loading,signup}
}

export default useSignup
const handleinputerror=({fullname,username,password,confirmpassword,gender})=>{
    if(!fullname || !username || !password || !confirmpassword || !gender){
        toast.error("Please fill all fields")
        return false
    }
    if(password!==confirmpassword){
        toast.error("Passwords do not match")
        return false
    }
    return true
}
