import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments'
});

const getComments = () => axiosInstance.get('')
const addComment = (comment) => axiosInstance.post('', comment)

export {getComments,addComment};