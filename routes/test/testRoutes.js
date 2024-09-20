import { Router } from "express"
import { addNewUser, deleteUser, getAllUsers, getUserById, testController, updateUser } from "../../controllers/test/testController.js"

const testRouter = Router()



testRouter.post('/sample', testController)

testRouter.get('/get-all', getAllUsers)

testRouter.post('/add-user', addNewUser)

testRouter.post('/get-user', getUserById)

testRouter.patch('/update-user', updateUser)

testRouter.delete('/remove-user', deleteUser)


export default testRouter