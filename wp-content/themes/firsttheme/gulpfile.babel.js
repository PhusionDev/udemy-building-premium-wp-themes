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

const PRODUCTION = yargs.argv.prod;

export const hello = (done) => {
  console.log(PRODUCTION);
  done();
}

export default hello;