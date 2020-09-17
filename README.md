# 一些无关紧要的说明

## 1、所用到的开发模式下的资源

### 公用资源

* `@babel/core` babel核心库，使用babel所必要的
* `@babel/preset-react` 打包react代码
* `babel-loader`  允许使用babel和webpack转换JavaScript文件
* `@babel/preset-env` 可让您使用最新的JavaScript(感觉不好用)
* `clean-webpack-plugin` 打包之前先清除生成打包文件的目录
* `webpack` 使用webpack所必要的
* `webpack-cli` 使用webpack所必要的
* `webpack-merge` 合并配置文件

------

### 客户端资源

* `html-webpack-plugin` 动态输出html文件
* `webpack-dev-server` 内部自建一个服务，可设置hot 模块替换

------

### 服务端资源
* `nodemon` hot 模块替换
* `webpack-node-externls`  打包时，忽略node_modules

## 2、一些抠脚命令

* `npm run test` 初始化自带，不关我事
* `npm start` 单独启动一个未打包的serve
* `npm run dev` 启动一个hot模块服务
* `npm run client-build` 打包client到app/dist目录下
* `npm run client-watch` client观察者模式
* `npm run serve-build` 打包serve到serve/build目录下
* `npm run serve-watch` server观察者模式
* `npm run serve` 启动一个打包后的serve

------

### 3、随便写点

`npm install --save-dev @babel/core @babel/preset-react babel-loader ` 

`npm install --save-dev webpack webpack-cli webpack-dev-server webpack-merge clean-webpack-plugin html-webpack-plugin` 

`npm install --save-dev nodemon webpack-node-externals` 



## 4、再随便写点

* 折腾了几天算是简单的搭建了一个蹩脚的打包工具，凑合用吧，万事开头难，希望后面好受一点