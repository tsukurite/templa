'use strict';

/**
 * config pass to plugin
 *
 * @param {Object} plugins
 * @param {Object[]} configs
 * @return {String[]}
 */
function execute(plugins, configs) {
  if (plugins === null || typeof plugins !== 'object') {
    throw new TypeError('plugins must be an Object');
  }

  if (!Array.isArray(configs)) {
    throw new TypeError('configs must be an Array');
  }

  return configs.map(
    (config) => plugins[config.name](config.data)
  );
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
  execute,
  generate,
};
