import axios from "axios"

const axiosClient =  axios.create({
    baseURL: ['http://localhost:3000','https://codeeditor-2-59ed.onrender.com'],
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default axiosClient;

