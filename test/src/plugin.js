'use strict';

const path = require('path');

const assert = require('power-assert');

const plugin = require('../../lib/plugin');

describe('plugin', function() {

  describe('load()', function() {

    it('returns null if it is unknown plugin', function() {
      assert(plugin.load('unknown') === null);
    });

  });

  describe('resolve()', function() {

    it('resolves plugin', function() {
      const dir = path.join(__dirname, '../../node_modules');

      assert(plugin.resolve('mocha', dir) !== null);
    });

  });

  describe('unprefix()', function() {

    it('unprefix from name', function() {
      assert(plugin.unprefix('templa-te-aaa') === 'aaa');
      assert(plugin.unprefix('-templa-te-aaa') === '-templa-te-aaa');
    });

  });

});
