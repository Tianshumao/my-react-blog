## 搭建步骤

1. 创建项目：

   > npx create-react-app my-blog

2. 安装依赖：antd、redux 和 react-redux、react-router-dom、axios、less 和 less-loader
   > npm i antd @reduxjs/toolkit react-redux react-router-dom@6 axios less less-loader@6.0.0 --save
3. 针对 antd 按需打包 npm add react-app-rewired customize-cra babel-plugin-import
   ```
      const {override, fixBabelImports} = require('customize-cra')
      module.exports = override(
         fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css' // 自动打包相关的样式
         })
      )
   ```
   新建 config-overrides.js 文件，后吧 package.json 文件中的 scripts 修改为
   ```
      "scripts": {
         "start": "react-app-rewired start",
         "build": "react-app-rewired build",
         "test": "react-app-rewired test",
         "eject": "react-app-rewired eject"
      },
   ```
   react-app-rewired 这个会加载 config-overrides.js 配置文件
4. 在 pages 中创建路由文件:
   加入 router 配置后，把 index.js 中的 app 改为 router 下路径
5. 创建 router 文件夹:
   1. router 内置组件： BrowserRouter、HashRouter、Route、Redirect、link、NavLink、Swith
   2. ```
        import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
        <Router>
          <Routes>
              <Route path="/" element={<App />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/list" element={<List />}></Route>
              </Route>
              <Route path="/login" element={<Login />}></Route>
          </Routes>
         </Router>
      ```
      > > 目前对于路径 / 对应不同的 element 还有些疑问 -- 怎么配置默认的显示页面
   3. 输出的地方为<Outlet />
6. 在 public 里面添加 css 文件夹里面放入 reset.css 文件
7. 配置 less

   1. 先用 npm run eject 吧项目配置文件暴露出来
   2. 在文件 webpack.config.js 中搜索 sassModuleRegex，找出最后的位置下面添加 less 配置.把 sass 的配置文件复制一份
   3. 另一种配置方案也是本网站使用的是把 config-overrides.js 配置文件改为

   ```
      const {
        override,
        fixBabelImports,
        addLessLoader,
        adjustStyleLoaders,
      } = require('customize-cra')

      module.exports = override(
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true, // 自动打包相关的样式
        }),
        addLessLoader({
            lessOptions: {
              javascriptEnabled: true,
              modifyVars: { '@primary-color': '#1DA57A' },
            },
        }),
        adjustStyleLoaders(({ use: [, , postcss] }) => {
            const postcssOptions = postcss.options
            postcss.options = { postcssOptions }
        })
      )
   ```

8. 封装 Request 请求

   1. request.js

   ```
      import axios from 'axios'

      // 配置项
      const axiosOption = {
         baseURL: 'http://47.93.114.103:6688/manage',
         timeout: 5000,
      }

      // 创建一个单例
      const instance = axios.create(axiosOption)

      // 添加求情拦截器
      instance.interceptors.request.use(
         function (config) {
            return config
         },
         function (error) {
            return Promise.reject(error)
         }
      )

      // 添加响应拦截器
      instance.interceptors.response.use(
         function (response) {
            return response.data
         },
         function (error) {
            return Promise.reject(error)
         }
      )

      export default instance

   ```

   由于 eject 后出现 vscode 提示错误问题，所以解决办法是找到 node_modules 下面的 babel-preset-react-app 下的 creat.js 在 render 前面添加`var env = process.env.BABEL_ENV || process.env.NODE_ENV || 'development'`重启解决问题

9. 解决跨域
   在文件 webpackDevServer.config.js 配置 proxy

   ```
     proxy: {
         '/api': {
           target: 'http://47.93.114.103:6688/manage',
           changeOrigin: true, // 是否跨域
           pathRewrite: { '^/api': '/' },
         },
     }
   ```

   后在文件 request.js 中把 baseURL 改为 /api

10. 安装 server，npm install -g serve
11. npm install mapbox-gl --save
12. redux 配置

## 过程遇到的问题

1. 引入 router 文件的时候不能显示文件，后查找出原因为 const BaseRouter = () => ()最后的（）写成了{}.因为要写标签所以要用()而不是{}
2. 配置 config-overrides.js 是一直报错，后来添加了一段代码后解决
   ```
      adjustStyleLoaders(({ use: [, , postcss] }) => {
         const postcssOptions = postcss.options
         postcss.options = { postcssOptions }
      })
   ```
3.

## 待自己完善补充的知识点

1. forEach()/filter()/map()/reduce()/find()/findIndex()/bind()/call()
2. async\awaite
   > 作用：简化 promise 对象的使用；不用再使用 then()来指定成功和失败的回调函数，已同步的方式实现异步流程
