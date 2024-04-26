import * as userController from './controller/user.js'
import { Router } from "express";
const router = Router()

router.get('/', (req, res,next) => { res.json({ message: "Users API" })})
router.post("/signup",userController.signup)
router.get("/signin",userController.signin)
router.put("/update/:_id",userController.updateUser)
router.delete("/delete/:_id",userController.deleteUser)
router.get("/search1",userController.searchUser)
router.get("/search2",userController.searchAge)
router.get("/getUsers",userController.getAllUsers)

export default router