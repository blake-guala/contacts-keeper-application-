import express from 'express'
import User from '../models/User.js'


const router = express.Router()



router.post('/', (req, res) => {
    res.send(req.body)
})

export default router