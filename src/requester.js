import axios from "axios";


export const $api = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer asdasdasdas'
    config.headers.Accept = 'application/json'

    return config;
})