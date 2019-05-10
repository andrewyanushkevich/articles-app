const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');


module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
      ["server"]: path.resolve(__dirname, 'src/server'),
      ["client"]: path.resolve(__dirname, 'src/client'),
  }
  return config;
};
