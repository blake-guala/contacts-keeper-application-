import express  from "express"
import { body, validationResult } from 'express-validator'
import jwt from "jsonwebtoken"
import config from "config"
import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/', auth ,async (req, res) => {
    const { id } = req.user

    try {
        const user = await User.findById(id).select('-password')
        return res.json(user) 
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({msg: 'Server error'})
    }
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
            return res.status(400).json({ msg: 'invalid email or email not registered' })
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
        console.error(error.message);
        return res.status(500).json({ msg: 'Server error request' })
    }
})

export default router