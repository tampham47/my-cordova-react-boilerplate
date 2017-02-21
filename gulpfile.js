var gulp = require('gulp');
var gutil = require("gulp-util");
var shell = require('gulp-shell')
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var runSequence = require('run-sequence');
var path = require("path");
var preprocess = require('gulp-preprocess');
var packageJson = require('./package.json');
var clean = require('gulp-clean');
var myip = require('quick-local-ip');

const WEBPACK_NETWORK_IP = myip.getLocalIP4();
const WEBPACK_SERVER_HOST = 'http://' + WEBPACK_NETWORK_IP;
const WEBPACK_SERVER_PORT = 8000;
const PHONEGAP_SERVER_PORT = 8001;
const STATIC_PATH = 'static';
const BUNDLE_FILE = 'bundle.js';
const APP_NAME = packageJson.name;
const APP_ID = packageJson.id;
const APP_VERSION = packageJson.version;

const srcPath = './src';
const destPath = './www';

var webpackOptionsLoader = {
  test: /.jsx?$/,
  loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-0'],
  include: path.join(__dirname, 'src'),
  exclude: /node_modules/
};

var webpackOptions = {
  module: {
    loaders: [
      webpackOptionsLoader,
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, destPath + '/' + STATIC_PATH + '/'),
    filename: BUNDLE_FILE
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/bootstrap-sass/assets/stylesheets/'),
      path.resolve(__dirname, './node_modules/skeleton-scss/scss/'),
      path.resolve(__dirname, './node_modules/compass-mixins/lib/')
    ]
  },
  eslint: {

  },
  debug: true,
  progress: false,
  emitError: true,
  emitWarning: true,
  failOnError: true,
  stats: {
    colors: true,
    reasons: true
  },
  devtool: 'source-map'
};

/**
 * remove release directory, which allow to install new cordova project
 */
gulp.task('clear-release', function () {
  return gulp.src('release', {read: false})
    .pipe(clean());
});

/**
 * copy non bundled files from src to dist directory
 */
gulp.task('copy-layout', function() {
  return gulp.src(['./src/index.html'])
    .pipe(preprocess({
      context: {
        BUNDLE_PATH: './' + STATIC_PATH + '/' + BUNDLE_FILE,
        APP_NAME: APP_NAME
      }
    }))
    .pipe(gulp.dest(destPath))
});

gulp.task('copy-static', function() {
  return gulp.src(['./src/static/**/*'])
    .pipe(gulp.dest(destPath))
});

/**
 * copy non bundled files from src to dist directory with path to hot loader server
 */
gulp.task('copy-layout-hot', function() {
  return gulp.src(['./src/index.html'])
    .pipe(preprocess({
      context: {
        BUNDLE_PATH: WEBPACK_SERVER_HOST + ':' + WEBPACK_SERVER_PORT +'/' + STATIC_PATH + '/' + BUNDLE_FILE,
        APP_NAME: APP_NAME
      }
    }))
    .pipe(gulp.dest(destPath))
});

/**
 * Compile react jsx ES6 & ES7 to ES5 js
 */
gulp.task('compile-react', function(done) {
  webpack(webpackOptions, function(err, stats) {
    if(err) console.log(err);
    gutil.log("[webpack]", stats.toString({}));
    done();
  });
});

/**
 * Compile react jsx ES6 & ES7 to ES5 js and run webpack hot loader server
 */
gulp.task('compile-react-hot', function(done) {
  webpackOptions.entry = [
    'webpack-dev-server/client?' + WEBPACK_SERVER_HOST + ':' + WEBPACK_SERVER_PORT,
    'webpack/hot/only-dev-server'
  ].concat(webpackOptions.entry);
  webpackOptions.plugins = [
    new webpack.HotModuleReplacementPlugin({})
  ];
  webpackOptionsLoader.loaders.unshift('react-hot');
  webpackOptions.output.publicPath = WEBPACK_SERVER_HOST + ':' + WEBPACK_SERVER_PORT + '/' + STATIC_PATH + '/';

  new WebpackDevServer(webpack(webpackOptions), {
    hot: true,
    publicPath: '/' + STATIC_PATH + '/'
  }).listen(WEBPACK_SERVER_PORT, WEBPACK_NETWORK_IP, function(err) {
    if(err) console.log(err);
    done();
    console.log('webpack dev server listening at ' + WEBPACK_SERVER_HOST + ':' + WEBPACK_SERVER_PORT);
  });
});

/**
 * Clear previous html code from release/www
 */
gulp.task('clear-cordova-www', function () {
  return gulp.src(destPath, {read: false})
    .pipe(clean());
});

gulp.task('run-browser', shell.task('http-server www/'));
gulp.task('cordova-prepare', shell.task('cordova prepare'));
gulp.task('cordova-prepare-ios', shell.task('cordova prepare ios'));

/**
 * Fill cordova project with proper html, js, css
 */
gulp.task('prepare-build', function(done) {
  runSequence('clear-cordova-www', 'copy-layout', 'compile-react', 'copy-static', 'cordova-prepare-ios', done);
});

gulp.task('start-dev', function(done) {
  runSequence('clear-cordova-www', 'copy-layout-hot', 'copy-static', 'compile-react-hot', 'run-browser', done);
});
