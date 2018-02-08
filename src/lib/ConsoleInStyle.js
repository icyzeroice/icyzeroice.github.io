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
  var fn = {
    _browserConsole: function () {},
    _nodeConsole: function () {},
    _json2css: function () {}
  };


  // TODO: function (...obj)
  fn._browserConsole = function () {
    
    // console.warn(`we can't recognize the style you set, so we display the default console style.`)
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
    return typeof obj === 'object' // Array, Object, null, Number() ...
    && obj.toString() === '[object Object]' // ensure json formatter
    && !obj.length; // avoid [{}] style
  }


  fn._json2css = function(obj) {
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
ConsoleInStyle({
  mes: 'version',
  css: {
    
  }
}, {

});
