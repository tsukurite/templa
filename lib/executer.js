'use strict';

/**
 * config pass to plugin
 *
 * @param {Object} plugins
 * @param {Object[]} configs
 * @return {String[]}
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function execute(plugins, configs) {
  if (plugins === null || (typeof plugins === 'undefined' ? 'undefined' : _typeof(plugins)) !== 'object') {
    throw new TypeError('plugins must be an Object');
  }

  if (!Array.isArray(configs)) {
    throw new TypeError('configs must be an Array');
  }

  return configs.map(function (config) {
    return plugins[config.name](config.data);
  });
}

/**
 * config pass to plugin
 *
 * @param {Object} plugins
 * @param {Object[]} configs
 * @return {String}
 */
function generate(plugins, configs) {
  return execute(plugins, configs).join('\n');
}

module.exports = {
  execute: execute,
  generate: generate
};