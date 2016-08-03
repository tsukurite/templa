'use strict';

const uniq = require('lodash.uniq');

const executer = require('./executer'),
      pluginlist = require('./pluginlist');

/**
 * execute compile
 *
 * @param {Object[]} configs
 * @param {String} [dir]
 * @return {String[]}
 */
function execute(configs, dir) {
  const plugins = collectPlugins(configs, dir);

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
  const plugins = collectPlugins(configs, dir);

  return executer.generate(plugins, configs);
}

/**
 * collect plugins
 *
 * @param {Object[]} configs
 * @param {String} [dir]
 * @return {String}
 */
function collectPlugins(configs, dir) {
  const pluginNames = uniq(
    configs.map(
      (config) => config.name
    )
  );

  return pluginlist.compose(
    pluginlist.unprefix(pluginNames),
    pluginlist.resolve(pluginNames, dir)
  );
}

module.exports = {
  execute,
  generate,
};
