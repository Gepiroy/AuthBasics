import controller from "../controllers/authController.js"
import express from 'express'
const router = express.Router()

router.post('/login', controller.login)

router.post('/register', controller.register)

export default router;