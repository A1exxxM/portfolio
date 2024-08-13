const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const server = require("gulp-server-livereload");
const clean = require("gulp-clean");
const fs = require('fs');
// const maps = require('gulp-sourcemaps');
const media = require("gulp-group-css-media-queries");
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const webpack = require('webpack-stream');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const htmlclean = require('gulp-htmlclean');
const webp = require('gulp-webp');
const webpHTML = require('gulp-webp-html');
const webpCss = require('gulp-webp-css');






const plumberNotify = (title) => {
    return {
        errorHandler: notify.onError({
            title: title,
            message: 'Error <%= error.message %>',
            sound: false
        })
    }
}

const fileIncludeSettings = {
    prefix: '@@',
    basepath: '@file',
}

const serverSettings = {
    livereload: true,
    open: true
}


gulp.task('html:prod', function(){
    return gulp.src('./src/*.html')
        .pipe(changed('./docs/'), {hasChanged: changed.compareContents})
        .pipe(plumber(plumberNotify('html')))
        .pipe(fileInclude(fileIncludeSettings))
        .pipe(webpHTML())
        .pipe(htmlclean())
        .pipe(gulp.dest('./docs/'))
})

gulp.task('sass:prod', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(changed('./docs/css/'))
        .pipe(plumber(plumberNotify('css')))
        .pipe(autoprefixer())
        .pipe(sassGlob())
        .pipe(webpCss())
        .pipe(sass())
        .pipe(media())
        .pipe(csso())
        .pipe(gulp.dest('./docs/css'))
})

gulp.task('images:prod', function(){
    return gulp.src('./src/img/**/*', {encoding: false})
    .pipe(changed('./docs/img/'))
    .pipe(webp())
    .pipe(gulp.dest('./docs/img'))
    .pipe(gulp.src('./src/img/**/*', {encoding: false}))
    .pipe(changed('./docs/img/'))
    .pipe(imagemin({verbose: true}))
    .pipe(gulp.dest('./docs/img'))
})

gulp.task('fonts:prod', function(done){
    if (fs.existsSync('./src/fonts/')) {
        return gulp.src('./src/fonts/**/*')
            .pipe(changed('./docs/fonts/'))
            .pipe(gulp.dest('./docs/fonts'))
    }
    done();
})

gulp.task('files:prod', function(done){
    if (fs.existsSync('./src/files/')) {
        return gulp.src('./src/files/**/*')
            .pipe(changed('./docs/files'))
            .pipe(gulp.dest('./docs/files'))
    }
    done();
})

gulp.task('server:prod', function(){
    return gulp.src('./docs/')
        .pipe(server(serverSettings))
})

gulp.task('clean:prod', function(done){
    if (fs.existsSync('./docs/')) {
        return gulp.src('./docs/', {read: false})
            .pipe(clean());
    }
    done();
})

gulp.task('js:prod', function(){
    return gulp.src('./src/js/*.js')
        .pipe(changed('./docs/js/'))
        .pipe(plumber(plumberNotify('js')))
        .pipe(babel())
        .pipe(webpack(require('./../webpack.config.js')))
        .pipe(gulp.dest('./docs/js'))
});







