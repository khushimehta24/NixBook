import express from 'express'
import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/user.js'
import { verifyAdmin, verifyUser, verifyToken } from '../utils/verifyToken.js'

const router = express.Router()

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("login successful!")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("You can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello Admin!")
// })


// UPDATE
router.put("/:id", verifyUser, updateUser)

// DELETE
router.delete("/:id", verifyUser, deleteUser)

// GET
router.get("/:id", verifyUser, getUser)

// GET ALL
router.get("/", verifyAdmin, getAllUser)

export default router