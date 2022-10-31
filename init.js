import { createClient } from 'redis';

import { fetchAuth } from './services/auth.js';

const { ER_USERNAME } = process.env;

export default async () => {
  const redisClient = createClient();
  await redisClient.connect();
  
  const token = await fetchAuth();

  await redisClient.set(`token:${ER_USERNAME}`, JSON.stringify(token));

  return redisClient;
};