var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', ['browser-sync'], function () {
  gulp.watch('./public/**/*.*').on('change', browserSync.reload);
  gulp.watch('./www_server/**/*.*').on('change',browserSync.reload);
});

gulp.task('browser-sync',  function(err) {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
    files: ["public/**/*.*","www_server"],
    browser: "chrome",
    port: 5000,
  });
  if(err){
    browserSync.reload;
  }
});
