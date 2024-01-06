import express  from "express"

const router = express.Router()

router.get('/tags', (req, res)=>{
    res.send('<h1>Formulario para subir TAGs</h1>')
})

router.get('/chapters', (req, res)=>{
    res.send('<h1>Formulario para subir CHAPTERs</h1>')
})

router.get('/colors', (req, res)=>{
    res.send('<h1>Formulario para subir COLORs</h1>')
})

router.get('/raritys', (req, res)=>{
    res.send('<h1>Formulario para subir RARITYs</h1>')
})

router.get('/types', (req, res)=>{
    res.send('<h1>Formulario para subir TYPEs</h1>')
})

export default router