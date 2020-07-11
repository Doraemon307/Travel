# travel

> 模仿慕课网开发的去哪儿网APP

## Demo Tree
|-- LICENSE
|-- README.en.md
|-- README.md
|-- build
|-- config
|-- index.html
|-- node_modules
|-- package-lock.json
|-- package.json
|-- src
|   |-- App.vue
|   |-- assets                        //页面样式以及所需图标
|   |   `-- styles
|   |       |-- border.css
|   |       |-- iconfont
|   |       |   |-- iconfont.eot
|   |       |   |-- iconfont.svg
|   |       |   |-- iconfont.ttf
|   |       |   |-- iconfont.woff
|   |       |   `-- iconfont.woff2
|   |       |-- iconfont.css
|   |       |-- mixins.styl
|   |       |-- reset.css
|   |       `-- varibles.styl
|   |-- common                        //公用组件文件夹
|   |   |-- fade
|   |   |   `-- FadeAnimation.vue     //渐隐渐现动画组件
|   |   `-- gallery
|   |       `-- Gallery.vue           //画廊组件
|   |-- main.js
|   |-- pages                         //所有页面集合
|   |   |-- city
|   |   |   |-- City.vue              //城市列表页面父组件
|   |   |   `-- components
|   |   |       |-- Alphabet.vue      //字母表组件
|   |   |       |-- Header.vue        //顶部组件
|   |   |       |-- List.vue          //城市列表组件
|   |   |       `-- Search.vue        //搜索城市组件
|   |   |-- detail
|   |   |   |-- Detail.vue            //城市详情页面父组件
|   |   |   `-- components
|   |   |       |-- Banner.vue        //
|   |   |       |-- Header.vue        //
|   |   |       `-- List.vue          //
|   |   `-- home
|   |       |-- Home.vue              //首页页面父组件
|   |       `-- components    
|   |           |-- Header.vue        //顶部组件
|   |           |-- Icons.vue         //图标组件
|   |           |-- Recommend.vue     //推荐组件
|   |           |-- Swiper.vue        //图片轮播组件
|   |           `-- Weekend.vue       //周末游组件
|   |-- router
|   |   `-- index.js                  //路由配置文件
|   `-- store                         //使用vuex创建的仓库store
|       |-- index.js
|       |-- mutations.js
|       `-- state.js
`-- static

## 真机测试
项目的数据放至PHP服务器中，当PHP服务器开启时，手机端可成功运行该APP。
