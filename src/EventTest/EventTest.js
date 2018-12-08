window.addEventListener('keydown', eventDecorator('keydown'))
window.addEventListener('click', eventDecorator('click'))
window.addEventListener('mousedown', eventDecorator('mousedown'))

function eventDecorator(label, fn) {

  return function eventPrinter(e) {
    label ? console.log(`%c[${label}]`, 'color:#0000ff', e)
          : console.log(e)
    fn && fn(e)
  }
}