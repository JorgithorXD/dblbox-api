import express from "express"
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { insertBasicUnit } from "../controllers/postTo.js"
import { deleteUnit } from "../controllers/delData.js"
import { models } from "../models/unitModels.js"
import _ from 'lodash'

const router = express.Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

router.get('/unit', (req, res) => {
    res.sendFile(join(__dirname, '../public/forms/unitForm.html'))
})

router.delete('/delete/unit', async (req, res) => {
    try {
        const { id } = req.body

        await deleteUnit('unit_basic', id)
        await deleteUnit('unit_abilities', id)
        await deleteUnit('unit_arts', id)
        await deleteUnit('unit_arts_zenkai', id)
        await deleteUnit('unit_zenkai', id)



    } catch (error) {
        console.log(error);
    }
})

router.post('/post/unit', async (req, res) => {
    try {
        const unitModel = {
            _basic: _.cloneDeep(models.basic),
            _abilities: _.cloneDeep(models.abilities),
            _arts: _.cloneDeep(models.arts),
            _arts_zenkai: _.cloneDeep(models.arts_zenkai),
            _unit_zenkai: _.cloneDeep(models.unit_zenkai)
        }

        unitModel._basic.id = req.body.unit_id
        unitModel._basic.unit_name.push(req.body.unit_name)
        if (req.body.second_unit_name != "" && req.body.second_unit_name != undefined && req.body.second_unit_name != null) {
            unitModel._basic.unit_name.push(req.body.second_unit_name)
        }
        unitModel._basic.unit_rarity = req.body.unit_rarity
        unitModel._basic.unit_type = req.body.unit_type
        unitModel._basic.unit_color.push(req.body.unit_color)
        if (req.body.second_unit_color != "" && req.body.second_unit_color != undefined && req.body.second_unit_color != null) {
            unitModel._basic.unit_color.push(req.body.second_unit_color)
        }
        unitModel._basic.unit_chapter = req.body.unit_chapter
        unitModel._basic.unit_tag = req.body.selected_tags.match(/\d+/g)
        unitModel._basic.tag_switch = req.body.tag_switch
        unitModel._basic.revival = req.body.revival
        unitModel._basic.transformable = req.body.transformable
        unitModel._basic.zenkai = req.body.zenkai
        unitModel._basic.is_ll = req.body.legends_limited
        unitModel._basic.awaken = req.body.awaken
        unitModel._basic.unit_img.push(req.body.unit_images.split(',').map(m => m.trim()))

        if (!Array.isArray(unitModel._basic.unit_tag)) {
            unitModel._basic.unit_tag = [unitModel._basic.unit_tag];
        }

        console.log(unitModel._basic);

        unitModel._abilities.id = req.body.unit_id
        unitModel._abilities.main_ability = req.body.main.split(',').map(m => m.trim())
        unitModel._abilities.ultra_ability = req.body.ultra.split(',').map(m => m.trim())
        unitModel._abilities.z_limited_ability = req.body.z_limited.split(',').map(m => m.trim())
        unitModel._abilities.z_ability = req.body.z.split(',').map(m => m.trim())
        unitModel._abilities.unique_ability_1 = req.body.unique_1.split(',').map(m => m.trim())
        unitModel._abilities.unique_ability_2 = req.body.unique_2.split(',').map(m => m.trim())

        unitModel._arts.id = req.body.unit_id
        unitModel._arts.strike = req.body.strike.split(',').map(m => m.trim())
        unitModel._arts.blast = req.body.blast.split(',').map(m => m.trim())
        unitModel._arts.special_move = req.body.special_move.split(',').map(m => m.trim())
        unitModel._arts.special_art = req.body.special_art.split(',').map(m => m.trim())
        unitModel._arts.ultimate = req.body.ultimate.split(',').map(m => m.trim())
        unitModel._arts.awaken = req.body.awaken_card.split(',').map(m => m.trim())

        unitModel._unit_zenkai.id = req.body.unit_id
        unitModel._unit_zenkai.main_ability = req.body.zenkai_main.split(',').map(m => m.trim())
        unitModel._unit_zenkai.unique_ability_1 = req.body.zenkai_unique_1.split(',').map(m => m.trim())
        unitModel._unit_zenkai.unique_ability_2 = req.body.zenkai_unique_2.split(',').map(m => m.trim())
        unitModel._unit_zenkai.unique_ability_3 = req.body.zenkai_unique_3.split(',').map(m => m.trim())
        unitModel._unit_zenkai.unique_ability_4 = req.body.zenkai_unique_4.split(',').map(m => m.trim())
        unitModel._unit_zenkai.zenkai_ability = req.body.zenkai_ability.split(',').map(m => m.trim())

        unitModel._arts_zenkai.id = req.body.unit_id
        unitModel._arts_zenkai.strike = req.body.zenkai_strike.split(',').map(m => m.trim())
        unitModel._arts_zenkai.blast = req.body.zenkai_blast.split(',').map(m => m.trim())
        unitModel._arts_zenkai.special_move = req.body.zenkai_special_move.split(',').map(m => m.trim())
        unitModel._arts_zenkai.special_art = req.body.zenkai_special_art.split(',').map(m => m.trim())
        unitModel._arts_zenkai.ultimate = req.body.zenkai_ultimate.split(',').map(m => m.trim())
        unitModel._arts_zenkai.awaken = req.body.zenkai_awaken_card.split(',').map(m => m.trim())

        await insertBasicUnit('unit_basic', unitModel._basic)
        await insertBasicUnit('unit_abilities', unitModel._abilities)
        await insertBasicUnit('unit_arts', unitModel._arts)
        await insertBasicUnit('unit_zenkai', unitModel._unit_zenkai)
        await insertBasicUnit('unit_arts_zenkai', unitModel._arts_zenkai)

        res.redirect('/form/unit')
    } catch (error) {
        console.error('Error en el manejo de la solicitud:', error);
        res.status(500).send('Error interno del servidor');
    }

})

export default router