import express from 'express'
import unitRoutes from './routes/unitRoutes.js'

const app = express()
const PORT = process.env.PORT ?? 4121

app.listen(PORT, () => {
    console.log("server listening on https://localhost:" + PORT);
})

app.use((req, res, next) => {
    if(req.url === '/') {
        res.redirect(301, '/home')
    } else {
        next()
    }
})

app.get('/home', (req, res) => {
    res.send('<h1>Pagina principal</h1>')
})

app.use('/unit', unitRoutes)
