import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import vuePlugin from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

const env = process.env.NODE_ENV

export default {
    input: 'src/main.js',
    output: {
        file: 'index.js',
        format: 'esm',
        sourcemap: true,
    },
    plugins: [
        nodeResolve(),
        replace({
            preventAssignment: true, // 防止环境变量在代码中被修改
            'process.env.NODE_ENV': JSON.stringify(env),
            '__VUE_OPTIONS_API__': true,
            '__VUE_PROD_DEVTOOLS__': true
        }),
        vuePlugin(),
        postcss(),
        livereload(),
        serve({
            open: true,
            contentBase: '',
            host: 'localhost',
            port: 8888,
            openPage: '/index.html',
        }),
    ]
}