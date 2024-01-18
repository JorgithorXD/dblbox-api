import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authMiddleware from './services/middelware.js'
import unitRoutes from './routes/unitRoutes.js'
import unitRoutesEs from './routes/unitRoutesEs.js'
import unitRoutesJp from './routes/unitRoutesJp.js'
import unitRoutesFr from './routes/unitRoutesFr.js'
import dataRoutes from './routes/dataRoutes.js'
import formDataRoutes from './routes/formDataRoutes.js'
import formUnitRoutes from './routes/formUnitRoutes.js'
import loginRoutes from './routes/loginRoutes.js'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const app = express()
dotenv.config()

const PORT = process.env.PORT ?? 4121
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.listen(PORT, () => {
    console.log('server listening on https://localhost:' + PORT)
})

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(join(__dirname, '/public')))
app.use((req, res, next) => {
    if (req.path === '/') {
        return res.redirect('/home');
    }
    next()
})

app.get('/home', (req, res) => {
    res.sendFile(join(__dirname, './public/index.html'))
})

app.use('/', loginRoutes)
app.use('/en/unit', unitRoutes)
app.use('/es/unit', unitRoutesEs)
app.use('/jp/unit', unitRoutesJp)
app.use('/fr/unit', unitRoutesFr)
app.use('/data', dataRoutes)
app.use('/form', authMiddleware, formDataRoutes)
app.use('/form', authMiddleware, formUnitRoutes) 