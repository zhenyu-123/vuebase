import axios from "./axios"

//请求集合
export const getbanner = function () {
    return axios.request({
        url:"banner",
        method:"get",
        params:{
            id:1
        }
    })
}