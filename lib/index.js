'use strict';

var uniq = require('lodash.uniq');

var executer = require('./executer'),
    pluginlist = require('./pluginlist'),
    plugin = require('./plugin');

/**
 * execute compile
 *
 * @param {Object[]} configs
 * @param {String} [dir]
 * @return {String[]}
 */
function execute(configs, dir) {
  var plugins = collectPlugins(configs, dir);

  return executer.execute(plugins, unprefixConfigName(configs));
}

/**
 * generate compiled text
 *
 * @param {Object[]} configs
 * @param {String} [dir]
 * @return {String}
 */
function generate(configs, dir) {
  var plugins = collectPlugins(configs, dir);

  return executer.generate(plugins, unprefixConfigName(configs));
}

/**
 * collect plugins
 *
 * @param {Object[]} configs
 * @param {String} [dir]
 * @return {String}
 */
function collectPlugins(configs, dir) {
  var pluginNames = uniq(configs.map(function (config) {
    return config.name;
  }));

  return pluginlist.compose(pluginlist.unprefix(pluginNames), pluginlist.resolve(pluginNames, dir));
}

/**
 * unprefix config name within configs
 *
 * @param {Object[]} configs
 * @return {Object[]}
 */
function unprefixConfigName(configs) {
  return configs.map(function (config) {
    return Object.assign({}, config, {
      name: plugin.unprefix(config.name)
    });
  });
}

module.exports = {
  execute: execute,
  generate: generate
};