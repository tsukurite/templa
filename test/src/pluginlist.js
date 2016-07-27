'use strict';

const assert = require('power-assert');

const pluginlist = require('../../lib/pluginlist');

describe('pluginlist', function() {

  describe('compose()', function() {

    it('throws TypeError', function() {
      assert.throws(function() {
        pluginlist.compose(null, []);
      });
      assert.throws(function() {
        pluginlist.compose([], null);
      });
    });

    it('returns Object', function() {
      const expect = {
        a: 1,
        b: 2,
        c: 3,
      };

      assert.deepEqual(
        pluginlist.compose(['a', 'b', 'c'], [1, 2, 3]), expect
      );
    });

  });

});
