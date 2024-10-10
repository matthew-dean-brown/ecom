import { getProductsDb, getProductDb, addProductDb, deleteProductDb,updateProductDb} from "../model/productsDb.js"

const getProducts = async(req,res)=>{
    res.send(await getProductsDb())
}
const getProduct = async(req,res)=>{
    const id = req.params.id
    res.send(await getProductDb(id))
}
const addProduct = async(req,res)=>{
    const product = req.body.product
    res.send(await addProductDb(product),{message: 'Item Added'})
}
const deleteProduct = async(req,res)=>{
    const id = req.params.id
    res.send(await deleteProductDb(id),{message: 'Item removes succesfully'})
}
const updateProduct = async(req,res)=>{
    const id = req.params.id
    const product = req.body.product
    res.send(await updateProductDb(id,product),{message: 'Item updated'})
}

export {getProducts, getProduct,addProduct,deleteProduct,updateProduct}