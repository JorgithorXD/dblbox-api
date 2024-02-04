function subirLFZenkai () {
    unitModel._basic.is_ll = true
            unitModel._basic.zenkai = true

            unitModel._abilities.id = data.id
            unitModel._abilities.main_ability.push(data.paragraphs[0].title)
            unitModel._abilities.main_ability.push(data.paragraphs[0].text)
            unitModel._abilities.unique_ability_1.push(data.paragraphs[1].tilte)
            unitModel._abilities.unique_ability_1.push(data.paragraphs[1].text)
            unitModel._abilities.unique_ability_2.push(data.paragraphs[2].tilte)
            unitModel._abilities.unique_ability_2.push(data.paragraphs[2].text)
            unitModel._abilities.z_limited_ability.push(data.paragraphs[3].text)
            unitModel._abilities.z_limited_ability.push(data.paragraphs[4].text)
            unitModel._abilities.z_limited_ability.push(data.paragraphs[5].text)
            unitModel._abilities.z_limited_ability.push(data.paragraphs[6].text)
            unitModel._abilities.z_ability.push(data.paragraphs[7].text)
            unitModel._abilities.z_ability.push(data.paragraphs[8].text)
            unitModel._abilities.z_ability.push(data.paragraphs[9].text)
            unitModel._abilities.z_ability.push(data.paragraphs[10].text)

            unitModel._arts.id = data.id
            unitModel._arts.strike.push(data.paragraphs[13].text)
            unitModel._arts.blast.push(data.paragraphs[14].text)
            unitModel._arts.special_art.push(data.paragraphs[15].title)
            unitModel._arts.special_art.push(data.paragraphs[15].text)
            unitModel._arts.special_move.push(data.paragraphs[16].title)
            unitModel._arts.special_move.push(data.paragraphs[16].text)
            unitModel._arts.ultimate.push(data.paragraphs[17].title)
            unitModel._arts.ultimate.push(data.paragraphs[17].text)

            unitModel._unit_zenkai.id = data.id
            unitModel._unit_zenkai.main_ability.push(data.paragraphs[18].title)
            unitModel._unit_zenkai.main_ability.push(data.paragraphs[18].text)
            unitModel._unit_zenkai.unique_ability_1.push(data.paragraphs[19].tilte)
            unitModel._unit_zenkai.unique_ability_1.push(data.paragraphs[19].text)
            unitModel._unit_zenkai.unique_ability_2.push(data.paragraphs[20].tilte)
            unitModel._unit_zenkai.unique_ability_2.push(data.paragraphs[20].text)
            unitModel._unit_zenkai.unique_ability_3.push(data.paragraphs[21].tilte)
            unitModel._unit_zenkai.unique_ability_3.push(data.paragraphs[21].text)
            unitModel._unit_zenkai.unique_ability_4.push(data.paragraphs[22].tilte)
            unitModel._unit_zenkai.unique_ability_4.push(data.paragraphs[22].text)
            unitModel._unit_zenkai.zenkai_ability.push(data.paragraphs[31].text)
            unitModel._unit_zenkai.zenkai_ability.push(data.paragraphs[32].text)
            unitModel._unit_zenkai.zenkai_ability.push(data.paragraphs[33].text)
            unitModel._unit_zenkai.zenkai_ability.push(data.paragraphs[34].text)

            unitModel._arts_zenkai.id = data.id
            unitModel._arts_zenkai.strike.push(data.paragraphs[37].text)
            unitModel._arts_zenkai.blast.push(data.paragraphs[38].text)
            unitModel._arts_zenkai.special_art.push(data.paragraphs[39].title)
            unitModel._arts_zenkai.special_art.push(data.paragraphs[39].text)
            unitModel._arts_zenkai.special_move.push(data.paragraphs[40].title)
            unitModel._arts_zenkai.special_move.push(data.paragraphs[40].text)
            unitModel._arts_zenkai.ultimate.push(data.paragraphs[41].title)
            unitModel._arts_zenkai.ultimate.push(data.paragraphs[41].text)
}

function ultra () {
    
    unitModel._basic.id = data.id
    unitModel._basic.unit_name.push(data.name)
    unitModel._basic.is_ll = false
    unitModel._basic.zenkai = false
    unitModel._basic.unit_rarity = 4
    unitModel._basic.is_ll = false
    unitModel._basic.awaken = false
    unitModel._basic.revival = false
    unitModel._basic.tag_switch = false 
    unitModel._basic.transformable = false

    unitModel._abilities.id = data.id
    unitModel._abilities.main_ability.push(data.paragraphs[0].title)
    unitModel._abilities.main_ability.push(data.paragraphs[0].text)
    unitModel._abilities.unique_ability_1.push(data.paragraphs[2].tilte)
    unitModel._abilities.unique_ability_1.push(data.paragraphs[2].text)
    unitModel._abilities.unique_ability_2.push(data.paragraphs[3].tilte)
    unitModel._abilities.unique_ability_2.push(data.paragraphs[3].text)
    unitModel._abilities.ultra_ability.push(data.paragraphs[1].title)
    unitModel._abilities.ultra_ability.push(data.paragraphs[1].text)
    unitModel._abilities.z_ability.push(data.paragraphs[4].text)
    unitModel._abilities.z_ability.push(data.paragraphs[5].text)
    unitModel._abilities.z_ability.push(data.paragraphs[6].text)
    unitModel._abilities.z_ability.push(data.paragraphs[7].text)

    unitModel._arts.id = data.id
    unitModel._arts.strike.push(data.paragraphs[10].text)
    unitModel._arts.blast.push(data.paragraphs[11].text)
    unitModel._arts.special_art.push(data.paragraphs[12].title)
    unitModel._arts.special_art.push(data.paragraphs[12].text)
    unitModel._arts.special_move.push(data.paragraphs[13].title)
    unitModel._arts.special_move.push(data.paragraphs[13].text)
    unitModel._arts.ultimate.push(data.paragraphs[14].title)
    unitModel._arts.ultimate.push(data.paragraphs[14].text)

    unitModel._unit_zenkai.id = data.id
    unitModel._arts_zenkai.id = data.id
}