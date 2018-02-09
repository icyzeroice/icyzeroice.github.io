(function (global, factory) {
  'use strict';

  if (typeof window === 'undefined') {
    factory(global, false);
  } else if (window === global) {
    factory(global, true);
  }

})(window ? window : global, function (global, isBrowser) {
  'use strict';

  // TODO: let
  let fn = {
    _browserConsole: function () {},
    _nodeConsole: function () {},
    _json2inlineCSS: function () {}
  };


  // TODO: function (...rest)
  fn._browserConsole = function () {
    /**
     * @typedef {object} cssObject
     * @property {string} [index: string]
     * 
     * @typedef {object} styleGroup
     * @property {string} mes
     * @property {cssObject} css
     * 
     * @param {styleGroup[]} arguments
     */
    let consoleArray = [], paramIndex = 1;

    if (arguments.length === 0) {
      // input nothing
      console.warn('[Warning](ConsoleInStyle): Nothing happened...');
      return null;
    } else {
      // input string array
      for (let index in arguments) {
        if (fn.isJson(arguments[index]) && arguments[index].mes && arguments[index].css) {
          // FIXME: what if mes is an object?
          consoleArray[0] = (consoleArray[0] ? consoleArray[0] : '') + '%c' + arguments[index].mes;
          consoleArray[paramIndex++] = fn._json2inlineCSS(arguments[index].css);
        } else {
          console.warn(`we can't recognize the style you set, so we display the default console style. We recommend you to use console.log directly.`);
          // TODO: console.log(...arguments);
          console.log.apply(null, arguments);
          return null;
        }
      }

      // TODO: console.log(...consoleArray)
      console.log.apply(null, consoleArray);
    }
  };


  fn.isJson = function (obj) {

    /**
     * {
     *   mes: 'demo',
     *   css: {
     *     'font-size': '16px',
     *     'color': 'red'
     *   }
     * }
     */
    // console.log(typeof obj === 'object', obj.toString() === '[object Object]', !obj.length);
    return typeof obj === 'object' // Array, Object, null, Number() ...
    && obj.toString() === '[object Object]' // ensure json formatter
    && !obj.length; // avoid [{}] style
  }


  fn._json2inlineCSS = function(obj) {
    /**
     * @typedef {object} cssObject
     * @property {string} [index: string]
     * 
     * @param {cssObject} obj
     */
    
    var str = '';

    for (let index in obj) {
      str = str + index + ':' + obj[index] + ';';
    }

    return str;
  }


  // mount considering environment
  if (isBrowser) {
    global.ConsoleInStyle = fn._browserConsole;
  } else {
    global.ConsoleInStyle = fn._nodeConsole;
  }
})

// demo
ConsoleInStyle();

ConsoleInStyle('sss', 'ddd');

// demo
ConsoleInStyle({
  mes: 'ConsoleInStyle: ',
  css: {
    'font-size': '16px',
    'color': 'red'
  }
}, {
  mes: 'v0.0.1',
  css: {
    'background-color': 'yellow',
    'font-size': '14px',
    'color': 'blue'
  }
});
