import express  from "express"
import { body, validationResult } from 'express-validator'
import jwt from "jsonwebtoken"
import config from "config"
import User from "../models/User.js"
import bcrypt from 'bcryptjs'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('get registered user')
})

router.post('/', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password is required').exists()
] ,async (req, res) => {
    // res.send('login user with jwt')
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ msg: 'invalid Email or Email not registered' })
        } 

        const compPass = await bcrypt.compare(password, user.password)

        if (!compPass) {
            return res.status(400).json({ msg: 'invalid password' })
        }

        const secret = config.get('jwtSecret')
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, secret, {
            expiresIn: 360000
        }, (err, token) => {
            if (err) throw err
            return res.json({ token })
        })



    } catch (error) {
        console.error(error.msg);
        return 
    }
})

export default router