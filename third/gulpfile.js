const gulp = require('gulp');
const babel = require('gulp-babel');

// 执行默认default task之前先执行praise task
gulp.task('default', ['praise'], () => {
	// 执行watch，监控相关文件的变化
	gulp.watch(['src/**/*.es', '!src/public/*/*.es'], ['praise'])
})
// praise task 将ECMAScript6文件通过gulp-babel编译成es2015
gulp.task('praise', () => {
	return gulp.src(['src/**/*.es', '!src/public/*/*.es'])
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(gulp.dest('./build'))
});