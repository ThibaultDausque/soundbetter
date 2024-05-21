import { config } from 'dotenv';
config({
  path: '/Users/thibault/Desktop/work/soundbetter/.env',
});

export const jwtConstants = {
  secret: process.env.TOKEN_KEY,
};
