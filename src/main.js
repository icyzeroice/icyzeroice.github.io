const test = IcyModule.import('/test')

IcyModule.export = {
  test: function () {
    console.log('module 1')
  }
}

IcyModule.import('test')
