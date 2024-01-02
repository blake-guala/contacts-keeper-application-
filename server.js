import express, { json } from 'express'
import connectMongoDB from './config/db.js'
import users from './routes/users.js'
import auth from './routes/auth.js'
import contacts from './routes/contacts.js'

connectMongoDB()

//init middleware 
const jsMiddleware = json({ extended: false })


const app = express()

app.use('/api/users',jsMiddleware ,users)
app.use('/api/auth', jsMiddleware,auth)
app.use('/api/contacts',jsMiddleware, contacts)

const PORT = process.env.PORT || 6000

app.listen(PORT, () => console.log(`Server connected on port ${PORT}`))