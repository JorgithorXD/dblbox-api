const basic = {
    id: null,
    unit_name: [],
    unit_type: null,
    unit_rarity: null,
    unit_color: [],
    unit_tag: [],
    unit_chapter: null,
    tag_switch: null,
    revival: null,
    transformable: null,
    zenkai: null,
    is_ll: null,
    awaken: null
}

const basicTranslate = {
    id: null,
    unit_name: []
}


const abilities = {
    id: null,
    main_ability: [],
    ultra_ability: [],
    z_limited_ability: [],
    z_ability: [],
    unique_ability_1: [],
    unique_ability_2: []
}

const arts = {
    id: null,
    strike: [],
    blast: [],
    special_move: [],
    special_art: [],
    ultimate: [],
    awaken: []
}

const arts_zenkai = {
    ...arts
}

const unit_zenkai = {
    id: null,
    main_ability: [],
    unique_ability_1: [],
    unique_ability_2: [],
    unique_ability_3: [],
    unique_ability_4: [],
    zenkai_ability: []
}

const unit_src = {
    id: null,
    img: []
}

const unit_src_img = {
    img: []
}

export const models = {
    basic,
    abilities,
    arts,
    arts_zenkai,
    unit_zenkai,
    unit_src,
    unit_src_img,
    basicTranslate
}