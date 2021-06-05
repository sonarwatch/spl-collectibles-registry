// eslint-disable-next-line import/no-extraneous-dependencies
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import pkg from './package.json';

export default {
  input: 'src/spl-collectibles-registry.ts',
  output: [
    { file: pkg.browser, format: 'umd', name: 'splCollectibleList' },
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  plugins: [json(), typescript()],
};
