import { Schema, model } from 'mongoose'

const ContactSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    phone: {
        type: String,
        required: true
    },
    firstName: {
        type: 'string',
        required: true
    },
    lastName: {
        type: 'string',
    },
    email: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'Personal'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default model('contact', ContactSchema)