import express  from "express"
import { supabase } from "../database/supabase.js"

const router = express.Router()

router.get('/tags', async (req, res)=>{
    try {
        const { data, error } = await supabase.from('data_tags').select('*');
    
        if (error) {
          throw error;
        }
    
        res.status(200).json(data);
      } catch (error) {
        console.error('Error al obtener datos de Supabase:', error);
        res.status(500).json({ error: 'Error al obtener datos de Supabase' });
      }
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