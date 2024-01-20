import express from "express"
import { getData } from "../controllers/getData.js"

const router = express.Router()

router.get('/all', async (req, res) => {
  try {
    const dataUnitBasic = await getData.getAll('unit_basic')
    const dataUnitAbilities = await getData.getAll('unit_abilities')
    const dataUnitArts = await getData.getAll('unit_arts')
    const dataUnitZenkai = await getData.getAll('unit_zenkai')
    const dataUnitZenkaiArts = await getData.getAll('unit_arts_zenkai')

    const unit = dataUnitBasic.map((basic) => {
      const abilities = dataUnitAbilities.find((abilities) => abilities.id === basic.id)
      const arts = dataUnitArts.find((arts) => arts.id === basic.id)
      const zenkai = dataUnitZenkai.find((zenkai) => zenkai.id === basic.id)
      const zenkaiArts = dataUnitZenkaiArts.find((zenkaiArts) => zenkaiArts.id === basic.id)

      return {
        basic: {
        id: basic.id,
        unit_name: basic.unit_name,
        unit_type: basic.unit_type,
        unit_rarity: basic.unit_rarity,
        unit_color: basic.unit_color,
        unit_tag: basic.unit_tag,
        unit_chapter: basic.unit_chapter,
        unit_img: basic.unit_img,
        is_tag_switch: basic.tag_switch,
        is_revival: basic.revival,
        is_transformable: basic.transformable,
        has_zenkai: basic.zenkai,
        is_ll: basic.legends_limited,
        has_awaken: basic.awaken,
        },
        abilities: {
          main_ability: abilities.main_ability,
          ultra_ability: abilities.ultra_ability,
          z_limited_ability: abilities.z_limited_ability,
          z_ability: abilities.z_ability,
          unique_ability_1: abilities.unique_ability_1,
          unique_ability_2: abilities.unique_ability_2,
        },
        arts: {
          strike: arts.strike,
          blast: arts.blast,
          special_move: arts.special_move,
          special_art: arts.special_art,
          ultimate: arts.ultimate,
          awaken: arts.awaken,
        },
        zenkai: {
          main_ability: zenkai.main_ability,
          unique_ability_1: zenkai.unique_ability_1,
          unique_ability_2: zenkai.unique_ability_2,
          unique_ability_3: zenkai.unique_ability_3,
          unique_ability_4: zenkai.unique_ability_4,
          zenkai_ability: zenkai.zenkai_ability,
        },
        zenkai_arts: {
          strike: zenkaiArts.strike,
          blast: zenkaiArts.blast,
          special_move: zenkaiArts.special_move,
          special_art: zenkaiArts.special_art,
          ultimate: zenkaiArts.ultimate,
          awaken: zenkaiArts.awaken,
        },
      }
    })
    res.status(200).json(unit)
  } catch (error) {
    console.error('Error general:', error.message)
    res.status(500).send('Error interno del servidor')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const unitId = req.params.id
    const [dataUnitBasic] = await getData.getById('unit_basic', 'id', unitId)
    const [dataUnitAbilities] = await getData.getById('unit_abilities', 'id', unitId)
    const [dataUnitArts] = await getData.getById('unit_arts', 'id', unitId)
    const [dataUnitZenkai] = await getData.getById('unit_zenkai', 'id', unitId)
    const [dataUnitZenkaiArts] = await getData.getById('unit_arts_zenkai', 'id', unitId)

    if (!dataUnitBasic) {
      res.status(404).json({ error: 'No se encontró la unidad con el ID proporcionado' })
    } else {
      const unit = {
        id: dataUnitBasic.id,
        unit_name: dataUnitBasic.unit_name,
        unit_type: dataUnitBasic.unit_type,
        unit_rarity: dataUnitBasic.unit_rarity,
        unit_color: dataUnitBasic.unit_color,
        unit_tag: dataUnitBasic.unit_tag,
        unit_chapter: dataUnitBasic.unit_chapter,
        unit_img: dataUnitBasic.unit_img,
        is_tag_switch: dataUnitBasic.tag_switch,
        is_revival: dataUnitBasic.revival,
        is_transformable: dataUnitBasic.transformable,
        has_zenkai: dataUnitBasic.zenkai,
        is_ll: dataUnitBasic.legends_limited,
        has_awaken: dataUnitBasic.awaken,
        abilities: {
          main_ability: dataUnitAbilities.main_ability,
          ultra_ability: dataUnitAbilities.ultra_ability,
          z_limited_ability: dataUnitAbilities.z_limited_ability,
          z_ability: dataUnitAbilities.z_ability,
          unique_ability_1: dataUnitAbilities.unique_ability_1,
          unique_ability_2: dataUnitAbilities.unique_ability_2,
        },
        arts: {
          strike: dataUnitArts.strike,
          blast: dataUnitArts.blast,
          special_move: dataUnitArts.special_move,
          special_art: dataUnitArts.special_art,
          ultimate: dataUnitArts.ultimate,
          awaken: dataUnitArts.awaken,
        },
        zenkai: {
          main_ability: dataUnitZenkai.main_ability,
          unique_ability_1: dataUnitZenkai.unique_ability_1,
          unique_ability_2: dataUnitZenkai.unique_ability_2,
          unique_ability_3: dataUnitZenkai.unique_ability_3,
          unique_ability_4: dataUnitZenkai.unique_ability_4,
          zenkai_ability: dataUnitZenkai.zenkai_ability,
        },
        zenkai_arts: {
          strike: dataUnitZenkaiArts.strike,
          blast: dataUnitZenkaiArts.blast,
          special_move: dataUnitZenkaiArts.special_move,
          special_art: dataUnitZenkaiArts.special_art,
          ultimate: dataUnitZenkaiArts.ultimate,
          awaken: dataUnitZenkaiArts.awaken,
        },
      }
      res.status(200).json(unit)
    }
  } catch (error) {
    console.log(error);
  }

})

export default router