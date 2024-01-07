import express  from "express"

const router = express.Router()

router.get('/all', (req, res)=>{
    res.send('<h1>All characters in franchese</h1>')
})

router.get('/:id', (req, res)=>{
    res.send('<h1>Specific ID character in franchese</h1>')
})

export default router