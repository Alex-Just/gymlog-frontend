import ky from 'ky';

// Use an environment variable for the base URL
const prefixUrl = `${process.env.API_URL ? process.env.API_URL : ''}/`;

export const instance = ky.extend({
  prefixUrl,
  headers: {
    Accept: 'application/json',
  },
});
