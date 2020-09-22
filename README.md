# vuebase
### 一个基于vue cli4的工程化基础配置
-  封装axios
-  开发环境和生产环境
-  开发环境mock数据
-  前端跨域代理
-
1、开启node服务，开启跨域监听本地ip,模拟接口返回数据
2、或者项目开启代理，项目中引入mock.js,监听参数并返回数据

###注意事项开启代理后，axios的baseURL 假如为/api，
那么mock的/api也需加上，同时baseURL不能拼接其他参数
Mock.mock("/api/homenav", {
    username: "213小明",
    age: 12,
    birth: 1997,
    sex: "男"
})
