import express from 'express'
import {getUsers, getUser,addUser,deleteUser,editUser} from '../controller/userController.js'

const router = express.Router()

router
    .route('/')
        .get(getUsers)
        .post(addUser)
        .delete(deleteUser)
        .patch(editUser)

router.get('/:id', getUser)
export default router