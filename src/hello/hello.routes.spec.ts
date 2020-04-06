import { initServer } from '../core/server';
import { createConfig } from '../core/config';
import { expectedEnvVariables } from '../core';

describe('GET /hello', () => {
  let server;

  beforeEach(async () => {
    server = await initServer(createConfig(expectedEnvVariables));
  });

  afterEach(async () => {
    await server.stop();
  });

  it('returns hello world', async () => {
    const res = await server.inject({ method: 'GET', url: '/hello' });
    expect(res.statusCode).toEqual(200);
    const body = JSON.parse(res.payload);
    expect(body.message).toEqual('hello world!');
  });
});
