import express from "express"
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import jwt from "jsonwebtoken"
import { supabase } from "../database/supabase.js"
import { secretKey } from "../services/secretKey.js"

const router = express.Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

router.get('/login', (req, res) => {
    const token = req.cookies.token
    if (token) {
        return res.redirect('/home')
    }
    res.sendFile(join(__dirname, "../public/auth/login.html"))
})

router.post('/auth/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const result = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })
        if (result.data.user && result.data.session) {
            const token = jwt.sign({ email, id: result.data.user.id }, secretKey, { expiresIn: '2h' })

            res.cookie('token', token, { httpOnly: true })

            var redirectPath = req.cookies.redirectPath
            console.log(redirectPath)
            redirectPath = (redirectPath === '' || typeof redirectPath === 'undefined') ? '/home' : redirectPath;
            console.log(redirectPath)
            res.clearCookie('redirectPath')
            res.redirect(redirectPath)
        } else {
            res.redirect('/login')
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error al iniciar sesión' })
    }
})

export default router