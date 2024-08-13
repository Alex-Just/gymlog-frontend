import ky from 'ky';

// Use an environment variable for the base URL
const prefixUrl = `${process.env.API_URL ? process.env.API_URL : ''}/`;

const userToken = process.env.USER_TOKEN;

export const instance = ky.extend({
  prefixUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  hooks: {
    beforeRequest: [
      request => {
        if (userToken) {
          request.headers.set('Authorization', `Token ${userToken}`);
        }
      },
    ],
  },
});
