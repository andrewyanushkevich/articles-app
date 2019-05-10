import express from 'express';
import server from './server/index';

const pathAlias = require('path-alias');

pathAlias.setAlias('server', './src/server');
pathAlias.exportAliasesForClientSide();

if (module.hot) {
  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');
    try {
      server = require('./server/index');
    } catch (error) {
      console.error(error);
    }
  });
  console.info('✅  Server-side HMR Enabled!');
}

const port = process.env.PORT || 8081;

export default express()
  .use((req, res) => server.handle(req, res))
  .listen(port, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`> Started on port ${port}`);
  });
