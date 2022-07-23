import axios from "axios";

function ApiService (endpoint) {
    this.getAll = () => fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        .then(value => value.json())
    this.getSingle = (id) => fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${id}`)
        .then(value => value.json())
}

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
const getPostById = (id) => axiosInstance.get('/posts/'+ id).then(value => value.data)

export {ApiService, getPostById}