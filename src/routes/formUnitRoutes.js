import express from "express"
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const router = express.Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

router.use(express.urlencoded({ extended: true }));

router.get('/unit', (req, res) => {
    res.sendFile(join(__dirname, '../public/forms/unitForm.html'))
})

export default router