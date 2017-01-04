var gulp = require( 'gulp' ),
		bower = require( 'main-bower-files' ),
		filter = require( 'gulp-filter' ),
		order = require( 'gulp-order' ),
		concat = require( 'gulp-concat' ),
		uglify = require( 'gulp-uglify' ),
		stylus = require( 'gulp-stylus' ),
		cssmin = require( 'gulp-cssmin' ),
		imagemin = require( 'gulp-imagemin' ),
		notify = require( 'gulp-notify' ),
		webserver = require( 'gulp-webserver' ),
		del = require( 'del' );


var styles = 'source/stylus/app.styl';
var scripts = 'source/app/**/*.js';
var html = 'source/**/*.html';
var images = 'source/images/**/*';
var dest = 'public/';


gulp.task( 'vendors', function() {
	var jsFilter = filter( '**/*.js', { restore: true } );
	var cssFilter = filter( '**/*.css', { restore: true } );
	return gulp.src( bower() )
		.pipe( jsFilter )
			.pipe( order([
				'bower_components/angular/angular.js',
				'bower_components/**/*.js'
			], { base: './' } ) )
			.pipe( concat( 'vendors.js' ) )
			.pipe( gulp.dest( dest + 'assets/js' ) )
			.pipe( jsFilter.restore )
		.pipe( cssFilter )
			.pipe( order([
				'bower_components/normalize-css/normalize.css',
				'bower_components/**/*.css'
			], { base: './' } ) )
			.pipe( concat( 'vendors.css' ) )
			.pipe( gulp.dest( dest + 'assets/css' ) )
			.pipe( notify( 'Vendors ok!' ) );
});


gulp.task( 'styles', function() {
	return gulp.src( styles )
		.pipe( stylus() )
		.pipe( concat( 'app.css' ) )
		.pipe( gulp.dest( dest + 'assets/css' ) )
		.pipe( notify( 'Styles ok!' ) );
});


gulp.task( 'scripts', function() {
	gulp.src( scripts )
		.pipe( order([
			'source/app/00-base/_app.module.js',
			'source/app/00-base/_app.config.js',
			'source/app/**/*.js'
		], { base: './' } ) )
		.pipe( concat( 'app.js' ) )
		.pipe( gulp.dest( dest + 'assets/js' ) )
		.pipe( notify( 'Scripts ok!' ) );
});


gulp.task( 'images', function() {
	return gulp.src( images )
		.pipe( imagemin( { optimizationLevel: 3, progressive: true, interlaced: true } ) )
  	.pipe( gulp.dest( dest + 'assets/images' ) );
});


gulp.task( 'html', function() {
	return gulp.src( html )
		.pipe( gulp.dest( dest ) );
});


gulp.task( 'clean', function() {
	return del.sync( dest );
});


gulp.task( 'compress', function() {
	var jsFilter = filter( '**/*.js', { restore: true } );
	var cssFilter = filter( ['**/*.css', styles], { restore: true } );

	del.sync( dest );

	gulp.src( bower().concat( scripts ) )
		.pipe( jsFilter )
		.pipe( order([
			'bower_components/angular/angular.js',
			'bower_components/**/*.js',
			'source/app/00-base/app.module.js',
			'source/app/**/*.js'
		], { base: './' } ) )
		.pipe( concat( 'all.min.js' ) )
		.pipe( uglify() )
		.pipe( gulp.dest( dest + 'assets/js' ) )
		.pipe( jsFilter.restore );

	gulp.src( bower().concat( styles ) )
		.pipe( cssFilter )
		.pipe( stylus() )
		.pipe( order([
			'bower_components/normalize-css/normalize.css',
			'bower_components/**/*.css',
			styles
		], { base: './' } ) )
		.pipe( concat( 'all.min.css' ) )
		.pipe( cssmin() )
		.pipe( gulp.dest( dest + 'assets/css' ) )
		.pipe( notify( 'Build ok!' ) );
});


gulp.task( 'server', function() {
	gulp.src( 'public/' )
		.pipe( webserver({
			livereload: true
		}) );
});


gulp.task( 'start', ['vendors', 'styles', 'scripts', 'html', 'images']);

gulp.task( 'build', ['compress', 'html', 'images']);

gulp.task( 'watch', function() {
	gulp.watch( 'bower_components/**/*', ['vendors'] );
	gulp.watch( 'source/stylus/**/*', ['styles'] );
	gulp.watch( 'source/app/**/*', ['scripts'] );
	gulp.watch( 'source/images/**/*', ['images'] );
	gulp.watch( 'source/**/*.html', ['html'] );
});
