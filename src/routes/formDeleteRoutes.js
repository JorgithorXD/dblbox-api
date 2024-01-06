import express  from "express"

const router = express.Router()

router.delete('/tags', (req, res)=>{
    res.send('<h1>Formulario para eliminar TAGs</h1>')
})

router.delete('/chapters', (req, res)=>{
    res.send('<h1>Formulario para eliminar CHAPTERs</h1>')
})

router.delete('/colors', (req, res)=>{
    res.send('<h1>Formulario para eliminar COLORs</h1>')
})

router.delete('/raritys', (req, res)=>{
    res.send('<h1>Formulario para eliminar RARITYs</h1>')
})

router.delete('/types', (req, res)=>{
    res.send('<h1>Formulario para eliminar TYPEs</h1>')
})

export default router