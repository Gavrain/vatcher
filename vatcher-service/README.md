# Koa服务器

## Koa 相关包：

1. koa-body替代脚手架里的koa-bodypares

2. 脚手架：koa-generator

3. 用koa-body

4. 数据库链接的包：mysql2

5. 用nodemon热更新

6. 以上默认安装最新即可

## 文件结构：

```
├─app.js               //入口文件
├─views
├─utils                //工具  
|   └_format.js        //格式化函数
├─server               //服务层
|   └test.js
├─routes               //路由请求
|   ├─index.js 
|   └test.js
├─public
├─model                //公共模型
|   ├─ErroInfo.js
|   └ResModel.js
├─db                   //数据库
| ├─seq.js             //数据库链接配置
| ├─types.js   
| ├─model              //数据库模型文件
| |   ├─index.js       //暴露模型出去
| |   └test.js         //数据库模型
├─controller           //控制层
|     └test.js         //test相关操作 （ruotes调用的是这里的方法）
├─bin                 
|  └www                //端口、协议等相关设置
```

## 文件作用：

1. 入口文件为app.js

2. ./bin/www 文件进行端口监听相关设置，此处为3000端口

3. ./db/* 文件为数据库相关

4. ./routes/* 路由设置，以及相关请求处理（如get、post等）

## 本地配置运行：

1. 该服务器运行于node环境下，需预先安装node。

2. 安装相关包
   
   ```
   npm i 
   ```

3. 启动服务
   
   ```
   npm start
   ```

## 数据库相关（我的mysql是8.0的，尽量选同一版本）

```js
//../db/seq.js文件进行数据库链接


//'mytest'是创建的数据库 ，‘root’是数据库用户，'123'数据库密码
const sequelize = new Sequelize('mytest', 'root', '123', {
  host: 'localhost', // 地址
  dialect: 'mysql',  // 数据库类型
  operatorsAliases: 0,
  pool: {            //连接池
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
```
