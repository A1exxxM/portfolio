const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const server = require("gulp-server-livereload");
const clean = require("gulp-clean");
const fs = require('fs');
// const maps = require('gulp-sourcemaps');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const webpack = require('webpack-stream');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');




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


gulp.task('html', function(){
    return gulp.src('./src/*.html')
        .pipe(changed('./dist/'))
        // .pipe(plumber(plumberNotify('html')))
        .pipe(fileInclude(fileIncludeSettings))
        .pipe(gulp.dest('./dist/'))
})

gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(changed('./dist/css/'))
        // .pipe(plumber(plumberNotify('css')))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('images', function(){
    return gulp.src('./src/img/**/*', {encoding: false})
    .pipe(changed('./dist/img/'))
    .pipe(imagemin({verbose: true}))
    .pipe(gulp.dest('./dist/img'))
})

gulp.task('icons', function(){
    return gulp.src('./src/icons/**/*', {encoding: false})
    .pipe(changed('./dist/icons/'))
    .pipe(imagemin({verbose: true}))
    .pipe(gulp.dest('./dist/icons'))
})

gulp.task('fonts', function(done){
    if (fs.existsSync('./src/fonts/')) {
        return gulp.src('./src/fonts/**/*')
            .pipe(changed('./dist/fonts/'))
            .pipe(gulp.dest('./dist/fonts'))
    }
    done();
})

gulp.task('files', function(done){
    if (fs.existsSync('./src/files/')) {
        return gulp.src('./src/files/**/*')
            .pipe(changed('./dist/files'))
            .pipe(gulp.dest('./dist/files'))
    }
    done();
})

gulp.task('server', function(){
    return gulp.src('./dist/')
        .pipe(server(serverSettings))
})

gulp.task('clean', function(done){
    if (fs.existsSync('./dist/')) {
        return gulp.src('./dist/', {read: false})
            .pipe(clean());
    }
    done();
})

gulp.task('js', function(){
    return gulp.src('./src/js/*.js')
        .pipe(changed('./dist/js/'))
        // .pipe(plumber(plumberNotify('js')))
        .pipe(webpack(require('./../webpack.config.js')))
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('watch', function(){
    gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass'))
    gulp.watch('./src/**/*.html', gulp.parallel('html'))
    gulp.watch('./src/img/**/*', gulp.parallel('images'))
    gulp.watch('./src/icons/**/*', gulp.parallel('icons'))
    gulp.watch('./src/fonts/**/*', gulp.parallel('fonts'))
    gulp.watch('./src/files/**/*', gulp.parallel('files'))
    gulp.watch('./src/js/**/*.js', gulp.parallel('js'))
})

