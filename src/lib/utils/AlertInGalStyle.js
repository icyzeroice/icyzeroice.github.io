/**
 * @author Ice Zero 
 * @name galgame-style-alert
 * @description alert class in galgame style
 * 
 * 
 *                                    ^
 *                     /\_/\-----\   /_\
 *  /--------------\   |^_^|    ||/\// V
 *  | Are you OK?  |   V---V----_/  V   
 *  \--------------/       
 * 
 * 
 * @typedef {Object} alertOptions
 * @property {String} message
 * @property {String} galDir
 * @property {String} audioDir
 * 
 * 
 * @function AlertInGalStyle
 * @param { alertOptions } options
 */

(function (global, factory) {

  // check env
  if (typeof global.document === "undefined") {
    throw new Error('I need browser! You can\'t put me in the nodejs environment.');
    process.exit(1);
  } else {
    factory(global);
  }

})( typeof window === "undefined" ? global : window, function (global) {
  
  global.AlertInGalStyle = function (options) {
    
  };



})