module.exports = {
    devServer: {
        open: true,
        proxy: {
            //开发环境
            '/api': {
                target: "http://localhost:3000",
                ws: true, //如果要代理 websockets，配置这个参数
                secure: false, // 如果是https接口，需要配置这个参数
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api':''
                }
            },
            // 生产环境
            '/foo': {
                target: '<other_url>'
            }
        }
    },
    publicPath: "./" //打包
}

 