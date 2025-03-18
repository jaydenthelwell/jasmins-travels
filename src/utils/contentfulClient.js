import { createClient } from 'contentful';

const client = createClient({
  space: 'efoudtk79op7',
  accessToken: '-7moEaIGOj4vyj4qnkmMz9pqyFiBDyh8zOskxga3670', // Move to an environment variable in production
});

export default client;
