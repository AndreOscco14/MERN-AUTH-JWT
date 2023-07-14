import axios from './axios'

export const getTasksRequest = () => axios.get('/tasks')
export const getTaskRequest = (id) => axios.get(`/tasks/${id}`)

export const createTaskRequest = (task) => axios.post('/task', task)
export const updateTasksRequest = (task) => axios.put(`/task/${task._id}`)
export const deleteTasksRequest = (id) => axios.delete(`/task/${id}`)

