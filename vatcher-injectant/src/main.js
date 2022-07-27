import gNet from './net.js'
import gPer from './performance.js'

addEventListener('load', () => {
    window.d = {
        net: gNet(),
        performance: gPer()
    }
})