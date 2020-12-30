import babel from 'rollup-plugin-babel'
import typescript from "rollup-plugin-typescript2";
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import cjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import postcss from 'rollup-plugin-postcss'

const config = require('../package.json')

export default {
  input: 'src/main.ts',
  plugins: [
    resolve({
      mainFields: ['module', 'jsnext:main', 'main', 'browser'],
    }),
    typescript(),
    vue({
      css: true,
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
    }),
    cjs(),
    replace({
      VERSION: JSON.stringify(config.version),
    }),
    postcss()
  ],
  watch: {
    include: 'src/**',
  },
}