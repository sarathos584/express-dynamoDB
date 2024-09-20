import { Router } from "express"
import { addNewUser, deleteUser, getAllUsers, getUserById, updateUser } from "../../controllers/test/testController.js"
import { check } from "express-validator"

const testRouter = Router()


testRouter.get('/get-all', getAllUsers)

testRouter.post('/add-user',[
    check('first_name').not().isEmpty(),
    check('last_name').not().isEmpty(),
    check('email').not().isEmpty()
], addNewUser)

testRouter.post('/get-user', [
    check('user_id').not().isEmpty()
], getUserById)

testRouter.patch('/update-user', [check('user_id').not().isEmpty()], updateUser)

testRouter.delete('/remove-user', check('user_id').not().isEmpty(),  deleteUser)


export default testRouter