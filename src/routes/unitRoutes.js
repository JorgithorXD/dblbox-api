import express  from "express"

const router = express.Router()

router.get('/all', (req, res)=>{
    res.send('<h1>All characters</h1>')
})

router.get('/:id', (req, res)=>{
    res.send('<h1>Specific ID character</h1>')
})

export default router