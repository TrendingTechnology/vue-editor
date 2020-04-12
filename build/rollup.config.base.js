import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import cjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import postcss from 'rollup-plugin-postcss'

const config = require('../package.json')

export default {
  external: [
    'v-tooltip',
    'tiptap',
    'prosemirror-utils',
    'tiptap-extensions',
    'tiptap-commands',
  ],
  input: 'src/index.js',
  plugins: [
    resolve({
      mainFields: ['module', 'jsnext:main', 'main', 'browser'],
    }),
    vue({
      css: true,
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
    }),
    cjs({
      exclude: 'src/**',
    }),
    replace({
      VERSION: JSON.stringify(config.version),
    }),
    postcss(),
  ],
}
