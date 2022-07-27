import resolve from '@rollup/plugin-node-resolve'

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',//立即执行函数
        name: 'main',
    },
    plugins: [
        resolve(),
    ]
}