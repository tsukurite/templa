'use strict';

const fromPairs = require('lodash.frompairs'),
      zip = require('lodash.zip');

const plugin = require('./plugin');

/**
 * compose Object from Arrays
 *
 * @param {String[]} names
 * @param {*[]} plugins
 * @return {Object}
 */
function compose(names, plugins) {
  if (!Array.isArray(names)) {
    throw new TypeError('names must be an Array');
  }

  if (!Array.isArray(plugins)) {
    throw new TypeError('plugins must be an Array');
  }

  return fromPairs(
    zip(names, plugins)
  );
}

/**
 * resolve plugins
 *
 * @param {String[]} names
 * @param {String} dir
 * @param {*[]}
 */
function resolve(names, dir) {
  if (!Array.isArray(names)) {
    throw new TypeError('names must be an Array');
  }

  return names.map(
    (name) => plugin.resolve(name, dir)
  );
}

/**
 * remove prefix
 *
 * @param {String[]} names
 * @param {String[]}
 */
function unprefix(names) {
  if (!Array.isArray(names)) {
    throw new TypeError('names must be an Array');
  }

  return names.map(
    (name) => plugin.unprefix(name)
  );
}

module.exports = {
  compose,
  resolve,
  unprefix,
};
