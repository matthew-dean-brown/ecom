const getUsers = (req,res)=>{
    res.send('Hey There')
}
const getUser =(req,res)=>{
    res.send('Hey There Single')
}
const addUser = (req,res)=>{
    res.send('User added')
}
const deleteUser = (req,res)=>{
    res.send('User deleted')
}
const editUser = (req,res)=>{
    res.send('User updated')
}

export {getUsers, getUser,addUser,deleteUser,editUser}