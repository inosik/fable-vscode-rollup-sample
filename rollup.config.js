import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import fable from 'rollup-plugin-fable';
import fableUtils from 'fable-utils';
import path from 'path';

function find(filePath) {
  return path.resolve(__dirname, filePath);
}

const fableOpts = {
  babel: fableUtils.resolveBabelOptions({
    presets: [['es2015', {'modules': false}]],
    plugins: ['transform-runtime']
  })
};

export default {
  input: './src/wordcount.fsproj',
  output: {
    file: './out/extension.js',
    format: 'cjs'
  },
  sourcemap: true,
  external: [
    'vscode'
  ],
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true,
      moduleDirectory: find('./node_modules/')
    }),
    commonjs(),
    fable(fableOpts)
  ]
};
