import axios from './axios'

export const getTasksRequest = async () => axios.get('/tasks')
export const getTaskRequest = async (id) => axios.get(`/task/${id}`)

export const createTaskRequest = async (task) => axios.post('/task', task)
export const updateTasksRequest = async (id,task) => axios.put(`/task/${id}`, task)
export const deleteTasksRequest = async (id) => axios.delete(`/task/${id}`)

