import { supabase } from "../database/supabase.js"

const getById = async (table, column_id, id) => {
    try {
        const { data, error } = await supabase
            .from(table)
            .select('*')
            .eq(column_id, id)

        if (error) {
            throw error
        }
        return data
    } catch (error) {
        console.error('Error al obtener datos de Supabase:', error)
        throw error
    }
}

const getAll = async (table) => {
    try {
        const { data, error } = await supabase
            .from(table)
            .select('*')

        if (error) {
            throw error;
        }

        if (!data || data.length === 0) {
            console.warn(`No hay datos en la tabla ${table}`);
            return [];
        }

        return data;
    } catch (error) {
        console.error('Error al obtener datos de Supabase:', error);
        throw error;
    }
}

export const getData = {
    getById,
    getAll
}