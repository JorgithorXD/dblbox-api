import express from "express"
import { getData } from "../controllers/getData.js"

const router = express.Router()

router.get('/all', async (req, res) => {
  try {
    const data = await getData.getAll('unit_basic')
    res.status(200).json(data)
  } catch (error) {
    console.error('Error al obtener datos de Supabase:', error);
    res.status(500).json({ error: 'Error al obtener datos de Supabase' });
  }
})

router.get('/:id', (req, res) => {
  res.send('<h1>Specific ID character</h1>')
})

export default router