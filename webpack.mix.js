let mix = require('laravel-mix')

mix.setPublicPath('dist/')
    .copy('src/index.html', 'dist/index.html')
    .copyDirectory('src/assets', 'dist/assets')
    .js('src/js/main.js', 'dist/js/')
    .sass('src/scss/main.scss', 'dist/css/')
