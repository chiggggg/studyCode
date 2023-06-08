import {get} from "./request";

export function getAvatar(keyword){
    return get(`http://localhost:3000/api1/search/users?q=${keyword}`)
}
