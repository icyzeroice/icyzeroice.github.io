function addScript(filePath) {
  let node = document.createElement('script');
  node.src = filePath;
  document.body.appendChild(node);
}

Module.require('./src/lib/ConsoleInStyle.js');

/**
 * @name icyRMD.js
 * @description Response Module Definition
 * 
 * 
 * 
 */
const Module = Object.create(null)

Module.require = addScript