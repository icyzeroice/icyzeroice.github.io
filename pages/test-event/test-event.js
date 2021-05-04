const EventTest = (function () {
  
  const __TYPE__ = {
    
    // MouseEvent
    CLICK: 'click',
    MOUSEDOWN: 'mousedown',

    // KeyboardEvent
    KEYDOWN: 'keydown',
  }

  const _types = []
  const _fns = []

  return {
    
    __TYPE__,

    add(label, cb) {
      if (!label) return null;

      const fn = e => {
        console.log(`%c[${label}]`, 'color:#ff00ff', e)
        cb && cb(e)
      }

      window.addEventListener(label, fn)

      _types.push(label)
      _fns.push(fn)

      return _fns.length
    },

    remove(handle) {
      // while handle is `null`
      if (!handle) return null;

      const label = _types[handle - 1]
      const fn = _fns[handle - 1]

      window.removeEventListener(label, fn)
    },

    clear(label) {      
      let counter = _fns.length
      
      while (counter > 0) {
        if (label && label !== _types[counter - 1]) {
          counter--
          continue
        }
        this.remove(counter--)
      }

      console.log(`clear ${label} listeners`)
    }
  }
})()

const Toast = (function () {
  
  let _inst = null

  class _Toast {
    constructor() {
      this.target = null
      this._handle = null

      this._init()
    }

    _init() {
      this.target = document.createElement('p')
      this.target.className = 'toast'
      this._off()
      document.body.appendChild(this.target)
    }

    _on() {
      this.target.style.display = 'block'
    }

    _off() {
      this.target.style.display = 'none'
      this._handle = null
    }

    _text(mes) {
      this.target.innerText = mes
    }

    _setTime() {
      this._handle = setTimeout(() => {
        this._off()
      }, 1500)
    }

    _refreshTime() {
      clearTimeout(this._handle)
      this._setTime()
    }

    display(mes) {

      if (!this._handle) {
        this._text(mes)
        this._on()
        this._setTime()
      }

      else {
        this._text(mes)
        this._refreshTime()
      }
    }
  }

  return function () {
    return _inst || new _Toast()
  }
})()

/*
function tapEffect(x, y) {
  const a = document.createElement()
}
*/

const toast = new Toast()


EventTest.add(EventTest.__TYPE__.CLICK, e => toast.display(`(${e.x}, ${e.y}), client(${e.clientX}, ${e.clientY}), layer(${e.layerX}, ${e.layerY}), offset(${e.offsetX}, ${e.offsetY}), page(${e.pageX}, ${e.pageY}), screen(${e.screenX}, ${e.screenY})`))
EventTest.add(EventTest.__TYPE__.MOUSEDOWN, e => toast.display(`(${e.x}, ${e.y}), client(${e.clientX}, ${e.clientY}), layer(${e.layerX}, ${e.layerY}), offset(${e.offsetX}, ${e.offsetY}), page(${e.pageX}, ${e.pageY}), screen(${e.screenX}, ${e.screenY})`))
EventTest.add(EventTest.__TYPE__.KEYDOWN, e => toast.display(`key: ${e.key}, code: ${e.code}, which: ${e.which}`))

