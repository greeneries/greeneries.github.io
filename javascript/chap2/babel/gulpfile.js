const gulp = require('gulp');
const babel = requre('gulp-bable');

gulp.task('default', function(){
 // 노드 소스
  gulp.src("es6/**/**.js").pipe(bable()).pipe(gulp.dest("dest"));

  //브라우저 소스
  gulp.src("public/es6/**/*.js").pipe(babel()).pipe(gulp.dest("public/dist"));
});
