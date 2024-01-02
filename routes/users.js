const express = require('express')

const router = express.Router()

router.post('/', (req, res) => {
    res.send('login or register user')
})

module.exports = router