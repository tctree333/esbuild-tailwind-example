const postCssPlugin = require('esbuild-style-plugin')

require('esbuild')
  .build({
    entryPoints: ['src/app.jsx', 'src/style.css'],
    outdir: 'public',
    bundle: true,
    minify: true,
    plugins: [
      postCssPlugin({
        postcss: {
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      }),
    ],
  })
  .catch(() => process.exit(1))
