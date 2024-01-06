import express  from "express"

const router = express.Router()

router.get('/tags', (req, res)=>{
    res.send('<h1>TODOS LOS TAGs</h1>')
})

router.get('/chapters', (req, res)=>{
    res.send('<h1>TODOS LOS CHAPTERs</h1>')
})

router.get('/colors', (req, res)=>{
    res.send('<h1>TODOS LOS COLORs</h1>')
})

router.get('/raritys', (req, res)=>{
    res.send('<h1>TODOS LOS RARITYs</h1>')
})

router.get('/types', (req, res)=>{
    res.send('<h1>TODOS LOS TYPESs</h1>')
})

export default router