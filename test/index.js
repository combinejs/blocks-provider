/* global before, after, beforeEach, describe, it */

const assert          = require('chai').assert,
      fs              = require('fs'),
      path            = require('path'),
      mkdirp          = require('mkdirp'),
      rimraf          = require('rimraf'),
      blocksProvider  = require('../index');


describe('provide test', function() {

    before('create blocks/testBlock', function() {
        mkdirp.sync(path.resolve('./blocks'));

        let testBlock = `TestBlock`;

        fs.writeFileSync(path.resolve('./blocks/test-block.comb'), testBlock);
    });

    describe('testing', function() {
        it('provide test', function() {
            let node = blocksProvider('TestBlock');

            assert.equal(node.name, 'TestBlock');
        });
    });

    after('clear up', function() {
        rimraf.sync(path.resolve('./blocks/'));
    });
});