import { supabase } from '../database/supabase.js'

const insertBasicUnit = async (table, data) => {
    const { result, error } = await supabase
        .from(table)
        .upsert(data)

    if (error) {
        console.error('Error inserting unit:', error.message)
        return;
    }

    console.log('Unit inserted successfully:', result);
}

export {
    insertBasicUnit
}