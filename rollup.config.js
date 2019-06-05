import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import fable from 'rollup-plugin-fable';
import path from 'path';

function find(filePath) {
  return path.resolve(__dirname, filePath);
}

const fableOpts = {
  babel: {
    presets: [['@babel/preset-env', {'modules': false}]],
    plugins: ['@babel/plugin-transform-runtime']
  }
};

export default {
  input: './src/wordcount.fsproj',
  output: {
    file: './out/extension.js',
    format: 'cjs',
    sourcemap: true
  },
  external: [
    'vscode'
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    fable(fableOpts)
  ]
};
