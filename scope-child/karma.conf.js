module.exports = function (config) {

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '../bower_components/angular/angular.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      'src/js/*.js',
      'src/template/*.html',
      'test/*.js'
    ],
    exclude: [],
    preprocessors: {
      'src/js/*.js': ['coverage'],
      'src/template/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/template/',
      moduleName: 'templates'
    },
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-ng-html2js-preprocessor'
    ],
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    reporters: [
      'progress',
      'coverage'
    ],
    browsers: [
      'Chrome'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false
  });

}
