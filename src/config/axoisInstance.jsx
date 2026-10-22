import axios from "axios";

export const axiosInstance=axios.create({
    baseURL:"https://fakestoreapi.com"
})


// interceptors are used to intercept the request and response before they are handled by then or catch
axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("in interceptor",response)
        return response
    },
    (error)=>{
        console.log("in interceptor error",error)
    }
)
// axiosInstance.interceptors.request.use(
//     ()=>{},
//     ()=>{},
// )