const milieu = require('milieu');


const config = milieu('<%= serverConfigName %>', {
  server: {
    url            : 'http://localhost:8000',
    sslCA          : '',
    sslKey         : '',
    sslCert        : '',
    maxResultsLimit: 1000
  },
  mongo: {
    url: 'mongodb://localhost/<%= databaseName %>'
  },
  vault: {
    url  : '',
    token: ''
  },
  logger: {
    sentry: {
      dsn: ''
    },
    console: {
      level                          : 'debug',
      timestamp                      : true,
      handleExceptions               : true,
      humanReadableUnhandledException: true,
      colorize                       : true
    }
  }
});


module.exports = config;
