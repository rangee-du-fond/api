import { Server } from '@hapi/hapi';
import { getAllData } from './data.controller';

export const registerDataRoutes = (server: Server) => {
  server.route({
    method: 'GET',
    path: '/data',
    options: {
      tags: ['api'],
      description: 'route that returns all saved data',
    },
    handler: (req, h) => getAllData(),
  });
};
