var unirest = require('unirest');
var url = require('url-join');

var BASE_URL = 'http://api.katha.audio/api/v1/';

function Katha(options) {
  this.options = {
    token: options.token,
    email: options.email,
    version: '1.0.0',
    platform: 'Node-Katha (https://github.com/ishan-marikar/katha)',
  };
}

API = Katha.prototype;

API.createRequest = function(resource, data, callback) {
  if (typeof data === 'function') {
    callback = data;
    data = {};
    unirest.get(
        url(BASE_URL, resource)
      )
      .header('X-API-TOKEN', this.options.token)
      .header('X-API-EMAIL', this.options.email)
      .header('API-APP-PLATFORM', this.options.platform)
      .header('API-APP-VER', this.options.version)
      .end(function(response) {
        if (response.error) {
          return callback(response.error, null);
        }
        if (response.headers['x-pagination']) {
          var pages = JSON.parse(response.headers['x-pagination']);
          // TODO: Iterate through the pages and return the whole thing
        }
        return callback(null, response.body);
      });
  } else {
    unirest.post(
        url(BASE_URL, resource)
      )
      .type('json')
      .header('X-API-TOKEN', this.options.token)
      .header('X-API-EMAIL', this.options.email)
      .header('API-APP-PLATFORM', this.options.platform)
      .header('API-APP-VER', this.options.version)
      .send(data)
      .end(function(response) {
        if (response.error) {
          return callback(response.error, null);
        }
        return callback(null, response.body);
      });
  }
};


API.getMe = function(callback) {
  this.createRequest('/users/me', callback);
};

API.getFeeds = function(callback) {
  this.createRequest('/feeds', callback);
};

API.getChannels = function(type, page, callback) {
  this.createRequest('/channels?type=' + type + '?' + 'page=' + page, callback);
};

API.getChannelById = function(id, callback) {
  this.createRequest('/channels/' + id, callback);
};

module.exports = Katha;
