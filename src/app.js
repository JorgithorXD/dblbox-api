import express from 'express'
import dotenv from 'dotenv'
import unitRoutes from './routes/unitRoutes.js'
import unitRoutesEs from './routes/unitRoutesEs.js'
import unitRoutesJp from './routes/unitRoutesJp.js'
import unitRoutesFr from './routes/unitRoutesFr.js'
import dataRoutes from './routes/dataRoutes.js'
import formDataRoutes from './routes/formDataRoutes.js'
import formUnitRoutes from './routes/formUnitRoutes.js'

const app = express()
dotenv.config()

const PORT = process.env.PORT ?? 4121

app.listen(PORT, () => {
    console.log("server listening on https://localhost:" + PORT);
})

app.use((req, res, next) => {
    if (req.url === '/') {
        res.redirect(301, '/home')
    } else {
        next()
    }
})

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'))

app.get('/home', (req, res) => {
    res.send('<h1>Pagina principal</h1>')
})

app.use('/en/unit', unitRoutes)
app.use('/es/unit', unitRoutesEs)
app.use('/jp/unit', unitRoutesJp)
app.use('/fr/unit', unitRoutesFr)
app.use('/data', dataRoutes)
app.use('/form', formDataRoutes)
app.use('/form', formUnitRoutes)