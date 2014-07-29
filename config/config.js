var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'bontempi'
    },
    port: 3000,
    db: 'mongodb://localhost/bontempi-development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'bontempi'
    },
    port: 3000,
    db: 'mongodb://localhost/bontempi-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'bontempi'
    },
    port: 3000,
    db: 'mongodb://localhost/bontempi-production'
    
  }
};

module.exports = config[env];
