import controller from "../controllers/actionController.js"
import express from 'express'
const router = express.Router()

router.get('/take', controller.take)

export default router;