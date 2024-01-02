const express = require('express')

const router = express.Router()

router.post('/', (req, res) => {
    res.send('add contacts')
})

router.get('/', (req, res) => {
    res.send('get contacts')
})

router.put('/:id', (req, res) => {
    res.send('edit contacts')
})

router.delete('/:id', (req, res) => {
    res.send('delete contacts')
})

module.exports = router