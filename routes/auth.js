const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('get registered user')
})

router.post('/', (req, res) => {
    res.send('login user with jwt')
})

module.exports = router