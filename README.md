
# Taurus Desktop 项目工程模板（单页应用）
> Taurus Desktop 是一个基于Vue.js面向桌面端的前端解决方案



### 开始开发

```bash
cd my-project
ipu vendor
```

PS: 第三方包如有更新需重新运行

```bash
ipu dev -p 3000
```



使用 `ipu vendor` 将项目第三方依赖包预先打包,提升项目开发编译速度,然后使用 `ipu dev` 启动开发服务器,启动完毕会自动打开默认浏览器并跳转至项目首页



### 测试

```bash
ipu test --watch
```

根据不同的项目模板执行不同的单元测试



### 集成测试

```bash
ipu test --e2e
```

默认测试浏览器为 chrome



### 打包发布

```bash
ipu build
```

完成源码的编译压缩,静态资源合并压缩,路径处理,html注入,构建版本号处理等等

### 模块管理

项目业务功能采用模块化的布局方式,既方便系统快速构建,也方便在实际开发中进行任务分配和规划,所有模块默认位于  `src/bundle` 目录下(如果需要可以在配置文件中增加相关参数 `sourceFolder` 和 `bundleFolder` 来实现自定义),每个模块默认包含三个文件: `<module name>.css`,   `<module name>.js` 和 `<module name>.html`, 分别是入口css文件,入口js文件和入口html文件(如果是单页面应用可能不包含此文件,只有入口模块才有)

- 增加模块

  添加一个空白模块

  ```bash
  ipu mod my-module
  ```

  以 other-module 为模板添加一个模块

  ```bash
  ipu mod my-module -t other-module
  ```

  支持批量添加,多个模块名使用英文逗号 `,` 分隔

  ​

- 删除模块

  删除一个已有的模块

  ```bash
  ipu mod existed-module -d
  ```

  支持批量删除,多个模块名使用英文逗号 `,` 分隔
