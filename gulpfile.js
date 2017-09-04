var gulp = require('gulp'),
watch = require('gulp-watch');

/* -------------------------
DEFAULT Task (RUNS DEFAULT BY CMD GULP IN CMD)
-------------------------- */
gulp.task('default', function(){
console.log("Hooray - you created a gulp task.");
});

/* -------------------------
HTML Task -
-------------------------- */
gulp.task('html', function(){
  console.log("imagine something useful to your html here");
});
/* -------------------------
CSS Styles Task -
-------------------------- */
gulp.task('styles', function(){
  console.log("Imagine Sass or PostCSS tasks running here.");
});

/* -------------------------
Watch Task - Starts a watcher for changes on listed files
-------------------------- */
gulp.task('watch', function(){

  //HTML
  watch('./app/index.html', function(){
    gulp.start('html');
  });

  //CSS
  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });

});
