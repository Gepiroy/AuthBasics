import express from 'express'
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.post('/login', (req, res) => {
  res.send({ token: 'token-will-be-here' })
})

router.post('/register', (req, res) => {
  
  res.send({ token: 'token-will-be-here' })
})

export default router;