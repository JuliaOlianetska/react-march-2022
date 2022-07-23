export default function ApiService (endpoint) {
    this.getAll = () => fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        .then(value => value.json())
    this.getSingle = (id) => fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${id}`)
        .then(value => value.json())
}
