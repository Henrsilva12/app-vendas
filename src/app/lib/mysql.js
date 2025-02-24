import mysql from 'mysql2/promise'

let connection; //let é um tipo de variavel
export const createConnection = async () => {
    if(!connection){
        connection = await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            database: process.env.MYSQL_NAME,
            password: process.env.MYSQL_PASSWORD,
            port: process.env.MYSQL_PORT,
        })
    }

    return connection;
}




