import express from 'express'
import { body, validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from 'config'
import User from '../models/User.js'
const router = express.Router()



router.post('/', [
    body('firstName', 'First name is required').not().isEmpty(),
    body('lastName', 'Last name is required').not().isEmpty(),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password should be 6 or more characters').isLength({ min: 6 })
] ,async(req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    } 
    
    const { firstName, lastName, email, password } = req.body

    try {
        let user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({ msg: 'The user already exists, login.' })
        } else {
            user = new User({
                firstName,
                lastName,
                email,
                password
            })

            const {genSalt, hash} = bcrypt

            const salt = await genSalt(10)

            user.password = await hash(password, salt)

            const payload = {
                user: {
                    id: user.id
                }
            }

            const { sign } = jwt
            const secret = config.get('jwtSecret')

            sign(payload, secret, {
                expiresIn: 360000
            }, (err, token) => {
                if(err) throw err
                return res.json({ token })
            })

            await user.save()


        }
    } catch (error) {
        console.error(error.message);
        return res.status(400).json({ error: 'bad request'})
    }



})

export default router