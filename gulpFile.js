var gulp=require("gulp");
var sass=require("gulp-sass");

gulp.task('sass',function(){
	gulp.src('public/sass/main.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('public/css'))
});
gulp.task("sass:watch",function(){
	gulp.watch('public/sass/**.scss',['sass']);
});