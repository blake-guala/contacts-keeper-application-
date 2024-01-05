import express  from "express"
import { body, validationResult } from 'express-validator'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('get registered user')
})

router.post('/', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password is required').exists()
] ,(req, res) => {
    res.send('login user with jwt')
})

export default router