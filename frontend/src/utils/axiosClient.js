import axios from "axios"

const axiosClient =  axios.create({
    baseURL: 'https://codeeditor-2-59ed.onrender.com',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default axiosClient;

