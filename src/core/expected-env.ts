import { EnvVar } from './core.d';

export const getEnvDefaultValue = (entries: EnvVar[], varName: string) => {
  return entries.find(env => env.name === varName).default;
};

export const expectedEnvVariables: EnvVar[] = [
  { name: 'PORT', default: '3000' },
  { name: 'PG_HOST' },
  { name: 'PG_PORT', default: '5432' },
  { name: 'PG_DATABASE', default: 'postgres' },
  { name: 'PG_USER', default: 'postgres' },
  { name: 'PG_PASSWORD' },
];
