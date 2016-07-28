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
  const pluginNames = uniq(
    configs.map(
      (config) => config.name
    )
  );

  const plugins = pluginlist.compose(
    pluginlist.unprefix(pluginNames),
    pluginlist.resolve(pluginNames, dir)
  );

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
  const pluginNames = uniq(
    configs.map(
      (config) => config.name
    )
  );

  const plugins = pluginlist.compose(
    pluginlist.unprefix(pluginNames),
    pluginlist.resolve(pluginNames, dir)
  );

  return executer.generate(plugins, configs);
}

module.exports = {
  execute,
  generate,
};
