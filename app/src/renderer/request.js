module.exports = require('request-promise').defaults({
  gzip: true,
  headers: {
    cookie: 'isAdult=1',
  },
});
