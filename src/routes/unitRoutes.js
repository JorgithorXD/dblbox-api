import express  from "express"

const router = express.Router()

router.get('/all', (req, res)=>{
    res.send('<h1>TODOS LOS PERSONAJEs</h1>')
})

router.get('/:id', (req, res)=>{
    res.send('<h1>Personaje de la id</h1>')
})

export default router