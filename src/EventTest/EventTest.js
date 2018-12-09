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

EventTest.add(EventTest.__TYPE__.CLICK)
EventTest.add(EventTest.__TYPE__.MOUSEDOWN)
EventTest.add(EventTest.__TYPE__.KEYDOWN)

/*
function tapEffect(x, y) {
  const a = document.createElement()
}
*/