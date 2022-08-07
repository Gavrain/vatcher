import md5 from "md5"
import { deliver } from "../utils/deliver"

const guuid = (info) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    ctx.fillText(info, 10, 10)
    console.log(canvas.toDataURL())
    return md5(canvas.toDataURL())
}

function mUniqueView(config) {
    let uuid = localStorage.getItem(config.pid)
    if (!uuid) {
        uuid = guuid(config.pid)
        localStorage.setItem(config.pid, uuid)
    }
    const payload = { pid: config.pid, uuid }
    deliver(config.target + '/uv', payload)
}

export default mUniqueView