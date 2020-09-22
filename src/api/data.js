import axios from "./axios"

//请求集合
export const getbanner = function () {
    return axios.request({
        url:"banner",
        method:"POST",
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },
        data:{
                id:13123
        }
    })
}

// 用户名
export const getUserData=function(){
    return axios.request({
        url:"user",
        method:"get"
    })
}