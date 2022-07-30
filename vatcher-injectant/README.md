```
├─config.js                 // 插入配置
├─bundle.js                 // 插入脚本出口
├─index.html                // 测试页主页
├─index.js                  // vue 出口
├─index.js.map              // mapResource
├─package-lock.json
├─package.json
├─README.md
├─rollup.config.build.js    // 构建 injectant 配置
├─rollup.config.dev.js      // 构建 测试页 配置
├─src                       // 测试页源文件
| ├─index.vue
| ├─main.js
| └style.css
├─injectant                 // 插入脚本源文件
| ├─main.js                 // 插入脚本入口
| ├─utils                   // 工具模块
| | └deliver.js
| ├─module                  // 收集模块
| | ├─error.js
| | ├─performance.js
| | └user.js
```

1. 运行测试页
   ```shell
   npm run dev
   ```
2. 构建插入脚本
   ```shell
   npm run build
   ```
