import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/powertodoist-card.js',
  output: {
    file: 'powertodoist-card.js',
    format: 'es',
    sourcemap: false,
  },
  plugins: [
    resolve(),
    terser({
      format: {
        comments: false,
      },
    }),
  ],
};
