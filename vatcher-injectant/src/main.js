import mPageView from "./module/pv"
import mUnique from "./module/uv"

const defaultConfig = {
    pid: 'testpid',
    target: 'http://localhost:3000',
    sendResource: false,
    enableConsoleTrace: false,
    behavior: false,
    useFmp: false,
    enableSPA: false,
}
const config = Object.assign(defaultConfig, __vl.config)


mPageView(config)
mUnique(config)