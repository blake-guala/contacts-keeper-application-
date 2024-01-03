import express from 'express'
import User from '../models/User.js'
import { body, validationResult } from 'express-validator'


const router = express.Router()



router.post('/', [
    body('name', 'Name is required').not().isEmpty(),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password should be 6 or more characters').isLength({ min: 6 })
] ,(req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    res.send('success')
})

export default router