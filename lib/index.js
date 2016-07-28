'use strict';

var uniq = require('lodash.uniq');

var executer = require('./executer'),
    pluginlist = require('./pluginlist');

/**
 * execute compile
 *
 * @param {Object[]} configs
 * @param {String} [dir]
 * @return {String[]}
 */
function execute(configs, dir) {
  var pluginNames = uniq(configs.map(function (config) {
    return config.name;
  }));

  var plugins = pluginlist.compose(pluginlist.unprefix(pluginNames), pluginlist.resolve(pluginNames, dir));

  return executer.execute(plugins, configs);
}

/**
 * generate compiled text
 *
 * @param {Object[]} configs
 * @param {String} [dir]
 * @return {String}
 */
function generate(configs, dir) {
  var pluginNames = uniq(configs.map(function (config) {
    return config.name;
  }));

  var plugins = pluginlist.compose(pluginlist.unprefix(pluginNames), pluginlist.resolve(pluginNames, dir));

  return executer.generate(plugins, configs);
}

module.exports = {
  execute: execute,
  generate: generate
};