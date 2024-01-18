import { supabase } from "../database/supabase.js"

async function deleteUnit(table, id) {
    const { data, error } = await supabase
        .from(table)
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error al borrar el registro:', error.message);
    } else {
        console.log('Registro borrado con éxito:', data);
    }
}

export {
    deleteUnit
}