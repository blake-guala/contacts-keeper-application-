import express from 'express'
import User from '../models/User.js'
import { body, validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
const router = express.Router()



router.post('/', [
    body('firstName', 'Name is required').not().isEmpty(),
    body('lastName', 'Name is required').not().isEmpty(),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password should be 6 or more characters').isLength({ min: 6 })
] ,async(req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() })
    }


    const { firstName, lastName, email, password } = req.body

    try {
        let user = await User.findOne({ email })

        if (user) {
            res.status(400).send({ msg: 'user already exists, logging.' })
        } else {
            user = new User({
                firstName,
                lastName,
                email,
                password
            })

            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(password, salt)


            await user.save()
            res.send('user saved')
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send({ msg: 'there was an error' })
    }
})

export default router