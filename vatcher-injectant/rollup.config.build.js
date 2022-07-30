import resolve from '@rollup/plugin-node-resolve'

export default {
    input: 'injectant/main.js',
    output: {
        file: 'bundle.js',
        format: 'iife',//立即执行函数
        name: 'injectant',
    },
    plugins: [
        resolve(),
    ]
}