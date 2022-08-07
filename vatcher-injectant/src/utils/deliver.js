function addHook(e) {
    return new Promise((resolve) => {
        addEventListener(e, resolve)
    })
}

async function deliveOnload(target, payload) {
    await addHook('load')
    // console.log('load')
    const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
            content: "placeholder",
        })
    }
    const res = await fetch(target, option)

    if (res.status === 200) {
        console.log(res.data)
    } else {
        throw new Error(res.data)
    }
}

async function deliveBeforeunload(target, payload) {
    await addHook('beforeunload')
    navigator.sendBeacon(target, payload)
    // console.log('beforeunload')
}

function deliver(target, payload) {
    const p = Object.assign(payload, { time: new Date().getTime() })
    const header = {
        type: 'application/x-www-form-urlencoded'
    }
    const blob = new Blob([JSON.stringify(p)], header)
    navigator.sendBeacon(target, blob)
}

function reportTracker(data) {
    const params = Object.assign(this.data, data, { time: new Date().getTime() })
    let headers = {
        type: 'application/x-www-form-urlencoded'
    }
    let blob = new Blob([JSON.stringify(params)], headers)
    navigator.sendBeacon(this.data.requestUrl, blob)
}

export { deliver, deliveOnload, deliveBeforeunload }