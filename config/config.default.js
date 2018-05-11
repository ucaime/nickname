'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1525957487277_3687';

  // add your config here
  config.middleware = [];

  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '12321',
      database: 'nickname',
    },
    app: true,
    agent: false,
  };
  return config;
};
