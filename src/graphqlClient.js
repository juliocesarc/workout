import { GraphQLClient } from 'graphql-request';

const API_URL = 'https://cefd-45-5-223-152.ngrok-free.app/graphql';

const client = new GraphQLClient(API_URL, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

export default client;
