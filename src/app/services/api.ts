import axios from "axios";

export const apiHzhong= axios.create({
    baseURL: "https://api-hzhong.onrender.com",
    timeout: 10000,
    headers: {"Content-Type": "application/json"}
});