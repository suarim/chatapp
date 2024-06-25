import express from "express"
import { cook, loginuser, logoutuser, signupuser } from "../controllers/auth.controller.js"
const router = express.Router()
router.post('/login',loginuser)
router.post('/signup',signupuser)
router.post('/logout',logoutuser)
router.post('/cookie',cook)
export default router