window.__vl = {
    config: {
        pid: 'testpid',
        target: 'http://localhost:3000',
        sendResource: true,//在页面onload事件触发时会上报页面加载的静态资源
        enableConsoleTrace: true,//追踪Console内容，包括error、warn、log、info等
        behavior: true,//JS错误诊断可提供用户行为回溯
        useFmp: true,//采集首屏FMP（First Meaningful Paint，首次有效渲染）数据
        enableSPA: true,//监听页面的hashchange事件并自动上报PV
    }
}