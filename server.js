import express from 'express';

import url from 'url';
import path from 'path';
import { fileURLToPath } from 'url';

import init from './init.js';
import { fetchEvents } from './services/events.js';

const { ER_USERNAME } = process.env;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();
const port = 3000;

const redisClient = await init();

const token = await redisClient.get(`token:${ER_USERNAME}`)
  .then((value) =>
    JSON.parse(value)
  );

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/web/index.html'));
});

server.get('/events', async (req, res) => {
  const queryString = url.parse(req.url).query;

  const events = await fetchEvents(token.access_token, queryString);

  res.json(events?.data?.results);
});

server.listen(port, () => {
  console.log(`Now listening on port ${port}`)
})
