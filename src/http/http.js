import axios from 'axios'

const api = axios.create({
    baseURL: `http://localhost:3030/`,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export default api;