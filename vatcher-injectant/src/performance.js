function g() {
    if (!performance) return {}
    let p = performance.getEntriesByType('paint')
    let d = {
        FP: p[0].startTime,
        FCP: p[1].startTime
    }
    return d
}

export default g