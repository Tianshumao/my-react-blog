# 项目搭建

## 搭建步骤

1. 创建项目：

   > npx create-react-app my-blog

2. 安装依赖：antd、redux 和 react-redux、react-router-dom、axios、less 和 less-loader
   > npm i antd redux react-redux react-router-dom@6 axios less less-loader@6.0.0 --save
3. 引入 antd 样式
   > @import 'antd/dist/antd.css';
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
6. 配置 less
   1. 先用 npm run eject 吧项目配置文件暴露出来
   2. 在文件 webpack.config.js 中搜索 sassModuleRegex，找出最后的位置下面添加 less 配置.把 sass 的配置文件复制一份
7. 封装 Request 请求

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

8. 解决跨域
   在文件 webpackDevServer.config.js 配置 proxy

   ```
   proxy: {
      '/api': {
         target: 'http://47.93.114.103:6688/manage',
         changeOrigin: true, // 是否跨域
         pathRewrite: { '^/api': '/' },
      },
   },
   ```

   后在文件 request.js 中把 baseURL 改为 /api

9. 安装 server，npm install -g serve

## 过程遇到的问题

1. 引入 router 文件的时候不能显示文件，后查找出原因为 const BaseRouter = () => ()最后的（）写成了{}.因为要写标签所以要用()而不是{}
2.

# MD 语法

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

//形式一

- a
- b
- c
  //形式二

* d
* e
* f
  //形式三

- g
- h
- i

### 正常形式

1. abc
2. bcd
3. cde
   //错序效果
4. fgh
5. ghi
6. hij

### 无序列表嵌套

- 123
  - abc
  - bcd
  - cde
- 465
- 789

有序列表嵌套

1. abcd
   1. abcde
   2. abcde
   3. abcde
2. bcde
3. cdef

> 引用内容、说明内容。在语句前面加一个 > ，注意是英文的那个右尖括号，注意空格，引用因为是一个区块，理论上是应该什么内容都可以放，比如说：标题，列表，引用等等。
>
> > 二级引用
> >
> > > 三级引用
> > >
> > > > 四级引用
> > > >
> > > > > 五级引用
> > > > >
> > > > > > 六级引用

### 代码块

`shaoliangdaima,danhangshiyong`

```
    daliangdaima,xuyaoduohangshiyong
    daliangdaima,xuyaoduohangshiyong
    daliangdaima,xuyaoduohangshiyong
    daliangdaima,xuyaoduohangshiyong
    daliangdaima,xuyaoduohangshiyong
```

### 链接

[简书](https://www.jianshu.com '创作你的创作'),
是一个创作社区,任何人均可以在其上进行创作。用户在简书上面可互相交流。

[简书]: https://www.jianshu.com '创作你的创作'

[简书]是一个创作社区,任何人均可以在

//参数定义的其他写法
[简书]: https://www.jianshu.com '创作你的创作'
[简书]: https://www.jianshu.com (创作你的创作)
[简书]: <https://www.jianshu.com> "创作你的创作"

### 图片

![my-logo.png](https://upload-images.jianshu.io/upload_images/13623636-6d878e3d3ef63825.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240 'my-logo')

### 强调字体

_md_  
**md**
~~删除~~

### 转义字符

\\ \*
\+
\-
\`
\_

### 表格

//例子一
|123|234|345|
|:-|:-:|-:|
|abc|bcd|cde|
|abc|bcd|cde|
|abc|bcd|cde|
//例子二
|123|234|345|
|:---|:---:|---:|
|abc|bcd|cde|
|abc|bcd|cde|
|abc|bcd|cde|
//例子三
123|234|345
:-|:-:|-:
abc|bcd|cde
abc|bcd|cde
abc|bcd|cde
