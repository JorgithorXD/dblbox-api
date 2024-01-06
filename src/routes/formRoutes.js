import express  from "express"

const router = express.Router()

router.get('/tags', (req, res)=>{
    res.send('<h1>Formulario TAGs</h1>')
})

router.get('/chapters', (req, res)=>{
    res.send('<h1>Formulario CHAPTERs</h1>')
})

router.get('/colors', (req, res)=>{
    res.send('<h1>Formulario COLORs</h1>')
})

router.get('/raritys', (req, res)=>{
    res.send('<h1>Formulario RARITYs</h1>')
})

router.get('/types', (req, res)=>{
    res.send('<h1>Formulario TYPEs</h1>')
})

router.put('update/tags', (req, res)=>{
    res.send('<h1>Formulario para modificar TAGs</h1>')
})

router.put('update/chapters', (req, res)=>{
    res.send('<h1>Formulario para modificar CHAPTERs</h1>')
})

router.put('update/colors', (req, res)=>{
    res.send('<h1>Formulario para modificar COLORs</h1>')
})

router.put('update/raritys', (req, res)=>{
    res.send('<h1>Formulario para modificar RARITYs</h1>')
})

router.put('update/types', (req, res)=>{
    res.send('<h1>Formulario para modificar TYPEs</h1>')
})

router.post('post/tags', (req, res)=>{
    res.send('<h1>Formulario para subir TAGs</h1>')
})

router.post('post/chapters', (req, res)=>{
    res.send('<h1>Formulario para subir CHAPTERs</h1>')
})

router.post('post/colors', (req, res)=>{
    res.send('<h1>Formulario para subir COLORs</h1>')
})

router.post('post/raritys', (req, res)=>{
    res.send('<h1>Formulario para subir RARITYs</h1>')
})

router.post('post/types', (req, res)=>{
    res.send('<h1>Formulario para subir TYPEs</h1>')
})

router.delete('delete/tags', (req, res)=>{
    res.send('<h1>Formulario para eliminar TAGs</h1>')
})

router.delete('delete/chapters', (req, res)=>{
    res.send('<h1>Formulario para eliminar CHAPTERs</h1>')
})

router.delete('delete/colors', (req, res)=>{
    res.send('<h1>Formulario para eliminar COLORs</h1>')
})

router.delete('delete/raritys', (req, res)=>{
    res.send('<h1>Formulario para eliminar RARITYs</h1>')
})

router.delete('delete/types', (req, res)=>{
    res.send('<h1>Formulario para eliminar TYPEs</h1>')
})

export default router