let express = require('express');
// import Mock from "mockjs";
// //设置请求向应时间
// Mock.setup({
//     timeout: "200-1000"
// })

// // 拦截到某个请求，返回数据
// // Mock.mock("/api/user", {
// //     username: "小明",
// //     age: 12,
// //     birth: 1997,
// //     sex: "男"
// // })

// //随机生成
// Mock.mock("/api/homenav", {
//     data: {
//         "time": "@datetime",
//         "score|1-900": 900,
//         "cname": "@cname",
//         "ename": "@name",
//         "email": "@email",
//         "image": "@image",
//         "nowTime": "@now"
//     }

// })


let app = express();

app.use((req, res, next) => {
    res.append("Access-Control-Allow-Origin", "*")
    res.append("Access-Control-Allow-headers", "*")
    next();
})

app.get("/", (req, res) => {
    res.json({
        msg: "这是首页"
    })
})

app.post("/banner", (req, res) => {
    res.json({
        msg: "这是banner"
    })
})
//pdd
app.get("/api/homenav", (req, res) => {
    res.json({
        msg: "这是首页"
    })
})

// 开启本地服务
app.listen(3000, () => {
    console.log("http://localhost:3000")
})


