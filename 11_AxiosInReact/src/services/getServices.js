import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com/users/",
})

export const getData = ()=>{
    return api.get("gourabbistu089");
}