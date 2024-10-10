import { pool } from "../config/config.js";

const getProductsDb = async () => {
    const [rows] = await pool.query('SELECT * FROM products')
    return rows
}

const getProductDb = async (id) => {
    const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id])
    return rows
}
const addProductDb = async (product) => {
    await pool.query('INSERT INTO products (`p_name`, `p_description`, `p_price`, `p_url`) VALUES (?,?,?,?)', [product.p_name, product.p_description, product.p_price, product.p_url])
    return await getProductsDb()
}
const deleteProductDb = async (id) => {
    await pool.query('DELETE FROM products WHERE id = ?', [id])
    return await getProductsDb()
}
const updateProductDb = async (id, product) => {
    await pool.query('UPDATE products SET p_name = ?, p_description = ?, p_price = ?, p_url = ? WHERE id = ?', [product.p_name, product.p_description, product.p_price, product.p_url, id])
    return await getProductsDb()
}

export {getProductsDb, getProductDb, addProductDb, deleteProductDb,updateProductDb}