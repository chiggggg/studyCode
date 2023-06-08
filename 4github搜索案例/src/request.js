import axios from "axios";
import QS from 'qs';

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params
        }).then(res => resolve(res.data)).catch(err => reject(err))
    })
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params)).then(res => resolve(res)).catch(err => reject(err))
    })
}
