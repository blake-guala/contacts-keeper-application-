import  express from "express"

const router = express.Router()

router.post('/', (req, res) => {
    res.send(req.body)
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

export default router