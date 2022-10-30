import { createClient } from 'redis';

import { fetchAuth } from './services/auth.js';
import { fetchEvents } from './services/events.js';

export default async () => {
  const redisClient = createClient();
  await redisClient.connect();
  
  const token = await fetchAuth();

  const filter = { text: 'polygon' };

  const response = await fetchEvents(token.access_token, { page_size: 250, filter });
  const results = response?.data?.results;

  if (results) {
    await redisClient.set('events', JSON.stringify(results));
  }

  return redisClient;
}