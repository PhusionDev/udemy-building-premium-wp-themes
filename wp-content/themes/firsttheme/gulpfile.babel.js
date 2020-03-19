// var gulp = require('gulp');

// gulp.task('default', defaultTask);

// function defaultTask(done) {
//   console.log('hey');

//   done();
// }

// gulp.task('hello', function(done) {
//   console.log('hello');
//   done();
// })

import gulp from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import gulpif from 'gulp-if';

const PRODUCTION = yargs.argv.prod;

export const styles = (done) => {
  return gulp.src('src/assets/scss/bundle.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(PRODUCTION, cleanCSS({compatibility: 'ie8'})))
    .pipe(gulp.dest('dist/assets/css'));
}

// export default hello;