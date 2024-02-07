import express from 'express'
const router = express.Router()

router.get('/take', (req, res) => {
  res.send({ took: 'something that you took' })
})

export default router;