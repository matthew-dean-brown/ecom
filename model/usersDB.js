import { pool } from "../config/config.js";

const getUsersDb = async()=>{
    let [rows] = await pool.query('SELECT * FROM users')
    return rows
}
const getUserDb = async(id)=>{
    let [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id])
    return rows
}
const addUserDb = async(user)=>{
    await pool.query('INSERT INTO users (name, email, password) VALUES (?,?,?)', [user.name, user.email, user.password])
    return await getUsersDb()
}
const deleteUserDb = async(id)=>{
    await pool.query('DELETE FROM users WHERE id = ?', [id])
    return await getUsersDb()
}
const editUserDb = async(id,user)=>{
    await pool.query('UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?', [user.name, user.email, user.password, id])
    return await getUsersDb()
}

export{
    getUsersDb,
    getUserDb,
    addUserDb,
    deleteUserDb,
    editUserDb
}