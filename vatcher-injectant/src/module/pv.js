import { deliver } from "../utils/deliver"

function addHistoryEvent(type) {
    const origin = window.history[type]
    window.history[type] = function () {
        window.dispatchEvent(new Event(type))
        return origin.apply(this, arguments)
    }
}

function mPageView(config) {
    let path = config.target
    const payload = { pid: config.pid }
    if (config.enableSPA) {
        path = path + '/hashchange'
        window.addEventListener('hashchange', deliver(path, payload))
    }
    else {
        path = path + '/history'
        addHistoryEvent('pushState')
        addHistoryEvent('replaceState')
        addHistoryEvent('popstate')
        window.addEventListener('pushState', deliver(path, payload))
        window.addEventListener('replaceState', deliver(path, payload))
        window.addEventListener('popstate', deliver(path, payload))
    }
}

export default mPageView