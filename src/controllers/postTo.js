import mysql from 'mysql2/promise'

const config = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'dbl',
}

const postTo = async (query, params=[]) => {
    try {
        const connection = await mysql.createConnection(config)
        const [results] = await connection.query(query, params=[])

        connection.end()
        return results
    }
    catch (error) {
        console.log('Error al subir el tag, error: ' + error)
    }
}

export {
    postTo
}