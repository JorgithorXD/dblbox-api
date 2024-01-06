import express from 'express'
import unitRoutes from './routes/unitRoutes.js'

const app = express()
const PORT = process.env.PORT ?? 4121

app.listen(PORT, () => {
    console.log("server listening on https://localhost:" + PORT);
})

app.get('/', (req, res) => {
    res.send('<h1>HOLA</h1>')
})

app.use('/unit', unitRoutes)