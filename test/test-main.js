/* eslint no-undef: 0 global-require: 0  */
var tests = [];
var modules = [];
var SPEC_REGEXP = /spec\.js$/;
var VIEWMODEL_REGEXP = /viewModels\//;
var JS_REGEXP = /\.js$/;

var jsToModule = function (path) {
    return path.replace(/^\/base\/src\/js\//, '').replace(/\.js$/, '');
};

// eslint-disable-next-line
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (SPEC_REGEXP.test(file)) {
            tests.push(file);
        } else if (VIEWMODEL_REGEXP.test(file) && JS_REGEXP.test(file)) {
            modules.push(jsToModule(file));
        }
    }
}

var startTest = function () {
    // Load the modules before calling karma start.
    require(modules, function () {
        window.__karma__.start();
    });
};

requirejs.config({
    baseUrl: '/base/web/js',

    paths:
  {
      knockout: 'libs/knockout/knockout-3.4.2.debug',
      jquery: 'libs/jquery/jquery-3.3.1',
      'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.1',
      promise: 'libs/es6-promise/es6-promise',
      hammerjs: 'libs/hammer/hammer-2.0.8',
      ojdnd: 'libs/dnd-polyfill/dnd-polyfill-1.0.0',
      ojs: 'libs/oj/v5.2.0/debug',
      ojL10n: 'libs/oj/v5.2.0/ojL10n',
      ojtranslations: 'libs/oj/v5.2.0/resources',
      text: 'libs/require/text',
      signals: 'libs/js-signals/signals',
      customElements: 'libs/webcomponents/custom-elements.min',
      css: 'libs/require-css/css'
  },

    shim:
  {
      jquery:
    {
        exports: ['jQuery', '$']
    }
  },
    deps: tests,
    callback: startTest
});
