function addHook(e) {
    return new Promise((resolve) => {
        addEventListener(e, resolve)
    })
}

async function deliverOnload(target, payload) {
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

async function deliverBeforeunload(target, payload) {
    await addHook('beforeunload')
    navigator.sendBeacon(target, payload)
    // console.log('beforeunload')
}

export { deliverOnload, deliverBeforeunload }