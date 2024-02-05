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

router.put('/:id', auth, async(req, res) => {
    const {firstName, lastName, phone, type, email} = req.body

    // since its an update you build a contact object based on the fields submitted
    const contactField = {}
    if(firstName) contactField.firstName = firstName
    if(lastName) contactField.lastName = lastName
    if(phone) contactField.phone = phone
    if(type) contactField.type = type
    if(email) contactField.email = email

    try {
        let contact = await Contact.findById(req.params.id)
        if (!contact ) return res.status(404).json({ msg: 'Contact not found' })

        //make sure user owns contacts
        if (contact.user !== req.user.id) return res.status(401).json({ msg: 'access denied unauthorized user' })

        contact = await Contact.findByIdAndUpdate(req.params.id, { $set: contactField }, { new: true })
        
        return res.json(contact)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ msg: 'Server error' })
    }
})

router.delete('/:id', auth, async(req, res) => {

    try {
        let contact = await Contact.findById(req.params.id)

        if (!contact) return res.status(404).json({ msg: 'Contact not found' })

        if (contact.user !== req.user.id) return res.status(401).json({ msg: 'access denied' })

        await Contact.findByIdAndDelete(req.params.id)

        return res.json('contact deleted')
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ msg: 'Server error' })
    }
})

export default router