const getProducts = (req,res)=>{
    res.send('Hey There')
}
const getProduct =(req,res)=>{
    res.send('Hey There Single')
}
const addProduct = (req,res)=>{
    res.send('Item added')
}
const deleteProduct = (req,res)=>{
    res.send('Item deleted')
}
const editProduct = (req,res)=>{
    res.send('Item updated')
}

export {getProducts, getProduct,addProduct,deleteProduct,editProduct}