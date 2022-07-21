import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

const getUsers = () => axiosInstance.get('/users')
const addUser = (user) => axiosInstance.post('/users', user)

export {getUsers, addUser};

