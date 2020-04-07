import { Config } from './core.d';
import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
import * as HapiSwagger from 'hapi-swagger';
import * as Pack from '../../package.json';
import { Server } from '@hapi/hapi';
import { registerHelloRoutes } from '../hello/hello.routes';

export const initServer = async (config: Config): Promise<Server> => {
  const server: Server = new Server({
    port: config.serverPort,
    routes: {
      cors: true,
    },
  });

  const swaggerOptions: HapiSwagger.RegisterOptions = {
    info: {
      title: 'Test API Documentation',
      version: Pack.version,
    },
  };

  const plugins = [
    { plugin: Inert },
    { plugin: Vision },
    { plugin: HapiSwagger, options: swaggerOptions },
  ];

  await server.register(plugins);

  registerHelloRoutes(server);

  return server;
};
