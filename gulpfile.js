var gulp = require('gulp');
var less = require('gulp-less');


gulp.task('html',function(){
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('build'))
})

gulp.task('less',function(){
    return gulp.src('app/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('build'))
})
gulp.task('js', function(){
    return gulp.src('app/**/*.js')
        .pipe(gulp.dest('build'))
})
gulp.task('watch',function(){
    gulp.watch('./app/**/*.less',['less'])
    gulp.watch('./app/**/*.html', ['html'])
    gulp.watch('./app/**/*.js',['js'])
})

gulp.task('all',function () {



})