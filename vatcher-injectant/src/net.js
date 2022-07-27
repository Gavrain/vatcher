function g() {
    if (!performance) return {}
    // let t = JSON.parse(JSON.stringify(performance.timing))
    let t = performance.getEntriesByType('navigation')[0]
    let d = {
        redirectTime: t.redirectEnd - t.redirectStart,
        DNSTime: t.domainLookupEnd - t.domainLookupStart,
        TCPTime: t.connectEnd - t.connectStart,
        SSLTime: t.secureConnectionStart ? t.connectEnd - t.secureConnectionStart : 0,
        TTFBTime: t.responseStart - t.requestStart,
        dataLoadTime: t.responseEnd - t.requestStart,
        sourceLoadTime: t.loadEventStart - t.domContentLoadedEventEnd,
    }
    return d
}

export default g