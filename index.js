const fs    = require('fs'),
      Case  = require('case'),
      parse = require('@combinejs/parser');

/**
 * Get combine tree for name
 *
 * @param {String} name
 * @returns {CombineNode}
 */
module.exports = function(name) {
    let cwd = process.cwd();

    return parse(fs.readFileSync(
        `${cwd}/blocks/${Case.kebab(name)}.comb`
    ).toString());
};