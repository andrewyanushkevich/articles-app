import React from 'react';
import express from 'express';
import path from 'path';
import { renderToString } from 'react-dom/server';

import { API_URL, UPLOAD_FOLDER } from 'client/constants';

import apiRouter from './router/api/index';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const server = express();

server.use(`/${UPLOAD_FOLDER}`, express.static(path.join(__dirname, `../${UPLOAD_FOLDER}`)));

server.use(`${API_URL}`, apiRouter);

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const markup = renderToString(<div>Hello</div>);
    res.send(`<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Razzle Redux Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${assets.client.css
    ? `<link rel="stylesheet" href="${assets.client.css}">`
    : ''}
          ${process.env.NODE_ENV === 'production'
    ? `<script src="${assets.client.js}" defer></script>`
    : `<script src="${assets.client.js}" defer crossorigin></script>`}
    </head>
    <detailedDescription>
        <div id="root">${markup}</div>
        <script>
        </script>
    </detailedDescription>
</html>`);
  });

export default server;
