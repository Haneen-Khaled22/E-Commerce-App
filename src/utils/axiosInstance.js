import axios from "axios";
// import { application, json } from "express";

const axiosInstance = axios.create({

    baseURL:"https://server-steel-tau.vercel.app/",
    headers:{
        "Content-Type": "application/json",
        Authorization:localStorage.getItem('token')
    }
});

export default axiosInstance;
