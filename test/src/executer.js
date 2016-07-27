'use strict';

const assert = require('power-assert');

const executer = require('../../lib/executer');

describe('executer', function() {

  describe('execute()', function() {

    it('throws TypeError', function() {
      assert.throws(function() {
        executer.execute(null, []);
      });
      assert.throws(function() {
        executer.execute({}, null);
      });
    });

    it('execute plugin process', function() {
      const plugins = {
        aaa: function(data) {
          return String(data.text).replace(/./g, 'a');
        },
        bbb: function(data) {
          return String(data.text).replace(/./g, 'b');
        },
      };

      const configs = [
        {
          name: 'aaa',
          data: {
            text: '---',
          },
        },
        {
          name: 'bbb',
          data: {
            text: '---',
          },
        },
      ];

      assert.deepEqual(
        executer.execute(plugins, configs), ['aaa', 'bbb']
      );
    });

  });

  describe('generate()', function() {

    it('execute plugin process', function() {
      const plugins = {
        aaa: function(data) {
          return String(data.text).replace(/./g, 'a');
        },
        bbb: function(data) {
          return String(data.text).replace(/./g, 'b');
        },
      };

      const configs = [
        {
          name: 'aaa',
          data: {
            text: '---',
          },
        },
        {
          name: 'bbb',
          data: {
            text: '---',
          },
        },
      ];

      assert(executer.generate(plugins, configs), 'aaa\nbbb');
    });

  });

});
