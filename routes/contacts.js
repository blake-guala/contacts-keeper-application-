import  express from "express"
import auth from '../middleware/auth.js'
import Contact from "../models/Contact.js"
import { body, validationResult } from "express-validator"

const router = express.Router()

router.post('/',[auth, [
    body('firstName', 'Please add a first name').not().isEmpty(),
    body('email', 'Please add an email').isEmail(),
    body('phone', 'add a number please').not().isEmpty()
]], async(req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const { firstName, lastName, type, email, phone } = req.body
    const { id } = req.user

    try {

        let contact = new Contact({
            email,
            phone,
            firstName,
            lastName,
            type,
            user: id
        })

        await contact.save()

        return res.json(contact)
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ msg: 'Server error' })
    }

})

router.get('/', auth, async(req, res) => {
    const { id } = req.user

    try {
        const contacts = await Contact.find({ user: id }).sort({ date: -1 })
        return res.json(contacts)
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ msg: 'Server error' })
    }
})

router.put('/:id', (req, res) => {
    res.send('edit contacts')
})

router.delete('/:id', (req, res) => {
    res.send('delete contacts')
})

export default router