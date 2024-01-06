import express  from "express"

const router = express.Router()

router.get('/all', (req, res)=>{
    res.send('<h1>Todos los personajes pero en japones</h1>')
})

router.get('/:id', (req, res)=>{
    res.send('<h1>Personaje de una id especifica pero en japones</h1>')
})

export default router