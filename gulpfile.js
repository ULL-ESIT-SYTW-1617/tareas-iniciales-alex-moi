var gulp  = require('gulp');
var shell = require('gulp-shell');

gulp.task('deploy', function () {
  return gulp.src('').pipe(shell(["./scripts/deploy-gitbook"]));
});

gulp.task('build', function() {
  return gulp.src('').pipe(shell(['./scripts/generate-gitbook']));
});


/*gulp.task('prueba',function() {
   return gulp.src('').pipe(shell(['gitbook build `pwd` ./gh-pages'])); 
});
*/