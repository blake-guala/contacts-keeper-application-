import express from 'express'
import User from '../models/User.js'
import { body, validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
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

            const salt = await bcrypt.genSalt(10)

            user.password = await bcrypt.hash(password, salt)

            res.send('user registered')

            user.save()
        }
    } catch (error) {
        console.error(error.message);
        return res.status(400).json({ error: 'bad request'})
    }



})

export default router