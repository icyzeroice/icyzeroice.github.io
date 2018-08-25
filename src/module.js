/**
 * @name icyRMD.js
 * @description Response Module Definition
 *
 *
 *
 */
(function (global, factory) {
  // check the compatibility
  factory()

})(typeof self === 'undefined' ? global : self , function () {

  const _ModuleCache = {}

  const IcyModule = new Proxy(Object.create(null), {

    // Module.export
    get(target, key, receiver) {
      return target[key];
    },

    // Module.export = target
    set(target, key, newVal, receiver) {
      if (key === 'export') {
        Object.prototype.toString.call(newVal)
      }
      target[key] = newVal
    }

  })


  IcyModule.MODULE_LOADING = 0
  IcyModule.MODULE_DONE = 1
  IcyModule.MODULE_FAILED = -1





  function _appendScript(url) {
    let _script = document.createElement('script')
    _script.async = true
    _script.src = url
    document.body.appendChild(_script)
  }









  IcyModule.import = function (moduleName) {

  }




  IcyModule.options = function (opt) {
    _ModuleCache.entry = _entryHandler(opt.entry)
  }

  function _entryHandler(url) {
    if (typeof url !== 'string') {
      throw new TypeError('options entry should be string')
    }

    return url.replace(/\.js$/, '') + '.js'
  }



  // export global
  window.IcyModule = IcyModule
})
