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
        unitModel.arts.ultimate = req.body.ultimate.split(',').map(m => m.trim())
        unitModel.arts.awaken = req.body.awaken_card.split(',').map(m => m.trim())

        unitModel.unit_zenkai.id = req.body.unit_id
        unitModel.unit_zenkai.main_ability = req.body.zenkai_main.split(',').map(m => m.trim())
        unitModel.unit_zenkai.unique_ability_1 = req.body.zenkai_unique_1.split(',').map(m => m.trim())
        unitModel.unit_zenkai.unique_ability_2 = req.body.zenkai_unique_2.split(',').map(m => m.trim())
        unitModel.unit_zenkai.unique_ability_3 = req.body.zenkai_unique_3.split(',').map(m => m.trim())
        unitModel.unit_zenkai.unique_ability_4 = req.body.zenkai_unique_4.split(',').map(m => m.trim())
        unitModel.unit_zenkai.zenkai_ability = req.body.zenkai_ability.split(',').map(m => m.trim())

        unitModel.arts_zenkai.id = req.body.unit_id
        unitModel.arts_zenkai.strike = req.body.zenkai_strike.split(',').map(m => m.trim())
        unitModel.arts_zenkai.blast = req.body.zenkai_blast.split(',').map(m => m.trim())
        unitModel.arts_zenkai.special_move = req.body.zenkai_special_move.split(',').map(m => m.trim())
        unitModel.arts_zenkai.special_art = req.body.zenkai_special_art.split(',').map(m => m.trim())
        unitModel.arts_zenkai.ultimate = req.body.zenkai_ultimate.split(',').map(m => m.trim())
        unitModel.arts_zenkai.awaken = req.body.zenkai_awaken_card.split(',').map(m => m.trim())

        await insertBasicUnit('unit_basic', unitModel.basic)
        await insertBasicUnit('unit_abilities', unitModel.abilities)
        await insertBasicUnit('unit_arts', unitModel.arts)
        await insertBasicUnit('unit_zenkai', unitModel.unit_zenkai)
        await insertBasicUnit('unit_arts_zenkai', unitModel.arts_zenkai)

        res.send('Datos recibidos correctamente.')
    } catch (error) {
        console.error('Error en el manejo de la solicitud:', error);
        res.status(500).send('Error interno del servidor');
    }

})

export default router