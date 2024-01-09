import express from "express"
import { getData } from "../controllers/getData.js"

const router = express.Router()

router.get('/tags', async (req, res) => {
  try {
    const data = await getData.getAll('data_tags')
    res.status(200).json(data)
  } catch (error) {
    console.error('Error al obtener datos de Supabase:', error);
    res.status(500).json({ error: 'Error al obtener datos de Supabase' });
  }
})

router.get('/tags/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getData.getById('data_tags', 'tag_id', id)
    res.status(200).json(data)
  } catch (error) {
    console.error('Error al obtener datos de Supabase:', error);
    res.status(500).json({ error: 'Error al obtener datos de Supabase' });
  }
})

router.get('/chapters', async (req, res) => {
  try {
    const data = await getData.getAll('data_chapters')
    res.status(200).json(data)
  } catch (error) {
    console.error('Error al obtener datos de Supabase:', error);
    res.status(500).json({ error: 'Error al obtener datos de Supabase' });
  }
})

router.get('/chapters/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getData.getById('data_chapters', 'chapter_id', id)
    res.status(200).json(data)
  } catch (error) {
    console.error('Error al obtener datos de Supabase:', error);
    res.status(500).json({ error: 'Error al obtener datos de Supabase' });
  }
})

router.get('/colors', async (req, res) => {
  try {
    const data = await getData.getAll('data_colors')
    res.status(200).json(data)
  } catch (error) {
    console.error('Error al obtener datos de Supabase:', error);
    res.status(500).json({ error: 'Error al obtener datos de Supabase' });
  }
})

router.get('/colors/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getData.getById('data_colors', 'color_id', id)
    res.status(200).json(data)
  } catch (error) {
    console.error('Error al obtener datos de Supabase:', error);
    res.status(500).json({ error: 'Error al obtener datos de Supabase' });
  }
})

router.get('/raritys', async (req, res) => {
  try {
    const data = await getData.getAll('data_rarity')
    res.status(200).json(data)
  } catch (error) {
    console.error('Error al obtener datos de Supabase:', error);
    res.status(500).json({ error: 'Error al obtener datos de Supabase' });
  }
})

router.get('/raritys/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getData.getById('data_rarity', 'rarity_id', id)
    res.status(200).json(data)
  } catch (error) {
    console.error('Error al obtener datos de Supabase:', error);
    res.status(500).json({ error: 'Error al obtener datos de Supabase' });
  }
})

router.get('/types', async (req, res) => {
  try {
    const data = await getData.getAll('data_type')
    res.status(200).json(data)
  } catch (error) {
    console.error('Error al obtener datos de Supabase:', error);
    res.status(500).json({ error: 'Error al obtener datos de Supabase' });
  }
})


router.get('/types/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getData.getById('data_type', 'type_id', id)
    res.status(200).json(data)
  } catch (error) {
    console.error('Error al obtener datos de Supabase:', error);
    res.status(500).json({ error: 'Error al obtener datos de Supabase' });
  }
})

export default router