import * as esbuild from 'esbuild';

const isProd = process.argv.some(x => x.includes('prod'));

await esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  format: 'cjs',
  sourcemap: isProd ? 'external' : 'inline',
  keepNames: !isProd,
  minify: isProd,
  tsconfig: 'tsconfig.json',
  outfile: 'dist/index.js',
});
