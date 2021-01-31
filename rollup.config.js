import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/extension.fs.js',
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
    commonjs()
  ]
};
