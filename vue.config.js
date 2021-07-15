// vue.config.js
module.exports = {
    // publicPath:"./",
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'url',
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '^/api': ''
    //             }
    //         }
    //     },
    //     // 此处开启 https
    //      https: true
    // }
    devServer: {
        open: process.platform === 'darwin',
        host: '127.0.0.1',
        port: 8085,
        https: false,
        hotOnly: false,
        proxy: null, // 设置代理
        before: app => {}
    },
}