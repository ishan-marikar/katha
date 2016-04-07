module.exports = require('./lib/katha');
module.exports.create = function(options) {
  return new (require('./lib/katha'))(options);
};
