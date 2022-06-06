import mysql from 'mysql2/promise'

const con = await mysql.createConnection({
    database: process.env.MYSQL_DB
})


export {con}