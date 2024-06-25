import express from "express"
import { protectRoute } from "../middleware/protectRoute.js"
import { getuserforsidebar } from "../controllers/user.controller.js"
const userRoutes = express.Router()
userRoutes.get('/',protectRoute,getuserforsidebar)
export default userRoutes