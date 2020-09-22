import axios from "axios"
import config from "@/config";

// 判断当前的请求地址是生产环境还是开发环境
const baseUrl = process.env.NODE_ENV === "development" ? config.baseUrl.dev : config.baseUrl.pro;

// 运行命令的时候会判断当前的环境


class HttpRquest {
    constructor(baseUrl) {    
        this.baseUrl = baseUrl
        this.queue = {};//请求队列
    }
    //配置
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,//当前类的
            headers: {

            },
            timeout: 3000

        }
        return config;
    }
    // 拦截
    intercepters(instance, url) {
        // 请求拦截
        instance.interceptors.request.use(function (config) {
            // 请求的配置
            config.headers.token="token"
            return config;
        }, function (error) {

            console.log("拦截了请求")
            return Promise.reject(error);
        });


        // 响应拦截
        instance.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            console.log("拦截了响应")
            return Promise.reject(error);
        });
    }
    // 开始请求  axios自带方法
    request(option) {
        //创建实例  
        let instance = axios.create()
        //整合配置
        option = Object.assign(this.getInsideConfig(), option)//传进来的配置会覆盖掉原来的配置，然后赋值给一个新的对象,即第二个参数覆盖第一个参数
        // 调用拦截
        this.intercepters(instance, option.url)
        return instance(option);//返回配置的参数
    }
}


// 实例化
const axiosObj=new HttpRquest(baseUrl)
export default axiosObj;