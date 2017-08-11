let { join } = require('path')
function rules(config) {
    let rules = config.module.rules.map(v => {
        if (v.test.toString() === '/\\.css/') {
            return {
                test: /\.css/,
                use: [require.resolve('style-loader'), require.resolve('css-loader')]
            }
        }
        return v
    })
    return { module: { rules },resolve:{
    alias:{
      '@': './src' //定义一个源码目录别名
    },
    extensions: [".js", ".json", ".vue", ".styl", ".css", ".less", '.scss'] //自定义模块后缀
  } }
}

module.exports = {
    type: "frontend", // 项目类型
    spa: '/index.html', //是否单页应用,url rewrites 规则
    jsExt: ".js", //入口js文件后缀名
    cssExt: ".scss", //入口css文件后缀名
    autocheck: ['aid-elements','aid-taurus-desktop'],
    beforeDev(config) {
        return rules(config)
    },
    beforeBuild(config) {
        return rules(config)
    }
}
