import { createClient } from 'redis';

import { fetchAuth } from './services/auth.js';
import { fetchEvents } from './services/events.js';

const { ER_USERNAME } = process.env;

const redisClient = createClient();
await redisClient.connect();

const token = await fetchAuth();

await redisClient.set(`token:${ER_USERNAME}`, JSON.stringify(token));

const events = await fetchEvents(token.access_token);

console.log('events', events?.data?.results);

process.exit(0);