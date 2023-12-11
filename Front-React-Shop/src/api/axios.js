import axios from 'axios'

const instance = axios.create({
    // baseURL: 'http://localhost:3000/api',
    baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000/api',
    withCredentials: true
})

export default instance