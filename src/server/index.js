import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { PrerenderedControler } from 'react-prerendered-component';

import fs from 'fs';
import path from 'path';
import cheerio from 'cheerio';

import App from '../app';

const templatePath = path.join(__dirname, '..', 'client', 'index.html');
const HTML_TEMPLATE = fs.readFileSync(templatePath).toString();

const app = express();

app.use('/static', express.static(`${__dirname}/../client`));

app.get('/*', (req, res) => {
  // Generate the server-rendered HTML using the appropriate router
  const context = {};
  const markup = ReactDOM.renderToString(
    <PrerenderedControler isServer><App counter={10} /></PrerenderedControler>
  );
  const $template = cheerio.load(HTML_TEMPLATE);
  $template('#app').html(markup);
  res.send($template.html());
});

const port = process.env.PORT || 1234;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
