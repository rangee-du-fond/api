import { EnvVar } from './core.d';
import { initServer } from './server';
import { checkMissingEnvVariables } from './env-check';
import { createConfig } from './config';

process.on('unhandledRejection', err => {
  console.error(err);
  process.exit(1);
});

export const expectedEnvVariables: EnvVar[] = [
  { name: 'PORT', default: '3000' },
];

checkMissingEnvVariables(expectedEnvVariables);

const config = createConfig(expectedEnvVariables);

initServer(config).then(async server => {
  await server.start();
  console.log('Server running on %s', server.info.uri);
});
