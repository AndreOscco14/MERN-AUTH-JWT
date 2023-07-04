import Router from 'express'
import  { authRequired } from '../middlewares/validateToken.js';
import { getTasks, getTask, createTask, updateTask, deleteTask } from '../controllers/tasks.controller.js'
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createSchema } from '../schemas/task.schema.js'

const router = Router()

router.get('/tasks', authRequired, getTasks)
router.get('/task/:id', authRequired, getTask)
router.post('/task',authRequired, validateSchema(createSchema) , createTask)
router.delete('/task/:id', authRequired, deleteTask)
router.put('/task/:id', authRequired, updateTask)

export default router