import express from "express"
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { insertBasicUnit } from "../controllers/postTo.js"
import { unitModel } from "../models/unitModels.js"

const router = express.Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

router.get('/unit', (req, res) => {
    res.sendFile(join(__dirname, '../public/forms/unitForm.html'))
})

router.post('/post/unit', async (req, res) => {
    try {
        unitModel.basic.id = req.body.unit_id
        unitModel.basic.unit_name.push(req.body.unit_name)
        if (req.body.second_unit_name != "" && req.body.second_unit_name != undefined && req.body.second_unit_name != null) {
            unitModel.basic.unit_name.push(req.body.second_unit_name)
        }
        unitModel.basic.unit_rarity = req.body.unit_rarity
        unitModel.basic.unit_type = req.body.unit_type
        unitModel.basic.unit_color = req.body.unit_color
        unitModel.basic.unit_chapter = req.body.unit_chapter
        unitModel.basic.unit_tag = req.body.selected_tags.match(/\d+/g)
        unitModel.basic.tag_switch = req.body.tag_switch
        unitModel.basic.revival = req.body.revival
        unitModel.basic.transformable = req.body.transformable
        unitModel.basic.zenkai = req.body.zenkai
        unitModel.basic.is_ll = req.body.legends_limited
        unitModel.basic.awaken = req.body.awaken

        if (!Array.isArray(unitModel.basic.unit_color)) {
            unitModel.basic.unit_color = [unitModel.basic.unit_color];
        }
        if (!Array.isArray(unitModel.basic.unit_tag)) {
            unitModel.basic.unit_tag = [unitModel.basic.unit_tag];
        }

        unitModel.abilities.id = req.body.unit_id
        unitModel.abilities.main_ability = req.body.main.split(',').map(m => m.trim())
        unitModel.abilities.ultra_ability = req.body.ultra.split(',').map(m => m.trim())
        unitModel.abilities.z_limited_ability = req.body.z_limited.split(',').map(m => m.trim())
        unitModel.abilities.z_ability = req.body.z.split(',').map(m => m.trim())
        unitModel.abilities.unique_ability_1 = req.body.unique_1.split(',').map(m => m.trim())
        unitModel.abilities.unique_ability_2 = req.body.unique_2.split(',').map(m => m.trim())

        unitModel.arts.id = req.body.unit_id
        unitModel.arts.strike = req.body.strike.split(',').map(m => m.trim())
        unitModel.arts.blast = req.body.blast.split(',').map(m => m.trim())
        unitModel.arts.special_move = req.body.special_move.split(',').map(m => m.trim())
        unitModel.arts.special_art = req.body.special_art.split(',').map(m => m.trim())
        unitModel.arts.ultimate = req.body.awaken.split(',').map(m => m.trim())
        unitModel.arts.awaken = req.body.awaken.split(',').map(m => m.trim())

        await insertBasicUnit('unit_basic', unitModel.basic)
        await insertBasicUnit('unit_abilities', unitModel.abilities)
        await insertBasicUnit('unit_arts', unitModel.arts)

        res.send('Datos recibidos correctamente.')
    } catch (error) {
        console.error('Error en el manejo de la solicitud:', error);
        res.status(500).send('Error interno del servidor');
    }

})

export default router