'use strict';

var path = require('path');

/**
 * load plugin
 *
 * @param {String} name
 * @return {*}
 */
function load(name) {
  try {
    return require(name);
  } catch (e) {
    return null;
  }
}

/**
 * resolve plugin
 *
 * @param {String} name
 * @param {String} [dir]
 * @return {*}
 */
function resolve(name) {
  var dir = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  if (dir === null) {
    return load('templa-te-' + name) || load(name);
  }

  return load(path.resolve(dir, 'templa-te-' + name)) || load(path.resolve(dir, name));
}

/**
 * remove prefix
 *
 * @param {String} name
 * @return {String}
 */
function unprefix(name) {
  return name.replace(/^templa-te-/i, '');
}

module.exports = {
  load: load,
  resolve: resolve,
  unprefix: unprefix
};