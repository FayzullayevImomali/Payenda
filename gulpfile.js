'use strict';

let project_folder = require('path').basename(__dirname);
let source_folder = "#src";

let {src , dest}  = require('gulp');
const gulp = require('gulp');
let browsersync = require('browser-sync');
const { pipeline } = require('stream');
let fileInclude = require('gulp-file-include');
let webpHTML = require('gulp-webp-html');
let htmlFormat = require('gulp-format-html');
let webpCSS = require('gulp-webp-css');
let sass = require('gulp-sass')(require('sass'));
let autoPrefixer = require('gulp-autoprefixer');
let groupMedia = require('gulp-group-css-media-queries');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify-es').default;
let imagemin = require('gulp-imagemin');
let imageWEBP = require('gulp-webp');



let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
        icons: project_folder + "/icons/"
    },

    src: {
        html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
        css: source_folder +"/sass/*.{sass,scss}",
        js: source_folder + "/js/*.js",
        fonts: source_folder + "/fonts/",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        icons: source_folder + "/icons/**/*.{jpg,png,svg,gif,ico,webp}"
    },

    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/sass/**/*.{sass,scss}",
        js: source_folder + "/js/*.js",
        fonts: source_folder + "/fonts/",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        icons: source_folder + "/icons/**/*.{jpg,png,svg,gif,ico,webp}"
    }
}

function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify: false
    });
}

const html = function (){
    return src(path.src.html)
        .pipe(htmlFormat())
        .pipe(webpHTML())
        .pipe(fileInclude())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

const css = function () {
    return src(path.src.css)
        .pipe(
            sass({
                outputStyle: 'expanded'
            })
        )
        .pipe(
            groupMedia()
        )
        .pipe(autoPrefixer({
            overrideBrowsersList: ["last 5 versions"],
            cascade: true
        }))
        .pipe(webpCSS())
        .pipe(dest(path.build.css))
        .pipe(cleanCSS())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
        
}

const js = function (){
    return src(path.src.js)
    .pipe(fileInclude())
    .pipe(dest(path.build.js))
    .pipe(
        uglify()
    )
    .pipe(
        rename({
            extname: '.min.js'
        })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}

const image = function () {
    return src(path.src.img)
    .pipe(
        imageWEBP({
            quality:  70
        })
    )
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(
        imagemin({
            // progressive: true,
            // svgPlugins: [{removeViewBox: false}],
            optimizationLevel: 5
        })
    )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}

const icons = function () {
    return src(path.src.icons)
        .pipe(dest(path.build.icons))
        .pipe(browsersync.stream())

}

const fonts = function () {
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts))
        .pipe(browsersync.stream())

}


const watchFiles = function (){
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], image);
    gulp.watch([path.watch.icons], icons);
    gulp.watch([path.watch.fonts], fonts)

}

let build = gulp.series(gulp.parallel(html, css , js, image, icons, fonts));
let watch = gulp.parallel(build,browserSync, watchFiles);


exports.fonts = fonts
exports.icons = icons
exports.image = image
exports.js = js
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;


    
