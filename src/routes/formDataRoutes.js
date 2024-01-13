import express from "express"
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const router = express.Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

router.use(express.urlencoded({ extended: true }));

router.get('/tags', (req, res) => {
    res.sendFile(join(__dirname, '../public/forms/tagForm.html'))
})

router.get('/chapters', (req, res) => {
    res.send('<h1>Formulario CHAPTERs</h1>')
})

router.get('/colors', (req, res) => {
    res.send('<h1>Formulario COLORs</h1>')
})

router.get('/raritys', (req, res) => {
    res.send('<h1>Formulario RARITYs</h1>')
})

router.get('/types', (req, res) => {
    res.send('<h1>Formulario TYPEs</h1>')
})

router.put('/update/tags', (req, res) => {
    res.send('<h1>Formulario para modificar TAGs</h1>')
})

router.put('/update/chapters', (req, res) => {
    res.send('<h1>Formulario para modificar CHAPTERs</h1>')
})

router.put('/update/colors', (req, res) => {
    res.send('<h1>Formulario para modificar COLORs</h1>')
})

router.put('/update/raritys', (req, res) => {
    res.send('<h1>Formulario para modificar RARITYs</h1>')
})

router.put('/update/types', (req, res) => {
    res.send('<h1>Formulario para modificar TYPEs</h1>')
})

router.post('/post/tags', (req, res) => {
    console.log(req.body)
    const tagName = req.body.tagName
    console.log('El tag es: ' + tagName)
    res.send('Datos recibidos exitosamente');
})

router.post('/post/chapters', (req, res) => {
    res.send('<h1>Formulario para subir CHAPTERs</h1>')
})

router.post('/post/colors', (req, res) => {
    res.send('<h1>Formulario para subir COLORs</h1>')
})

router.post('/post/raritys', (req, res) => {
    res.send('<h1>Formulario para subir RARITYs</h1>')
})

router.post('/post/types', (req, res) => {
    res.send('<h1>Formulario para subir TYPEs</h1>')
})

router.delete('/delete/tags', (req, res) => {
    res.send('<h1>Formulario para eliminar TAGs</h1>')
})

router.delete('/delete/chapters', (req, res) => {
    res.send('<h1>Formulario para eliminar CHAPTERs</h1>')
})

router.delete('/delete/colors', (req, res) => {
    res.send('<h1>Formulario para eliminar COLORs</h1>')
})

router.delete('/delete/raritys', (req, res) => {
    res.send('<h1>Formulario para eliminar RARITYs</h1>')
})

router.delete('/delete/types', (req, res) => {
    res.send('<h1>Formulario para eliminar TYPEs</h1>')
})

export default router