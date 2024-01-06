import express from 'express'
import unitRoutes from './routes/unitRoutes.js'
import unitRoutesEs from './routes/unitRoutesEs.js'
import unitRoutesJp from './routes/unitRoutesJp.js'
import dataRoutes from './routes/dataRoutes.js'
import formRoutes from './routes/formRoutes.js'
import formPostRoutes from './routes/formPostRoutes.js'
import formUpdateRoutes from './routes/formUpdateRoutes.js'
import formDeleteRoutes from  './routes/formDeleteRoutes.js'

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

app.use('/en/unit', unitRoutes)
app.use('/es/unit', unitRoutesEs)
app.use('/jp/unit', unitRoutesJp)
app.use('/data', dataRoutes)
app.use('/form', formRoutes)
app.use('/form/post', formPostRoutes)
app.use('/form/update', formUpdateRoutes)
app.use('/form/delete', formDeleteRoutes)