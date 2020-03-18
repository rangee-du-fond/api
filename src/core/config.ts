import { EnvVar, Config } from './core.d';

const getEnvDefaultValue = (entries: EnvVar[], varName: string) => {
  return entries.find(env => env.name === varName).default;
};

export const createConfig = (expectedEnvVariables: EnvVar[]): Config => {
  return {
    serverPort: process.env.PORT || getEnvDefaultValue(expectedEnvVariables, 'PORT'),
  };
};
