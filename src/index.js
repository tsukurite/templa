'use strict';

const uniq = require('lodash.uniq');

const executer = require('./executer'),
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
  const plugins = collectPlugins(configs, dir);

  return executer.execute(
    plugins,
    unprefixConfigName(configs)
  );
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

  return executer.generate(
    plugins,
    unprefixConfigName(configs)
  );
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

/**
 * unprefix config name within configs
 *
 * @param {Object[]} configs
 * @return {Object[]}
 */
function unprefixConfigName(configs) {
  return configs.map(
    (config) => Object.assign({}, config, {
      name: plugin.unprefix(config.name),
    })
  );
}

module.exports = {
  execute,
  generate,
};
