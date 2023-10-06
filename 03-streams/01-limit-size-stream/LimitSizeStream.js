const stream = require('stream');
const LimitExceededError = require('./LimitExceededError');

class LimitSizeStream extends stream.Transform {
  constructor(options) {
    super(options);
    this.byteCount = 0;
    this.limit = options.limit;
  }

  _transform(chunk, encoding, callback) {
    this.byteCount = this.byteCount + chunk.byteLength;

    if (this.byteCount > this.limit) {
      return callback(new LimitExceededError());
    }

    callback(null, chunk);
  }
}

module.exports = LimitSizeStream;
