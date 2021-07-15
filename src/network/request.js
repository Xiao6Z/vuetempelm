import axios from 'axios'
import index from "@/store";
import router from "../router/index"

export default function request(config) {
    let head = {
        baseURL: index.state.rooturl + '/prod-api/api',
        timeout: 5000,
        headers: {
            Authorization: index.state.token
        }
    }
    const instance = axios.create(head)
    instance.interceptors.request.use(config => {
        return config
    }, err => {

    })

    instance.interceptors.response.use(res => {
        // console.log(res.data.code);
        return res.data
    }, err => {

    })
    return instance(config)
}