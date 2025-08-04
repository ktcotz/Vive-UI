import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import * as path from 'path';
import json from '@rollup/plugin-json';
import tailwindcssPostcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.ts', '.tsx', '.js', '.jsx'];

export default {
  input: {
    index: 'src/index.ts',
    cli: 'src/bin/cli.ts',
  },
  output: {
    dir: 'dist',
    format: 'esm',
    entryFileNames: '[name].js',
  },
  external: ['react', 'react-dom', 'clsx', 'inquirer', 'node-fetch', 'fs', 'path'],
  plugins: [
    alias({
      entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    }),
    resolve({ extensions }),
    json(),

    commonjs(),
    postcss({
      extract: 'styles.css',
      minimize: true,
      sourceMap: false,
      plugins: [tailwindcssPostcss(), autoprefixer()],
    }),
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true,
      clean: true,
    }),
    terser(),
  ],
};
