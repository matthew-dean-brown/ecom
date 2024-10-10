import mysql from 'mysql2/promise' //I love using async and await in my code

const pool = mysql.createPool({
    database:process.env.DB,
    user:process.env.USER,
    password:process.env.PASSWORD,
    host:process.env.HOST
})
export {pool}