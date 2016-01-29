var gulp = require('gulp');

gulp.task('less', less);
gulp.task('watch', watch);
gulp.task('default', ['less', 'watch']);

function onError(err) {
	var notify = require('gulp-notify');

    notify.onError({
		title:    'Gulp',
		subtitle: 'Failure!',
		message:  'Error: <%= error.message %>'
	})(err);

	this.emit('end');
}

function less() {
    var less = require('gulp-less'),
        plumber = require('gulp-plumber'),
        concat = require('gulp-concat'),
        rename = require('gulp-rename');

    return gulp.src(['app/app.index.less', 'app/vars.less','app/**/*.less'])
        .pipe(plumber({errorHandler: onError}))
        .pipe(concat('nationalParks.less'))
        .pipe(less({paths: ['bower_components']}))
        .pipe(rename('national-parks.css'))
        .pipe(gulp.dest('static'));
}

function watch() {
    gulp.watch(['src/**/*.less'], ['less']);
}
