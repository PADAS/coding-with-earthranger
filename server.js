import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import init from './init.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();
const port = 3000;

const redisClient = await init();

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/web/index.html'));
});

server.get('/events', async (req, res) => {
  const events = await redisClient.get('events');
  res.json(JSON.parse(events));
});

server.listen(port, () => {
  console.log(`Now listening on port ${port}`)
})
