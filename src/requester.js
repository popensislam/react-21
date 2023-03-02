import axios from "axios";
import { BASE_URL } from "./common/consts";


export const $api = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer asdasdasdas'
    config.headers.Accept = 'application/json'

    return config;
})