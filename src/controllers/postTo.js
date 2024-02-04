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

const updateData = async (table, id, data) => {
    const { result, error } = await supabase
        .from(table)
        .upsert(
            [{ id, ...data }],
            { onConflict: ['id'] }
        );

    if (error) {
        console.error('Error updating data:', error.message);
        return;
    }

    console.log('Data updated successfully:', result);
};

export {
    insertBasicUnit,
    updateData
}