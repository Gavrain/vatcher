import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

const isDev = process.env.NODE_ENV === 'development'

let devPlugins = [
    livereload(),
    serve({
        open: true,
        contentBase: '',
        host: 'localhost',
        port: 8888,
        openPage: '/index.html',
    })
]

let plugins = [
    nodeResolve(), commonjs(), ...isDev ? devPlugins : []
]

export default {
    input: path.resolve(__dirname, 'src/main.js'),
    output: {
        file: 'bundle.js',
        format: 'umd',
        name: 'injectant',
    },
    plugins
}