let {join} = require('path')
let path = require('path')
function rules(config) {
    let rules = config
        .module
        .rules
        .map(v => {
            if (v.test.toString() === '/\\.css/') {
                return {
                    test: /\.css/,
                    use: [
                        require.resolve('style-loader'),
                        require.resolve('css-loader')
                    ]
                }
            }
            return v
        })
    return {
        module: {
            rules
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '../src'), // 定义一个源码目录别名
                'asset': path.resolve(__dirname, '../src/asset'), // 开发模式资源库
                'components': path.resolve(__dirname, '../src/module/index'), // components
                'common': path.resolve(__dirname, '../src/common'), // 公用js插件
                'module': path.resolve(__dirname, '../src/module'), // 项目组件
                'styles': path.resolve(__dirname, '../src/styles'), // 项目公用样式
                'demo': path.resolve(__dirname, '../src/demo') // demo,后期记得删去
            },
            extensions: [
                ".js",
                ".json",
                ".vue",
                ".styl",
                ".css",
                ".less",
                '.scss'
            ] //自定义模块后缀
        }
    }
}

module.exports = {
    type: "frontend", // 项目类型
    spa: '/index.html', //是否单页应用,url rewrites 规则
    jsExt: ".js", //入口js文件后缀名
    cssExt: ".scss", //入口css文件后缀名
    autocheck: [
        'aid-elements', 'aid-taurus-desktop'
    ],
    beforeDev(config) {
        return rules(config)
    },
    beforeBuild(config) {
        return rules(config)
    }
}
