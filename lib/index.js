module.exports = DevNullProvider;

function DevNullProvider(options, helpers, callback) {
  if (!(this instanceof DevNullProvider)) return new DevNullProvider(options);

  callback = callback || function () {
  };

  var self = this;

  this.name = 'DevNullProvider';
  this.options = options;
  this.logger = helpers.logger;
  this.common = helpers.common;

  this.client = null;
  this.db = null;
  this.dbs = {};

  return this.init(options, function (err) {
    if (err)
      return callback(err);

    return callback(null, self);
  });
}

DevNullProvider.prototype.init = function (options, callback) {
  callback = callback || function () {
  };

  var self = this;
  return callback();
};

DevNullProvider.prototype.destroy = function (callback) {
  callback = callback || function () {
  };

  var self = this;

  self.logger.info('Destroying connection to provider [/dev/null].');
    return callback(null);
};

DevNullProvider.prototype.find = function (options, callback) {
  callback = callback || function () {
  };

  var self = this;
  return callback(null);
};

DevNullProvider.prototype.delete = function (options, callback) {
  callback = callback || function () {
  };

  var self = this;

  return callback(null);
};

DevNullProvider.prototype.update = function (options, callback) {
  callback = callback || function () {
  };

  var self = this;
  return callback(null);
};

DevNullProvider.prototype.insert = function (collection, documents, options, callback) {
  callback = callback || function () {
  };

  var self = this;

};

DevNullProvider.prototype.query = function (context, query, callback) {
  callback = callback || function () {
  };
  var self = this;

  return callback(new Error('not implemented'));
};

DevNullProvider.prototype.openConnection = function (name, options, callback) {
  callback = callback || function () {
  };

  var self = this;

  this.logger.trace('Open /dev/null connection');
  return callback(null);
};

DevNullProvider.prototype.closeConnection = function (db, callback) {
  callback = callback || function () {
  };

  var self = this;

  return callback(null);
};

DevNullProvider.prototype.checkConnection = function (db, callback) {
  callback = callback || function () {
  };

  var self = this;

  return callback(null);
};

DevNullProvider.prototype.stats = function (collectionName, callback) {
  callback = callback || function () {
  };

  var self = this;

  return callback(null, {});
};

DevNullProvider.prototype.drop = function (collectionName, callback) {
  callback = callback || function () {
  };

  var self = this;
  return callback(null, {});
};

DevNullProvider.prototype.purge = function (callback) {
  callback = callback || function () {
  };

  var self = this;

  return callback(null, {});
};
